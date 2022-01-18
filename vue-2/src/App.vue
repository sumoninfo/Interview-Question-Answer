<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/lifecycle">Lifecycle</router-link>
    |
    <router-link to="/events">Events</router-link>
    |
    <router-view/>

    <ul>
      <li v-for="user in users" v-if="user.isActive" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: [
      {
        id      : 1,
        isActive: true,
        name    : 'test'
      }, {
        id      : 2,
        isActive: false,
        name    : 'test22'
      }
    ]
  })
}
</script>