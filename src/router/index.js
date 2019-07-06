import Vue from 'vue'
import Router from 'vue-router'

const ChapterContent = () => import('../pages/ChapterContent/ChapterContent')
const Index = () => import('../pages/Index/Index')

Vue.use(Router)

const router = new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/Index',
        },
        {
            path: '/Index',
            component: Index
        },
        {
            path: '/chapter-content',
            component: ChapterContent
        }
    ]
})

export default router