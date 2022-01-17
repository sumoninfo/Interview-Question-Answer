<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |<router-link to="/lifecycle">Lifecycle</router-link>
    |
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>