<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <img src="../../assets/img/game/game_icon.png" />
      </div>
      <div class="ressource">
        <!-- <img src="../../assets/img/game/mineral.png" /> -->
        <p>
          <span id="minerals">{{ current_minerals }} Mineralien</span
          ><span id="mineral_income"></span>
        </p>
      </div>
      <div class="ressource">
        <!-- <img src="../../assets/img/game/water.png" /> -->
        <p>
          <span id="water">{{ current_water }} Wasser</span><span id="water_income"></span>
        </p>
      </div>
      <div class="ressource">
        <!-- <img src="../../assets/img/game/gold.png" /> -->
        <p>
          <span id="gold"> {{ current_gold }} Gold</span><span id="gold_income"></span>
        </p>
      </div>
      <div class="ressource">
        <!-- <img src="../../assets/img/game/citizen.png" /> -->
        <p>
          <span id="citizens"> {{ current_citizens }} Einwohner</span
          ><span id="citizen_income"></span>
        </p>
      </div>
    </div>
    <div class="main">
      <div class="buildmenu" id="buildmenu">
        <div class="buildimages">
          <div class="builditem">
            <a @click="upgrade('habitats')" id="buildobj"
              ><img src="../../assets/img/game/newhabitat.png"
            /></a>
            <p>
              <img src="../../assets/img/game/mineral.png" /><span id="price_habitats">{{
                habitat_price[habitats - 1].price
              }}</span>
            </p>
          </div>
          <div class="builditem">
            <a @click="buildable('open', 'mine')" id="buildobj"
              ><img src="../../assets/img/game/upgrademineral.png"
            /></a>
            <p>
              <img src="../../assets/img/game/mineral.png" /><span id="price_minerals">{{
                mineral_upgradeprice[minerals_level].price
              }}</span>
            </p>
          </div>
          <div class="builditem">
            <a @click="buildable('open', 'water')" id="buildobj"
              ><img src="../../assets/img/game/upgradewater.png"
            /></a>
            <p>
              <img src="../../assets/img/game/mineral.png" /><span id="price_water">
                {{ water_upgradeprice[water_level].price }}
              </span>
            </p>
          </div>
        </div>
        <div class="buildmenu_close">
          <a @click="buildmenu('close')"><img src="../../assets/img/game/x.png" /></a>
        </div>
      </div>
      <div class="eventpopup" id="eventpopup" ref="eventpopup">
        <div class="event_name">
          <p id="eventname">{{ currentEventName }}</p>
        </div>
        <div>
          <p id="event_description">{{ currentEventDescription }}</p>
        </div>
        <div>
          <p>{{ currentEventOption1 }}</p>
          <p>{{ currentEventOption2 }}</p>
        </div>
        <div class="event_options">
          <button ref="option1_button">Option 1</button>
          <button @click="eventmenu('close')">Ignorieren</button>
          <button ref="option2_button">Option 2</button>
        </div>
      </div>
      <div class="buildable" id="buildable_mine">
        <div class="buildable_close">
          <a @click="buildable('close', 'mine')"><img src="../../assets/img/game/x.png" /></a>
        </div>
        <div class="buildable_headline">
          <p id="b_headline">Mine</p>
        </div>
        <div class="buildable_image">
          <img src="../../assets/img/game/mine.png" />
        </div>
        <div class="buildable_stats">
          <p>Mineralien pro Sekunde: {{ mineralsPS }}</p>
          <p>Effizienz: <span>0</span></p>
          <p>Arbeiter: {{ workers[0].amount }} / {{ workers[0].max }}</p>
        </div>
        <div class="buildable_actions">
          <div class="buildable_actions_upgrade">
            <button @click="upgrade('minerals')">Verbessern</button>
            <button>Effizienz steigern</button>
          </div>
          <div class="buildable_actions_upgrade">
            <button>Arbeiter zuweisen</button>
            <button>Arbeiter entfernen</button>
          </div>
        </div>
      </div>
      <div class="buildable" id="buildable_water">
        <div class="buildable_close">
          <a @click="buildable('close', 'water')"><img src="../../assets/img/game/x.png" /></a>
        </div>
        <div class="buildable_headline">
          <p id="b_headline">Wasserpumpe</p>
        </div>
        <div class="buildable_image">
          <img src="../../assets/img/game/waterpump.png" />
        </div>
        <div class="buildable_stats">
          <p>Wasser pro Sekunde: {{ waterPS }}</p>
          <p>Effizienz: {{ workerEff[workers[2].amount].eff }}</p>
          <p>Arbeiter: <span>0 / 0</span></p>
        </div>
        <div class="buildable_actions">
          <div class="buildable_actions_upgrade">
            <button @click="upgrade('water')">Verbessern</button>
            <button>Effizienz steigern</button>
          </div>
          <div class="buildable_actions_upgrade">
            <button>Arbeiter zuweisen</button>
            <button>Arbeiter entfernen</button>
          </div>
        </div>
      </div>
      <div class="stats">
        <p>Unterkünfte: {{ habitats }}</p>
        <p>Mineralmine Level: {{ minerals_level }}</p>
        <p>Wasserpumpen: {{ water_level }}</p>
      </div>
      <div class="buttons">
        <button id="expedition_button">Expedition</button>
        <button id="build_button" @click="buildmenu('open')">Bauen</button>
        <button id="settings_button">Einstellungen</button>
      </div>
    </div>
  </div>
