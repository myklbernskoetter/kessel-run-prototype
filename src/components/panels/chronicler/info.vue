<template lang="html">
<div class="">
  <h2>Info Panel</h2>
  <transition-group
    name="gate1"
    v-if="gate1Open == false"
  >
    <p key="paragraph1">Please enter your access code <br />to retrieve your information.</p>
    <p key="paragraph2">You've lost it? Please analyze <br />your interface and reach out to your teammates to proceed.</p>
    <div key="lock1">
      <app-lock1
        :data_1="lock1data1"
        :data_2="lock1data2"
        :data_3="lock1data3"
        :data_4="lock1data4"
        :answer1="lock1num1"
        :answer2="lock1num2"
        :answer3="lock1num3"
        :answer4="lock1num4"
        @gate1Clear = "gate1Clear()"
      >
      </app-lock1>
    </div>
  </transition-group>

  <transition-group
    name="role-info"
    v-if="gate1Open == true"
  >
    <p key="paragraph1">The Gate is Open</p>
  </transition-group>
</div>
</template>

<script>
  import lock1 from '../../number-lock/all.vue';
  export default {
  data() {
    return {
      lock1data1: Math.floor(Math.random() * 10),
      lock1data2: Math.floor(Math.random() * 10),
      lock1data3: Math.floor(Math.random() * 10),
      lock1data4: Math.floor(Math.random() * 10),
      lock1num1: 8,
      lock1num2: 4,
      lock1num3: 1,
      lock1num4: 9,
      gate1Open: false,
    }
  },
  methods: {
    gate1Clear(event) {
      this.gate1Open = true;
      this.$emit('gate1Clear', 'true');
    }
  },
  components: {
   'app-lock1': lock1,
  },
}
</script>

<style lang="scss"></style>
