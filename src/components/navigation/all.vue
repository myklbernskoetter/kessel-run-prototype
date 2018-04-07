<!--
TODO:
- Adjust transition name/enter and leave classes to increase variability/ clean up animations.
 -->

 <!-- Data Set for user name, role, and other clues throughout the interface.
      All of this information is set during the login/initialization phase -->
<template lang="html">
  <nav class="site-nav">
    <div class="header-role" name="HeaderRole" tag="div" style="color: #fff" v-show="roleConfirmed != ''">
      <span v-bind:style="{ color: colorConfirmed}">{{roleConfirmed}}</span>
    </div>
    <div class="header-user" name="HeaderUser" tag="div" style="color: #fff" v-show="userName != '' && roleConfirmed !=''">
      <span>{{userName}}</span>
    </div>
    <div class="footer-clue" tag="div" style="color: #fff" v-show="clueConfirmed != ''">
      <span v-bind:style="{ color: colorConfirmed}">{{clueConfirmed}}</span>
    </div>
    <div class="users-online">
      <ul>
        <li v-for="(user, index) in users">{{user.name}}</li>
      </ul>
    </div>

    <!-- Recover/Reset Screen Options -->
    <transition-group
    name="transition-status"
    enter-active-class="fade-enter"
    leave-active-class="fade-leave"
    class="transition-status"
    v-show="loginStep == ''">
      <div class="continue-wrapper" key="status-wrapper">
        <button class="continue-button" type="button" @click="appContinue(), playSound(7)" name="button" key="continue-button">Continue</button>
        <button class="recover-button" type="button" @click="reset(), playSound(7)" name="button" key="restart-button">Restart</button>
      </div>
    </transition-group>

    <!-- Welcome Screen -->
    <transition-group
    name="transition-welcome"
    enter-active-class="fade-enter"
    leave-active-class="fade-leave"
    class="welcome-message"
    tag="div"
    v-show="loginStep == 'welcome'"
    >
      <h2 class="welcome-header" key="welcomeHeader">Welcome Aboard the USS Rocket NCC 1964</h2>
      <p class="welcome-text" key="welcomeMessage">
        <span style="animation-delay: 2500ms">We're out of low orbit today</span>
        <span style="animation-delay: 3500ms">and we'll be taking a quick run</span>
        <span style="animation-delay: 4500ms">around the area for a quick systems check.</span>
        <br />
        <span style="animation-delay: 5500ms">Please register your name</span>
        <span style="animation-delay: 6500ms">and then select your role</span>
        <span style="animation-delay: 7500ms">for today's exercises.</span>
        <br />
        <br />
        <span style="animation-delay: 8500ms">It should be a pretty routine shakedown cruise.</span>
        <span style="animation-delay: 10000ms">Certainly nothing out of the ordinary expected.</span>
        <span style="animation-delay: 12000ms">Good luck out there!</span>
      </p>
        <button class="menu-link" @click="[playSound(35), setStep('nameEntry')]" key="welcomeButton"><span>Enter</span></button>
    </transition-group>

    <!-- Enter and Confirm Name -->
    <transition-group
     name="transition-fade"
     enter-active-class="fade-enter"
     leave-active-class="fade-leave"
     class="site-nav-group"
     tag="div"
     mode="out-in">
        <input class="name-input" type="text" name="" value="" placeholder="Enter Your Name" key="nameInput" v-model="userName" v-show="loginStep == 'nameEntry'">
        <button
        class="menu-link name-submit"
        v-on:click="[playSound(35), setStep('roleSelect'), setUserName(), nameEmit(userName)]"
        key="nameSubmit"
        v-show="loginStep == 'nameEntry' && userName != ''">
          <span>Confirm Name: <br /> {{userName}}</span>
        </button>
    </transition-group>

    <!-- Role Selection Options and Confirmation -->
    <transition-group name="roleSelected" class="site-nav-group" tag="ul" mode="out-in">
      <li class="role-item menu-item" v-for="(role, index) in roleOptions" v-bind:key="role.name" v-show="loginStep == 'roleSelect' || loginStep == 'roleConfirm'">
        <button
        class="menu-link"
        v-bind:class="{selected: role.roleStatus != 'unselected'}"
        v-on:click="[playSound(3), setStep('roleConfirm'), selectedRole = role.name, selectedColor = role.color, selectedClue = role.puzzle1Number, roleDescription = role.description]"
        v-bind:style="{ backgroundColor: role.color}"
        v-if="loginStep == 'roleSelect' || loginStep == 'roleConfirm'">
          <span>{{role.name}}</span>
        </button>
      </li>
      <li key="roleSubmit" class="role-item menu-item" v-show="loginStep == 'roleConfirm'">
        <button
        class="menu-link"
        key="roleconfirm"
        type="button"
        @click=
        "[
        playSound(7),
        setRole(),
        setStep('final'),
        roleConfirmed = selectedRole,
        colorConfirmed = selectedColor,
        clueConfirmed = selectedClue,
        setColor(),
        roleEmit(roleConfirmed),
        roleSelectedEmit(roleConfirmed)
        ]"
        name="button">
          <span>Confirm:<br/> {{selectedRole}}</span>
        </button>
      </li>
    </transition-group>

    <!-- Captain Menu Items -->
    <transition-group name="roleSelected" v-bind:class="{closed: activePanel != ''}" class="site-nav-group" tag="ul" v-show="roleConfirmed === 'captain'" mode="out-in">
      <li class="menu-item" v-for="(option, index) in captainOptions" v-bind:key="option.panel" >
        <button class="menu-link" v-bind:style="{ backgroundColor: option.color}" v-on:click="[playSound(option.sound), activePanel = option.panel, setPanel()]">
          <span>{{option.name}}</span>
        </button>
      </li>
    </transition-group>

    <!-- Navigator Menu Items -->
    <transition-group name="roleSelected" v-bind:class="{closed: activePanel != ''}" class="site-nav-group" tag="ul" v-show="roleConfirmed === 'navigator'" mode="out-in">
      <li class="menu-item" v-for="(option, index) in navigatorOptions" v-bind:key="option.panel" >
        <button class="menu-link" v-bind:style="{ backgroundColor: option.color}" v-on:click="[playSound(option.sound), activePanel = option.panel, setPanel()]"><span>{{option.name}}</span></button>
      </li>
    </transition-group>

    <!-- Chronicler Menu Items -->
    <transition-group name="roleSelected" v-bind:class="{closed: activePanel != ''}" class="site-nav-group" tag="ul" v-show="roleConfirmed === 'chronicler'" mode="out-in">
      <li class="menu-item" v-for="(option, index) in chroniclerOptions" v-bind:key="option.panel" mode="out-in">
        <button class="menu-link" v-bind:style="{ backgroundColor: option.color}" v-on:click="[playSound(option.sound), activePanel = option.panel, setPanel()]"><span>{{option.name}}</span></button>
      </li>
    </transition-group>

    <!-- Comms Menu Options -->
    <transition-group name="roleSelected" v-bind:class="{closed: activePanel != ''}" class="site-nav-group" tag="ul"  v-show="roleConfirmed === 'comms officer'" mode="out-in">
      <li class="menu-item" v-for="(option, index) in commsOptions" v-bind:key="option.panel" mode="out-in">
        <button class="menu-link"v-bind:style="{ backgroundColor: option.color}" v-on:click="[playSound(option.sound), activePanel = option.panel, setPanel()]"><span>{{option.name}}</span></button>
      </li>
    </transition-group>
    <transition-group
      name="menu-toggle"
      tag="div"
      class="item-toggle"
      v-bind:class="{active: activePanel != ''}"
      enter-active-class="fade-enter"
      leave-active-class="fade-leave"
      v-show="activePanel != ''"
    >
      <button
        @click="[activePanel='', playSound(14)]"
        class="toggle-link"
        key = "toggle"
        >
        <span class="toggle-text">&#8672;</span>
      </button>
    </transition-group>
    <app-panels :panel="activePanel" :user="userName" @gate1Clear = "gate1Clear()"></app-panels>
  </nav>