</template>

<style>
@import url(../../assets/var.css);
:root {
  --game_bg: var(--rd);
  --game_sec: var(--bg);
}

.container {
  display: flex;
  flex-direction: column;
  background-color: var(--bg);
  color: white;
  margin: 0;
  padding: 0;
  font-family: var(--fontfamily);
  list-style: none;
  width: 100vw;
  position: relative;
  height: 100%;
}

/* HEADER */
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--game_sec);
  padding-block: 10px;
  margin: 15px;
  border-radius: 10px;
}

.ressource {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background-color: var(--game_sec);
  p {
    margin-left: 30px;
    padding-inline: 60px;
    padding-block: 15px;
    background-color: var(--game_bg);
  }
}

.ressource img,
.x img {
  width: 50px;
  background-color: var(--game_sec);
  cursor: pointer;
}

.logo img {
  width: 80px;
  background-color: var(--game_sec);
}

.logo,
.x,
.x a {
  background-color: var(--game_sec);
}

.x {
  display: flex;
  justify-content: space-around;
  width: auto;
}

/* MAIN */

.main {
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--game_sec);
  border-radius: 10px;
  min-height: 50%;
  position: relative;
}

.stats {
  display: flex;
  gap: 35px;
  background-color: var(--game_sec);
  font-size: 20px;
}

.stats p {
  margin: 10px; /* Adjust margin as needed */
  background-color: var(--game_bg);
  padding: 20px;
}

.buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px; /* Add margin to create space between stats and buttons */
}

.buttons button {
  background-color: var(--game_bg);
  padding: 20px;
  width: 200px;
  border: none;
  border-radius: 40px;
  font-size: 20px;
  transition: 0.2s linear;
}

.buttons button:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.buildmenu {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  background-color: var(--bg);
  border: 2px solid white;
  width: 50%;
  height: 80%;
  visibility: hidden;
}

.builditem img {
  height: 25px;
}

#buildobj img {
  height: 80%;
  width: 100%;
}

.builditem a:hover {
  cursor: pointer;
}

.buildimages {
  display: flex;
  justify-content: center;
  width: 100%;
}

.builditem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 25px;
}

.buildmenu_close {
  top: 5%;
  left: 91%;
  position: absolute;
}

.buildmenu_close img {
  width: 50px;
}

.buildmenu_close a:hover {
  cursor: pointer;
}

.eventpopup {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  background-color: var(--bg);
  border: 2px solid white;
  width: 50%;
  height: 80%;
  visibility: hidden;
}

.event_options {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
}
.event_options button,
.buildable button {
  width: 90%;
  background-color: var(--game_bg);
  border: 1px solid white;
  padding-block: 10px;
  font-size: 15px;
  cursor: pointer;
}

button {
  color: white;
}

.event_name,
.buildable_headline {
  font-size: 25px;
}

.buildable {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  background-color: var(--bg);
  border: 2px solid white;
  width: 50%;
  height: auto;
  visibility: hidden;
}

.buildable_image {
  position: relative;
}

.buildable_image img {
  width: 50%;
}

.buildable_actions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  width: 100%;
}

