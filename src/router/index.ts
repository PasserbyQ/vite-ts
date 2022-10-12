
import routes from './routes'

import { createRouter, createWebHashHistory } from "vue-router"

// 暂时保持简单
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router