<template>
  <div class="container">
    <router-link title="Create" class="btn-sm btn btn-primary w-100"
                 :to="{name: 'companies.create'}">
      <i class="fa fa-plus"></i>
    </router-link>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(list, index) in companies">
        <th scope="row">{{ ++index }}</th>
        <td>{{ list.name }}</td>
        <td>{{ list.address }}</td>
        <td>
          <router-link title="Edit" class="btn-sm btn btn-primary w-100"
                       :to="{name: 'companies.edit', params: {id: list.id}}">
            <i class="fa fa-edit"></i>
          </router-link>
          <button title="Delete" @click="destroy(list.id)" type="button" class="btn-sm btn btn-danger w-100">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {onMounted} from "vue";

import useCompanies from "@/composables/companies";

export default {
  name: "CompaniesIndex",
  setup() {
    const {companies, getCompanies, deleteCompany} = useCompanies()

    onMounted(getCompanies)

    const destroy = async (id) => {
      await deleteCompany(id)
      await getCompanies()
    }

    return {
      companies,
      destroy
    }
  }
}
</script>

<style scoped>

</style>