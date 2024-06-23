const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3005; // Adjust as needed

app.use(bodyParser.json());
app.use(cors());

// SSL certificate paths
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/lagarto5.de/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/lagarto5.de/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/lagarto5.de/chain.pem')
};

// Create a MySQL connection pool
const db = mysql.createPool({
  connectionLimit: 10,  // Adjust based on your server's capability
  host: '185.166.39.80',
  user: 'root',
  password: 'otto1.',
  database: 'shopping',
});

// Retrieve all shopping items
app.get('/api/shopping-list', (req, res) => {
  db.getConnection((err, connection) => {
      if (err) {
          console.error('Error getting connection:', err);
          res.status(500).send('Failed to get connection');
          return;
      }
      connection.query('SELECT * FROM list', (error, results) => {
          // Always release the connection back to the pool
          connection.release();
          
          if (error) {
              console.error('Query error:', error);
              res.status(500).json({ error: error.message });
              return;
          }
          res.json(results);
      });
  });
});


// Add a new item
// POST - Add a new item
app.post('/api/shopping-list', (req, res) => {
  const { name, done, optional } = req.body;
  const query = 'INSERT INTO list (name, done, optional) VALUES (?, ?, ?)';
  db.query(query, [name, done, optional], (error, result) => {
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      // Include the auto-generated `id` in the response
      res.status(201).json({ id: result.insertId, name, done, optional });
    }
  });
});

// PUT - Update the whole list
// backend.js

app.put('/api/shopping-list', (req, res) => {
  const items = req.body;
  if (!Array.isArray(items)) {
    return res.status(400).json({ error: 'Invalid input data, expected an array' });
  }

  // Clear the existing data and insert new data transactionally
  db.getConnection((err, connection) => {
    if (err) {
      console.error('Connection error:', err.message);
      return res.status(500).json({ error: err.message });
    }

    // Start a transaction
    connection.beginTransaction((err) => {
      if (err) {
        console.error('Transaction error:', err.message);
        return res.status(500).json({ error: err.message });
      }

      // Clear all existing data
      connection.query('DELETE FROM list', (err) => {
        if (err) {
          console.error('Error deleting existing data:', err.message);
          return connection.rollback(() => {
            res.status(500).json({ error: err.message });
          });
        }

        // Prepare a statement for inserting new data
        const query = 'INSERT INTO list (name, done, optional) VALUES (?, ?, ?)';
        const insertPromises = items.map(item => new Promise((resolve, reject) => {
          connection.query(query, [item.name, item.done, item.optional], (err) => {
            if (err) {
              return reject(err);
            }
            resolve();
          });
        }));

        // Commit all changes after successful inserts
        Promise.all(insertPromises)
          .then(() => {
            connection.commit((err) => {
              if (err) {
                console.error('Commit error:', err.message);
                return connection.rollback(() => {
                  res.status(500).json({ error: err.message });
                });
              }
              res.json({ message: 'All items updated successfully' });
            });
          })
          .catch((err) => {
            console.error('Insert error:', err.message);
            return connection.rollback(() => {
              res.status(500).json({ error: err.message });
            });
          });
      });
    });
  });
});


// DELETE - Delete an item by ID
app.delete('/api/shopping-list/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM list WHERE id = ?';
  db.query(query, [id], (error) => {
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      res.json({ message: `Item with id ${id} deleted successfully` });
    }
  });
});

const cron = require('node-cron');

// Schedule a task to run every day at midnight (or another time of your choice)
cron.schedule('0 */4 * * *', function() {
  console.log('Running a task every day at midnight');
  deleteCompletedItems();
});

db.on('error', (err) => {
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.error('Database connection was closed.');
  } else {
    console.error('Unexpected error on the database:', err);
  }
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).send('Internal Server Error');
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

function deleteCompletedItems() {
  const query = 'DELETE FROM list WHERE done = 1'; // Assuming 'done' is stored as a boolean 1 for true
  db.query(query, (error, results) => {
    if (error) {
      console.error('Failed to delete completed items:', error);
    } else {
      console.log(`Deleted ${results.affectedRows} completed items.`);
    }
  });
}


// Start the server
https.createServer(options, app).listen(port, () => {
  console.log(`Server running at https://lagarto5.de:${port}`);
});
