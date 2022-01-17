<template>
  <th scope="row">{{ index + 1 }}</th>
  <td>{{ list.title }}</td>
  <td>{{ list.description }}</td>
  <td>
    <router-link title="Edit" class="btn-sm btn btn-primary w-100"
                 :to="{name: 'posts.edit', params: {id: list.id}}">
      <i class="fa fa-edit"></i>
    </router-link>
    <button title="Delete" @click="destroy(list.id)" type="button" class="btn-sm btn btn-danger w-100">
      <i class="fa fa-trash"></i>
    </button>
  </td>
</template>

<script>
import {toRef} from "vue";

export default {
  name : "PostList",
  props: {
    list : {
      type    : Object,
      required: true
    },
    index: {
      type   : Number,
      default: 1
    }
  },
  setup(props, context) {
    console.log(context)
    const title = toRef(props, 'index')

    console.log(title.value)
  }
}
</script>

<style scoped>

</style>