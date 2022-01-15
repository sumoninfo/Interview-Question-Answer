<template>
  <div class="container">
    <form @submit.prevent="is_edit ? update() : store()">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="title">Title</label>
            <input v-model="form.title" type="text" class="form-control" id="title"
                   placeholder="Title">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="description">Description</label>
            <textarea v-model="form.description" class="form-control" id="description"
                      placeholder="Description"></textarea>
          </div>
        </div>
      </div>
      <br>
      <br>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import {onMounted, reactive, ref} from "vue";
import {useRoute, useRouter}      from 'vue-router'
import ApiService                 from "@/services/api.service";
import NotificationService        from "@/services/notification.service";
//import Pagination          from "@/components/Pagination";

export default {
  name      : "PostsCreateUpdate",
  components: {ApiService, NotificationService},
  setup() {
    const router = useRouter()
    //vue route
    const route  = useRoute()

    let is_edit = ref(false)
    //state posts
    const form  = reactive({
      title      : '',
      description: ''
    })
    onMounted(() => {
      if (route.params.id) {
        edit(route.params.id)
      }
    })
    const edit   = (id) => {
      ApiService.get(`/posts/${id}`).then(res => {
        form.title       = res.data.data.title
        form.description = res.data.data.description
      }).catch(error => {
        NotificationService.error(error.response.data.message);
      })
    }
    const store  = () => {
      ApiService.post(`/posts`, form).then(res => {
        NotificationService.success(res.data.message);
        router.push({
          name: 'posts.index'
        })
      }).catch(error => {
        NotificationService.error(error.response.data.message);
      })
    }
    const update = () => {
      ApiService.delete(`/posts/${route.params.id}`, form).then(res => {
        NotificationService.success(res.data.message);
        router.push({
          name: 'posts.index'
        })
      }).catch(error => {
        NotificationService.error(error.response.data.message);
      })
    }
    return {
      form,
      is_edit,
      store,
      update,
      router
    }
  }

}
</script>

<style scoped>

</style>