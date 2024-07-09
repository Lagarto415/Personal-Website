<script setup>
import tick from '../img/tick.svg'
import undo from '../img/undo.png'
import closed from '../img/closedDrop.svg'
import open from '../img/openDrop.svg'
</script>

<template>
  <div class="head">
    <div class="back">
      <img src="../img/back.svg" @click="$router.go(-1)" />
    </div>
    <div class="title">
      <p>Einkaufsliste</p>
      <!-- <img src="../img/edit.svg"> -->
    </div>
  </div>
  <div class="main">
    <div class="normal">
      <div class="rowTitle">
        <p>Normal</p>
        <img :src="closedImage" @click="toggleSee('normal')" :class="{ rotate: showNormal }" />
      </div>
      <ul v-if="showNormal">
        <li v-for="(item, index) in normalItems" :key="index">
          <div class="row">
            <div class="name" :class="item.done ? 'ItemDone' : ''">
              <p>{{ item.name }}</p>
              <p class="username">{{ item.username }}</p>
            </div>
            <div class="done" @click="toggleDone(item.id)">
              <img :src="item.done ? undoImage : tickImage" alt="Done or Undo" />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="optional">
      <div class="rowTitle">
        <p>Optional</p>
        <img :src="closedImage" @click="toggleSee('optional')" :class="{ rotate: showOptional }" />
      </div>
      <ul v-if="showOptional">
        <li v-for="(item, index) in optionalItems" :key="index">
          <div class="row optionalItem">
            <div class="name" :class="item.done ? 'ItemDone' : ''">
              <p>{{ item.name }}</p>
              <p class="username">{{ item.username }}</p>
            </div>
            <div class="done" @click="toggleDone(item.id)">
              <img :src="item.done ? undoImage : tickImage" alt="Done or Undo" />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="add">
      <transition name="fade">
        <div class="newItem" v-if="showAddPanel">
          <img
            @click="
              (showAddPanel = !showAddPanel), (newItemInput = ''), (newItemInputOptional = false)
            "
            src="../img/openDrop.svg"
          />
          <input type="text" placeholder="Neues Produkt" v-model="newItemInput" id="newItem" />
          <input
            type="checkbox"
            v-model="newItemInputOptional"
            id="newItemOptional"
            class="custom-checkbox"
          />
        </div>
      </transition>
      <img
        src="../img/Add.svg"
        @click="!showAddPanel ? (showAddPanel = !showAddPanel) : addItem()"
      />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

:root {
  --blue: #00a3ff;
  --violet: #d209f2;
  --grey: #ededed;
  --lightblue: #e9feff;
  --fontgrey: #6b6b6b;
}

.head {
  height: 15vh;
  position: relative;
  z-index: 1;
  padding: 10px;
  background: linear-gradient(to right, var(--blue), var(--violet));
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 500;
  .back {
    img {
      width: 20px;
      height: 20px;
    }
  }
  .title {
    display: flex;
    justify-content: space-around;
    color: white;
    img {
      width: 20px;
      height: 20px;
    }
    align-items: center;
  }
}

.main {
  padding-top: 30px;
  background-color: white;
  width: 100vw;
  margin-top: -6vh;
  position: relative;
  z-index: 2;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px -10px 10px rgba(1, 1, 1, 0.08);
}
.add {
  img {
    width: 100px;
  }
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  position: fixed;
  display: flex;
  justify-content: center;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.newItem {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  input#newItem {
    padding-block: 10px;
    padding-inline: 15px;
    border-radius: 5px;
    border: 1px solid var(--fontgrey);
  }
  input#newItemOptional {
    transform: scale(2);
  }
  img {
    width: 40px;
  }
}

.rowTitle {
  img {
    width: 40px;

    transition: transform 0.3s ease-in-out;
  }
  box-shadow: 0px 0px 5px rgba(1, 1, 1, 0.3);
  margin-block: 10px;
  width: 95vw;
  color: var(--fontgrey);
  background-color: var(--grey);
  font-weight: 500;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  padding-block: 10px;
  border-radius: 5px;
  align-items: center;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  box-shadow: 0px 0px 1px rgba(1, 1, 1, 0.2);
  margin-top: 10px;
  padding-block: 10px;
  border-radius: 5px;
  .name {
    display: flex;
    width: 65%;
    justify-content: space-between;
    padding-left: 10px;
    color: var(--fontgrey);
    font-size: 18px;
    font-weight: 500;
  }
  .username{
    color: #c5c5c5;
  }
  .done {
    padding-right: 10px;
    img {
      width: 60px;

      transition: transform 0.3s ease-in-out;
    }
  }
}

.row .name.ItemDone {
  text-decoration: line-through !important;
  color: var(--grey) !important;
}

.optionalItem {
  background-color: var(--lightblue);
}

ul {
  list-style: none;
}

.rotate {
  transition: transform 0.3s ease-in-out; /* Adjust timing and easing as needed */
  transform: rotate(90deg); /* Adjust the rotation angle if needed */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'ListView',
  data() {
    return {
      newItemInput: '',
      username: '',
      newItemInputOptional: false,
      tickImage: tick,
      undoImage: undo,
      closedImage: closed,
      openImage: open,
      items: [],
      showNormal: true,
      showOptional: false,
      showAddPanel: false
    }
  },
  mounted() {
    console.log('List component has been mounted!')
    this.username = Cookies.get('username')
    console.log(this.username)
    // Fetch the initial list of items when the component mounts
    this.fetchItems()
  },
  computed: {
    normalItems() {
      return this.items.filter((item) => !item.optional)
    },
    optionalItems() {
      return this.items.filter((item) => item.optional)
    }
  },
  methods: {
    async fetchItems() {
      try {
        const response = await fetch('https://lagarto5.de:3005/api/shopping-list')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        // Log data to verify that each item has an `id` field
        console.log('Fetched data:', data)
        this.items = data
      } catch (error) {
        console.error('Failed to fetch items:', error)
      }
    },
    async updateAllItems() {
      try {
        const response = await fetch('https://lagarto5.de:3005/api/shopping-list', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.items)
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
      } catch (error) {
        console.error('Failed to update all items:', error)
      }
    },
    async deleteItem(index) {
      const id = this.items[index].id // Ensure `id` exists on the object
      if (id === undefined) {
        console.error('Item does not have an id:', this.items[index])
        return
      }
      try {
        const response = await fetch(`https://lagarto5.de:3005/api/shopping-list/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        this.items.splice(index, 1) // Update the local list after successful deletion
      } catch (error) {
        console.error(`Failed to delete item with id ${id}:`, error)
      }
    },
    toggleDone(itemId) {
      const item = this.items.find((item) => item.id === itemId)
      if (item) {
        item.done = !item.done
        this.updateAllItems() // Optionally, you might want to update only the changed item
      }
    },
    toggleSee(what) {
      if (what === 'normal') {
        this.showNormal = !this.showNormal
      }
      if (what === 'optional') {
        this.showOptional = !this.showOptional
      }
    },
    addItem() {
      this.items.push({
        name: this.newItemInput,
        done: false,
        optional: this.newItemInputOptional,
        username: this.username
      })
      this.newItemInput = ''
      this.newItemInputOptional = false
      this.updateAllItems() // Immediately update all items after adding a new one
      this.showAddPanel = !this.showAddPanel
    }
  }
}
</script>
