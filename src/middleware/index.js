import { Button } from 'vant'

const install = Vue => {
    const uiArr = [Button]
    uiArr.forEach(item => {
        Vue.use(item)
    })
}

export default {
    install
}