</template>

<script>
import Vue from 'vue';
import Howler from 'vue-howler';
import VueLocalStorage from 'vue-localstorage';
import Panels from '../panels/all.vue';
import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, 'https://kessel-prototype.40d.io:8081');
Vue.use(VueLocalStorage);

export default {
  data() {
    return {
      loginStep: '',
      selectedRole: '',
      selectedColor: '',
      selectedClue: '',
      roleConfirmed: '',
      colorConfirmed: '',
      clueConfirmed: '',
      userName: '',
      activePanel: '',
      roleDescription: '',
      users: [],
      roles: [],
      roleOptions: [
        {
          name: 'captain',
          color: '#fc9827',
          sound: 7,
          puzzle1Number: '1',
          roleStatus: 'unselected',
          description:
          `The captain is in charge of directing the team,
          keepingtrack of progress, and keeping an eye on
          time limits throughout the excercise.`
        },
        {
          name: 'chronicler',
          color: '#f9c55a',
          sound: 7,
          puzzle1Number: '9',
          roleStatus: 'unselected',
          description:
          `The chronicler is in charge of many clues,
          posting to social media, and documenting any exciting developments.`
        },
        {
          name: 'navigator',
          color: '#c8b5ed',
          sound: 7,
          puzzle1Number: '8',
          roleStatus: 'unselected',
          description:
          `The navigator is responsible for the maps,
          navigating the surroundings, and keeping the
          team on track in their physical environment.`
        },
        {
          name: 'comms officer',
          color: '#cb99ca',
          sound: 7,
          puzzle1Number: '4',
          roleStatus: 'unselected',
          description:
          `The comms officer is primarily charged with
          radioing for help, receiving audio clues, and
          is the only user equipped with Slack.`
        },
      ],
      captainOptions: [
        {name: 'role-info', color: '#fc9827', panel: 'panel-captain-info', sound: 5},
        {name: 'progress', color: '#f9c55a', panel: 'panel-progress', sound: 2},
        {name: 'timer', color: '#c8b5ed', panel: 'panel-timer', sound: 3},
        {name: 'abilities', color: '#cb99ca', panel: 'panel-captain-abilities', sound: 4},
      ],
      navigatorOptions: [
        {name: 'role-info', color: '#f9c55a', panel: 'panel-navigator-info', sound: 5},
        {name: 'map', color: '#c8b5ed', panel: 'panel-map', sound: 2},
        {name: 'compass', color: '#cb99ca', panel: 'panel-compass', sound: 3},
        {name: 'navigate', color: '#fc9827', panel: 'panel-navigate', sound: 4},
      ],
      chroniclerOptions: [
        {name: 'role-info', color: '#c8b5ed', panel: 'panel-chronicler-info', sound: 5},
        {name: 'documents', color: '#cb99ca', panel: 'panel-documents', sound: 2},
        {name: 'snapChat', color: '#fc9827', panel: 'panel-snapchat', sound: 3},
        {name: 'clues', color: '#f9c55a', panel: 'panel-clues', sound: 4},
      ],
      commsOptions: [
        {name: 'role-info', color: '#cb99ca', panel: 'panel-comms-info', sound: 5},
        {name: 'tune-radio', color: '#fc9827', panel: 'panel-tune', sound: 2},
        {name: 'clips', color: '#f9c55a', panel: 'panel-clips', sound: 3},
        {name: 'slack', color: '#c8b5ed', panel: 'panel-slack', sound: 4},
      ],
    }
  },
  // Listen for socket emits and act on them.
  sockets:{
    connect: function() {
      console.log('socket connected');
    },
    roles: function(roles) {
      this.roles = [];
      this.roles.push(...roles);
      this.roles.sort((a, b) => a.id - b.id);
    },
    roleSelected: function(role) {
      console.log(role);
      for (let i = 0; i < this.roleOptions.length; i++) {
        if (this.roleOptions[i].name === role) {
          this.roleOptions[i].roleStatus = 'selected';
          this.roleOptions[i].color = 'gray';
        }
      }
    },
    names: function(users) {
      this.users = [];
      this.users.push(...users);
      this.users.sort((a, b) => a.id - b.id);
    }
  },
  methods: {
    // This controls which set of interactive buttons are available at each step of the process.
    setStep(step) {
      this.loginStep = step;
      Vue.localStorage.set('loginStep', step);
    },
    // Setting various variables throughout the login process
    setUserName() {
      Vue.localStorage.set('userName', this.userName);
    },
    setColor() {
      Vue.localStorage.set('color', this.colorConfirmed);
    },
    setRole() {
      Vue.localStorage.set('role', this.selectedRole);
    },
    setPanel() {
      Vue.localStorage.set('panel', this.activePanel);
      Vue.localStorage.set('clue', this.clueConfirmed);
    },
    // When a child emits that it has cleared gate1, update the clue variable.
    gate1Clear() {
      this.clueConfirmed = '';
    },
    // Emit information to the server
    roleEmit(role) {
      this.$socket.emit('roles', role);
    },
    roleSelectedEmit(role) {
      this.$socket.emit('role_selected', role);
    },
    nameEmit(name) {
      this.$socket.emit('name_confirmed', name);
    },
    appContinue(){
      // If a returning user chooses to continue, reload existing information from storage and set to variables
      // Emit this information to the server so that the information can be disseminated between all active users.
      const step = Vue.localStorage.get('loginStep');
      const name = Vue.localStorage.get('userName');
      const role = Vue.localStorage.get('role');
      const panel = Vue.localStorage.get('panel');
      const color = Vue.localStorage.get('color');
      const clue = Vue.localStorage.get('clue');

      this.loginStep = step;
      this.userName = name;
      this.roleConfirmed = role;
      this.activePanel = panel;
      this.colorConfirmed = color;
      this.clueConfirmed = clue;

      this.$socket.emit('name_confirmed', name);
      this.$socket.emit('role_selected', role);
    },
    reset() {
      this.loginStep = 'welcome';
      localStorage.clear();
    },
    playSound(sound) {
      if (sound === 7) {
        var sound1 = new Howl({
          src: ['sounds/computer_work_beep.mp3']
        });
        sound1.play();
        setTimeout(function(){
          var sound2 = new Howl({
            src: [`sounds/computerbeep_${sound}.mp3`]
          });
          sound2.play();
        }, 1500);
        } else {
          var sound3 = new Howl({
            src: [`sounds/computerbeep_${sound}.mp3`]
          });
          sound3.play();
        }
      }
    },
 beforeMount() {
   // Retrieve any existing information from localstorage
   const step = Vue.localStorage.get('loginStep');
   const name = Vue.localStorage.get('userName');
   const role = Vue.localStorage.get('role');
   const panel = Vue.localStorage.get('panel');
   const color = Vue.localStorage.get('color');
   const clue = Vue.localStorage.get('clue');
   if ( step == null) {
     this.loginStep = 'welcome';
     Vue.localStorage.set('loginStep', 'welcome');
   } else {
     this.loginStep = '';
   }
 },
 components: {
   'app-panels': Panels,
 }
}
</script>

