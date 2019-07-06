import { Button, Tabbar, TabbarItem, Icon } from 'vant'

const install = Vue => {
    const uiArr = [Button, Tabbar, TabbarItem, Icon]
    uiArr.forEach(item => {
        Vue.use(item)
    })
}

export default {
    install
}