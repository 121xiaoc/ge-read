import axios from 'axios'
import { Dialog } from 'vant'

axios.interceptors.request.use()

axios.interceptors.response.use(response => {
    const { data, status } = response
    if (status != 200) {
        Dialog.alert({ message: '网络开了点小差' })
    }
    return data
})