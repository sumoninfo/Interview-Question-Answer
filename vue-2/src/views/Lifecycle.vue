<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="isComponentLoaded =! isComponentLoaded">CLick</button>
    <TodoComponent v-if="isComponentLoaded"/>
    <div ref="count">
      {{ count }}
    </div>
    <button @click="count++">Click</button>

    Name: {{ name }}
  </div>
</template>
<script>
import TodoComponent from "@/views/Todo";

export default {
  name      : 'Lifecycle',
  components: {TodoComponent},
  data      : () => ({
    isComponentLoaded: true,
    count            : 0,
    name             : 'aaa',
  }),
  beforeCreate() {
    this.name = 'beforeCreate call'
    console.log("beforeCreate")
  },
  created() {
    this.name = 'created call'
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount", this.$el)
  },
  mounted() {
    console.log("mounted", this.$el)
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.$refs['count'].textContent)
  },
  updated() {
    console.log("updated", this.$refs['count'].textContent)
  },
}
</script>

