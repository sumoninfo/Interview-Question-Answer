<template>
  <div class="container">
    <form @submit.prevent="update()">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="form.name" type="text" class="form-control" id="name"
                   placeholder="Name">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="address">Address</label>
            <textarea v-model="form.address" class="form-control" id="address"
                      placeholder="Address"></textarea>
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

import {onMounted, reactive} from "vue";
import {useRoute}            from "vue-router";
import useCompanies          from "@/composables/companies";

export default {
  name: "CompaniesUpdate",
  setup() {
    const {getCompany, updateCompany} = useCompanies()

    const route = useRoute()

    const form = reactive({
      name   : '',
      address: '',
    })

    onMounted(getCompany(route.params.id))

    const update = async () => {
      await updateCompany(route.params.id)
    }

    return {
      update,
      form
    }
  }
}
</script>

<style scoped>

</style>