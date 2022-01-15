import {ref}               from "vue";
import ApiService          from "@/services/api.service";
import NotificationService from "@/services/notification.service";
import {useRoute}          from "vue-router";

export default function useCompanies() {
    let companies = ref([])
    let company   = ref([])
    const router  = useRoute()

    const getCompanies = async () => {
        await ApiService.get(`/companies`).then(res => {
            companies.value = res.data.data
        }).catch(error => {
            NotificationService.error(error.response.data.message);
        })
    }

    const storeCompany = async () => {
        await ApiService.post(`/companies`, company).then(res => {
            router.push({name: 'companies.index'})
        }).catch(error => {
            NotificationService.error(error.response.data.message);
        })
    }

    const getCompany    = async (id) => {
        await ApiService.get(`/companies/${id}`).then(res => {
            company.value = res.data.data;
        }).catch(error => {
            NotificationService.error(error.response.data.message);
        })
    }
    const updateCompany = async (id) => {
        await ApiService.update(`/companies/${id}`, company.value).then(res => {
            company.value = res.data.data;
        }).catch(error => {
            NotificationService.error(error.response.data.message);
        })
    }
    const deleteCompany = async (id) => {
        await Swal.fire({
            title             : 'Are you sure?',
            text              : "You won't be able to revert this!",
            icon              : 'warning',
            showCancelButton  : true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor : '#d33',
            confirmButtonText : 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                ApiService.delete(`/companies/${id}`,).then(res => {
                    NotificationService.success(res.data.message);
                }).catch(error => {
                    NotificationService.error(error.response.data.message);
                })
            }
        }).catch(error => {
            NotificationService.error(error.response.data.message);
        })
    }

    return {
        companies, getCompanies, storeCompany, getCompany, updateCompany, deleteCompany
    }
}