<style lang="scss" scoped>

.site-nav {
  flex-grow: 1;
}

.continue-wrapper {
  text-align: center;

  button {
    border: 0;
    font-size: 8rem;
    padding: 2rem 4rem;
  }

  .continue-button {
    background-color: #fc9827;
  }

  .recover-button {
    background-color: #f31431;
  }
}

.header-user {
  position: absolute;
  left: 15rem;
  top: 17rem;
  width: 0;
  overflow: hidden;
  white-space:nowrap;
  animation: typewriter2 2s steps(10, end) forwards;
}
.header-role {
  position: absolute;
  right: 5rem;
  top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12rem;
  padding: 0 2rem;
  text-transform: uppercase;
  font-size: 8rem;
  font-weight: bold;
  background-color: #000;
  width: 0;
  overflow: hidden;
  white-space:nowrap;
  animation: typewriter2 2s steps(12, end) forwards;
}

.welcome-text,
.welcome-header {
  margin-top: 0;
  padding: 0 2rem 2rem 10rem;
  span {
    display: block;
    width: 0;
    overflow: hidden;
    white-space:nowrap;
    animation: typewriter 2s steps(125, end) forwards;
  }
}

.footer-clue {
  position: absolute;
  right: 5rem;
  bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12rem;
  padding: 0 2rem;
  text-transform: uppercase;
  font-size: 12rem;
  font-weight: bold;
  background-color: #000;
  width: 0;
  overflow: hidden;
  white-space:nowrap;
  animation: typewriter2 2s steps(12, end) forwards;
  z-index: 1;
}

