import Vue from 'vue'
import Router from 'vue-router'

import ChapterContent from '../pages/ChapterContent/ChapterContent'

Vue.use(Router)

const router = new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/chapter-content',
        },
        {
            path: '/chapter-content',
            component: ChapterContent
        }
    ]
})

export default router