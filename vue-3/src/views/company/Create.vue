<template>
  <div class="container">
    <form @submit.prevent="store()">
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

import {reactive}   from "vue";
import useCompanies from "@/composables/companies";

export default {
  name: "CompaniesCreate",
  setup() {
    const {storeCompany} = useCompanies()

    const form  = reactive({
      name   : '',
      address: '',
    })
    const store = async () => {
      await storeCompany({...form})
    }

    return {
      store,
      form
    }
  }
}
</script>

<style scoped>

</style>