.welcome-message {
  transform: rotateY(90deg);
  animation: nav-activation 1000ms linear 750ms forwards;
}

.users-online {
  position: absolute;
  top: 15rem;
  right: 5rem;
}

.name-input {
  background-color: #000;
  border: 0;
  color: #fc9827;
  min-height: 10rem;
  font-size: 8rem;
  z-index: 1;
  &:focus {
    &::placeholder {
      opacity: 0;
    }

  }
  &::placeholder {
    color: #fc9827;
    transition: opacity 500ms;
  }
}

.continue-wrapper {
  opacity: 0;
  animation: nav-activation 1500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.fade-enter {
  animation: fade-in 1500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.fade-leave {
  animation: fade-out 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.site-nav-group {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: transform 1s;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  width: 85%;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  background-color: #000;
  z-index: 1;

  &.closed {
    // padding-top: 120px;
    transform: translateX(-120rem) translateY(-50%);

    .item-link {
      transform: rotateY(0);
      transition: transform 0;
      transition-delay: 0;
    }
  }
}

.menu-link {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: auto;
  height: 100%;
  border: 0;
  padding: 15px 10px;
  background: transparent;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 6rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #000;
  background-color: #fc9827;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    display: block;
    width: 2rem;
    height: 100%;
    background-color: inherit;
  }

  &::before {
    content: '';
    left: -3.5rem;
  }
  &::after {
    content: '';
    right: -3.5rem;
  }
  span {
    display: block;
  }

  &:hover,
  &:focus,
  &:active {

    span {
      transform: translate3d(.5rem,0,0);
    }
  }
}

.selected {
  pointer-events: none;
  opacity: .9;

  .menu-item {
    background-color: grey;
  }
}

.toggle-link {
  position: absolute;
  top: 50%;
  transform: translate3d(0,-33.5rem,0);
  display: block;
  width: 10rem;
  height: 10rem;
  background-color: #fc9827;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    display: block;
    width: 2rem;
    height: 100%;
    background-color: inherit;
  }

  &::after {
    content: '';
    right: -3.5rem;
  }
}

.toggle-text {
  display: block;
  width: 10rem;
  height: 10rem;
  color: #ffffff;
  font-size: 6rem;
}

.menu-item {
  grid-column: 1;
  display: flex;
  margin: 0;
}

// fade Transition
.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
  transition-delay: 500ms;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

// rotate in Transition
.roleSelected-enter-active {
  transition: all 2s ease;
  transition-delay: 500ms;
}

.roleSelected-leave-active {
  transition: all .5s linear;
}

.roleSelected-enter {
  transform: rotateX(90deg);
}

.roleSelected-enter-to {
  transform: rotateX(0);
}

.roleSelected-leave {
  transform: rotateX(0);
}

.roleSelected-leave-to {
  transform:rotateX(90deg);
}
</style>