.buildable_actions_upgrade {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.buildable_close {
  top: 3%;
  right: 3%;
  position: absolute;
}

.buildable_close img {
  width: 50px;
  cursor: pointer;
}

@media only screen and (max-width: 1550px) {
  .ressource img,
  .x img {
    width: 40px;
    background-color: var(--game_sec);
  }

  .logo img {
    width: 40px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      hour: 0,
      minute: 0,
      current_minerals: 50,
      current_water: 0,
      current_gold: 0,
      current_citizens: 1,

      minerals_level: 0,
      water_level: 0,
      gold_level: 0,

      habitats: 1,

      mineralsPS: 0,
      waterPS: 0,
      goldPS: 0,
      citizensPS: 0,

      workers: [
        { job: 'mine', amount: 0, max: 0 },
        { job: 'water', amount: 0, max: 0 },
        { job: 'child', amount: 0, max: 0 }
      ],

      workerEff: [
        { lvl: 1, eff: 1 },
        { lvl: 2, eff: 1.1 },
        { lvl: 3, eff: 1.2 },
        { lvl: 4, eff: 1.3 },
        { lvl: 5, eff: 1.4 },
        { lvl: 6, eff: 1.5 }
      ],

      mineral_upgradeprice: [
        { lvl: 1, price: 50, ps: 1 },
        { lvl: 2, price: 100, ps: 2 },
        { lvl: 3, price: 200, ps: 3 }
      ],
      water_upgradeprice: [
        { lvl: 1, price: 200, ps: 0.5 },
        { lvl: 2, price: 400, ps: 1 },
        { lvl: 3, price: 800, ps: 2 }
      ],
      habitat_price: [
        { lvl: 1, price: 500 },
        { lvl: 2, price: 1000 },
        { lvl: 3, price: 2000 }
      ],

      AllEvents: [
        {
          name: 'Piraten',
          option1: 'Verteidigen',
          option2: 'Verhandeln',
          chance: 0.3,
          description: 'Es sind Piraten lul'
        },
        {
          name: 'Aliens',
          option1: 'Verteidigen',
          option2: 'Verhandeln',
          chance: 0.6,
          description:
            'Ein großes, dir fremdes Schiff landet in der Nähe deines Dorfes. Es scheint nach etwas zu suchen, wobei es sich deinem Dorf nähert.'
        },
        {
          name: 'Meteoren',
          option1: 'Gebäude verstärken',
          option2: 'Dorf evakuieren',
          chance: 0.9,
          description:
            'Im Himmel erscheinen viele helle Punkte. Durch dein Training weißt du: das kann nur eines heißen: Meteoren!'
        }
      ],

      currentEventName: '',
      currentEventDescription: '',
      currentEventOption1: '',
      currentEventOption2: ''
    }
  },
  methods: {
    gameloop() {
      this.current_minerals += this.mineralsPS
      this.current_water += this.waterPS
      this.current_gold += this.goldPS

      this.citizen += this.citizensPS

      if (Math.random() > 0.9) {
        this.eventgeneration()
      }
    },
    eventgeneration() {
      if (this.AllEvents.length === 0) {
        console.log('No events loaded')
      }
      this.eventhandler(Math.floor(Math.random() * this.AllEvents.length))
    },
    saveGameState() {
      let gameState = {
        current_minerals: this.current_minerals,
        current_water: this.current_water,
        current_gold: this.current_gold,
        current_citizens: this.current_citizens,
        minerals_level: this.minerals_level,
        water_level: this.water_level,
        gold_level: this.gold_level,
        habitats: this.habitats
      }
      document.cookie = `gamestate=${JSON.stringify(gameState)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
    },
    loadGameState() {
      let cookieData = document.cookie
        .split(';')
        .find((cookie) => cookie.trim().startsWith('gamestate='))
      if (cookieData) {
        const gameStateString = cookieData.split('=')[1]
        const gameState = JSON.parse(gameStateString)
        this.current_minerals = gameState.current_minerals
        this.current_water = gameState.current_water
        this.current_gold = gameState.current_gold
        this.current_citizens = gameState.current_citizens
        this.minerals_level = gameState.minerals_level
        this.water_level = gameState.water_level
        this.gold_level = gameState.gold_level
        this.habitats = gameState.habitats
      }
    },
    pauseInterval() {
      clearInterval(this.intervalId) // Clears the interval
      console.log('interval paused')
    },
    resumeInterval() {
      this.intervalId = setInterval(this.gameloop, 1000)
      console.log('interval resumed')
    },

    upgrade(object) {
      console.log(this.current_minerals)
      console.log(this.mineral_upgradeprice[this.minerals_level].price)
      if (object == 'minerals') {
        if (this.current_minerals >= this.mineral_upgradeprice[this.minerals_level].price) {
          this.current_minerals -= this.mineral_upgradeprice[this.minerals_level].price
          this.minerals_level++
          this.mineralsPS = this.mineral_upgradeprice[this.minerals_level - 1].ps
          console.log('minerals upgraded')
        } else {
          console.log('Not enough minerals')
        }
      } else if (object == 'water') {
        if (this.current_minerals >= this.water_upgradeprice[this.water_level].price) {
          this.current_minerals -= this.water_upgradeprice[this.water_level].price
          this.water_level++
          console.log('water upgraded')
        } else {
          console.log('Not enough minerals')
        }
      } else if (object == 'gold') {
        if (this.current_minerals >= this.gold_upgradeprice[this.gold_level].price) {
          this.current_minerals -= this.gold_upgradeprice[this.gold_level].price
          this.gold_level++
          console.log('gold upgraded')
        } else {
          console.log('Not enough minerals')
        }
      } else if (object == 'habitats') {
        if (this.current_minerals >= this.habitat_price[this.habitats - 1].price) {
          this.current_minerals -= this.habitat_price[this.habitats - 1].price
          this.habitats++
          console.log('habitats upgraded')
        } else {
          console.log('Not enough minerals')
        }
      } else {
        console.log('error in upgrade function: Not a valid object')
      }
    },

    resetGame() {
      // Delete the save game cookie
      document.cookie = 'gameState=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

      // Reset all game variables to their initial state
      this.current_minerals = 50
      this.current_water = 0
      this.current_gold = 0
      this.current_citizens = 1
      this.minerals_level = 0
      this.water_level = 0
      this.gold_level = 0
      this.habitats = 1
    },
    buildmenu(action) {
      if (action == 'open') {
        document.getElementById('buildmenu').style.visibility = 'visible'

        document.getElementById('build_button').style.visibility = 'hidden'
        document.getElementById('expedition_button').style.visibility = 'hidden'
        document.getElementById('settings_button').style.visibility = 'hidden'
      } else if (action == 'close') {
        document.getElementById('buildmenu').style.visibility = 'hidden'
        document.getElementById('build_button').style.visibility = 'visible'
        document.getElementById('expedition_button').style.visibility = 'visible'
        document.getElementById('settings_button').style.visibility = 'visible'
      } else {
        console.log('error in buildmenu function: Not a valid action')
      }
    },
    buildable(action, which) {
      let obj

      if (which == 'mine') {
        obj = document.getElementById('buildable_mine')
        this.buildmenu('close')
      }
      if (which == 'water') {
        obj = document.getElementById('buildable_water')
        this.buildmenu('close')
      }
      if (action == 'open') {
        obj.style.visibility = 'visible'

        document.getElementById('build_button').style.visibility = 'hidden'
        document.getElementById('expedition_button').style.visibility = 'hidden'
        document.getElementById('settings_button').style.visibility = 'hidden'
      } else if (action == 'close') {
        obj.style.visibility = 'hidden'
        document.getElementById('build_button').style.visibility = 'visible'
        document.getElementById('expedition_button').style.visibility = 'visible'
        document.getElementById('settings_button').style.visibility = 'visible'
      } else {
        console.log('error in buildable function: Not a valid action')
      }
    },
    eventmenu(action) {
      if (action == 'open') {
        this.pauseInterval()
        document.getElementById('eventpopup').style.visibility = 'visible'

        document.getElementById('build_button').style.visibility = 'hidden'
        document.getElementById('expedition_button').style.visibility = 'hidden'
        document.getElementById('settings_button').style.visibility = 'hidden'
      } else if (action == 'close') {
        document.getElementById('eventpopup').style.visibility = 'hidden'
        document.getElementById('build_button').style.visibility = 'visible'
        document.getElementById('expedition_button').style.visibility = 'visible'
        document.getElementById('settings_button').style.visibility = 'visible'
        this.resumeInterval()
      } else {
        console.log('error in eventmenu function: Not a valid action')
      }
    },
    wait(time) {
      return new Promise((resolve) => setTimeout(resolve, time))
    },
    eventhandler(e) {
      const event = this.AllEvents[e]
      console.log('Event:', event.name)

      if (event.option2) {
        console.log('Option 1:', event.option1)
        console.log('Option 2:', event.option2)

        this.eventmenu('open')

        this.currentEventName = event.name
        this.currentEventDescription = event.description
        this.currentEventOption1 = 'Option1: ' + event.option1
        this.currentEventOption2 = 'Option2: ' + event.option2

        this.$refs.option1_button.addEventListener('click', this.executeOption1)
        this.$refs.option2_button.addEventListener('click', this.executeOption2)
      } else {
        this.executeEffect(event.option1, event.chance)
      }
    },
    executeEffect(action, chance) {
      switch (action) {
        case 'Verteidigen': {
          console.log(chance)
          break
        }
        default: {
          console.log('error in executeEffect function: Not a valid effect')
        }
      }
    }
  },
  mounted() {
    // Load game state or set default values
    this.loadGameState()

    // Ensure resource levels are initialized properly
    this.minerals_level = this.minerals_level || 0
    this.water_level = this.water_level || 0
    this.current_citizens = this.current_citizens || 0

    // Set max values for workers based on resource levels
    this.workers[0].max = this.minerals_level
    this.workers[1].max = this.water_level
    this.workers[2].max = this.current_citizens

    // Start the game loop
    this.intervalId = setInterval(this.gameloop, 1000)
  }
}
</script>
