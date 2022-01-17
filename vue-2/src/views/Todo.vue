<template>
  <h3>Todo Component</h3>
</template>

<script>
export default {
  name: "TodoComponent",
  beforeDestroy() {
    console.log("beforeDestroy")
  },
  destroyed() {
    console.log("destroyed")
  }
}
</script>

<style scoped>

</style>