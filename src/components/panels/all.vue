<template lang="html">
  <div class="">
    <!-- <transition-group
    name="slide"
    enter-active-class="panel-enter"
    leave-active-class="panel-leave"
    mode="out-in"
    > -->
      <!-- Captain Panels -->
      <app-captain-info @gate1Clear = "gate1Clear()" class="panel" v-show="panel == 'panel-captain-info'" key="panel-1">{{panel}}</app-captain-info>
      <app-progress class="panel" v-show="panel == 'panel-progress'" key="panel-2">{{panel}}</app-progress>
      <app-timer class="panel" v-show="panel == 'panel-timer'" key="panel-3">{{panel}}</app-timer>
      <app-captain-abilities class="panel" v-show="panel == 'panel-captain-abilities'" key="panel-4">{{panel}}</app-captain-abilities>
      <!-- Chronicler Panels -->
      <app-chronicler-info @gate1Clear = "gate1Clear()" class="panel" v-show="panel == 'panel-chronicler-info'" key="panel-5">{{panel}}</app-chronicler-info>
      <app-documents class="panel" v-show="panel == 'panel-documents'" key="panel-6">{{panel}}</app-documents>
      <app-clues class="panel" v-show="panel == 'panel-clues'" key="panel-7">{{panel}}</app-clues>
      <app-snapchat class="panel" v-show="panel == 'panel-snapchat'" key="panel-8">{{panel}}</app-snapchat>
      <!-- Navigator Panels -->
      <app-navigator-info @gate1Clear = "gate1Clear()" class="panel" v-show="panel == 'panel-navigator-info'" key="panel-9">{{panel}}</app-navigator-info>
      <app-map class="panel" v-show="panel == 'panel-map'" key="panel-10">{{panel}}</app-map>
      <app-compass class="panel" v-show="panel == 'panel-compass'" key="panel-11">{{panel}}</app-compass>
      <app-navigate class="panel" v-show="panel == 'panel-navigate'" key="panel-12">{{panel}}</app-navigate>
      <!-- Comms Panels -->
      <app-comms-info @gate1Clear = "gate1Clear()" class="panel" v-show="panel == 'panel-comms-info'" key="panel-13">{{panel}}</app-comms-info>
      <app-clips class="panel" v-show="panel == 'panel-clips'" key="panel-14">{{panel}}</app-clips>
      <app-slack class="panel" v-show="panel == 'panel-slack'" key="panel-15">{{panel}}</app-slack>
      <app-tune class="panel" v-show="panel == 'panel-tune'" key="panel-16">{{panel}}</app-tune>
    <!-- </transition-group> -->
  </div>
</template>

<script>
// Captain Panels
import CaptainInfo from    './captain/info.vue';
import Progress from       './captain/progress.vue';
import Timer from          './captain/timer.vue';
import CaptAbilities from  './captain/abilities.vue';
// Chronicler Panels
import ChroniclerInfo from './chronicler/info.vue';
import Documents from       './chronicler/documents.vue';
import Snapchat from        './chronicler/snapchat.vue';
import Clues from           './chronicler/clues.vue';
// Navigator Panels
import NavigatorInfo from   './navigator/info.vue';
import NMap from             './navigator/map.vue';
import Compass from         './navigator/compass.vue';
import Navigate from        './navigator/navigate.vue';
// Comms Panels
import CommsInfo from   './comms/info.vue';
import Slack from           './comms/slack.vue';
import Tune from            './comms/tune.vue';
import Clips from        './comms/clips.vue';

export default {
  props: ['panel', 'user'],
  components: {
    // Captain Panels
    'app-captain-info': CaptainInfo,
    'app-progress': Progress,
    'app-timer': Timer,
    'app-captain-abilities': CaptAbilities,
    // Chronicler Panels
    'app-chronicler-info': ChroniclerInfo,
    'app-documents': Documents,
    'app-snapchat': Snapchat,
    'app-clues': Clues,
    // Navigator Panels
    'app-navigator-info': NavigatorInfo,
    'app-map': NMap,
    'app-compass': Compass,
    'app-navigate': Navigate,
    // Navigator Panels
    'app-comms-info': CommsInfo,
    'app-slack': Slack,
    'app-tune': Tune,
    'app-clips': Clips,
  },
  methods: {
    gate1Clear(event) {
      this.gate1Open = true;
      this.$emit('gate1Clear', 'true');
    }
  }
}
</script>

<style lang="scss">
.panel {
  position: absolute;
  top: 30rem;
  padding-left: 15rem;
}

.panel-enter {
  animation: slide-in 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.panel-leave {
  animation: slide-out 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
</style>
