<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="isComponentLoaded =! isComponentLoaded">CLick</button>
    <TodoComponent v-if="isComponentLoaded"/>
    <div ref="count">
      {{ count }}
    </div>
    <button @click="count++">Click</button>
  </div>
</template>
<script>
import TodoComponent from "@/views/Todo";

export default {
  name      : 'Lifecycle',
  components: {TodoComponent},
  data      : () => ({
    isComponentLoaded: true,
    count            : 0
  }),
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.$refs['count'].textContent)
  },
  updated() {
    console.log("updated", this.$refs['count'].textContent)
  },
}
</script>

