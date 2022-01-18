<template>
  <div>

    <!-- the click event's propagation will be stopped -->
    <a v-on:click.stop="doThis">click.stop</a>

    <!-- the submit event will no longer reload the page -->
    <form @submit.prevent="onSubmit()">
      <button type="submit">submit</button>
    </form>

    <!-- modifiers can be chained -->
    <a v-on:click.stop.prevent="doThat">click . stop.prevent</a>

    <!-- just the modifier -->
    <form v-on:submit.prevent>submit . prevent</form>

    <!-- use capture mode when adding the event listener -->
    <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
    <div v-on:click.capture="doThis">click . capture</div>

    <!-- only trigger handler if event.target is the element itself -->
    <!-- i.e. not from a child element -->
    <div v-on:click.self="doThat">click . self</div>


    <!--.exact Modifier-->
    <!-- this will fire even if Alt or Shift is also pressed -->
    <button v-on:click.ctrl="onClick">onClick</button>

    <!-- this will only fire when Ctrl and no other keys are pressed -->
    <button v-on:click.ctrl.exact="onCtrlClick">onCtrlClick</button>

    <!-- this will only fire when no system modifiers are pressed -->
    <button v-on:click.exact="onClick">onClick</button>


    <input @keyup="keyUp()" v-model="keywords" v-on:keyup.enter="keyupEnter"
           v-on:keydown="keydown">
  </div>
</template>

<script>
export default {
  name   : "Events",
  data   : () => ({
    keywords: '',
  }),
  methods: {
    keyUp() {
      console.log('keyUp')
    },
    keydown() {
      console.log('keydown')
    },
    keyupEnter() {
      console.log('keyupEnter')
    },
    doThis() {
      console.log('doThis')
    },
    onSubmit() {
      console.log('onSubmit')
    },
    doThat() {
      console.log('doThat')
    },
    onClick() {
      console.log('onClick')
    },
    onCtrlClick() {
      console.log('onCtrlClick')
    },
  }
}
</script>

<style scoped>

</style>