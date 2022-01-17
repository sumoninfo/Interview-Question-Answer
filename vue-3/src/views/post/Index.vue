<template>
  <div class="container">
    <router-link title="Create" class="btn-sm btn btn-primary w-100"
                 :to="{name: 'posts.create'}">
      <i class="fa fa-plus"></i>
    </router-link>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(list, index) in posts">
        <PostList :list="list" :index="index"/>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {onMounted, reactive, ref} from "vue";
import ApiService                 from "@/services/api.service";
import NotificationService        from "@/services/notification.service";
import PostList                   from "@/views/post/PostList";
//import Pagination          from "@/components/Pagination";

export default {
  name      : "PostsIndex",
  components: {PostList, ApiService, NotificationService},
  setup() {
    let posts      = ref([])
    let table      = reactive({
      per_page  : 10,
      search    : '',
      pagination: {
        current_page: 1
      }
    })
    const destroy  = (id) => {
      Swal.fire({
        title             : 'Are you sure?',
        text              : "You won't be able to revert this!",
        icon              : 'warning',
        showCancelButton  : true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor : '#d33',
        confirmButtonText : 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.delete(`/posts/${id}`,).then(res => {
            getPosts();
            NotificationService.success(res.data.message);
          }).catch(error => {
            NotificationService.error(error.response.data.message);
          })
        }
      }).catch(error => {
        NotificationService.error(error.response.data.message);
      })
    }
    const getPosts = () => {
      ApiService.get('/posts', {params: table}).then(({data}) => {
        posts.value      = data.data;
        table.pagination = data.meta;
      }).catch(error => {
        NotificationService.error(error.response.data.message);
      })
    }
    onMounted(getPosts)
    return {
      posts,
      destroy
    }
  }

}
</script>

<style scoped>

</style>