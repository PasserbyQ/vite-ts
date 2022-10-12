import { getCurrentInstance } from 'vue'

//  设置全局
export function setGlobalProperties(app, global = {}) {
    if (global && Object.keys(global).length) {
        for (const key in global) {
            if (Object.prototype.hasOwnProperty.call(global, key)) {
                const gKey = `$${key}`
                app.config.globalProperties[gKey] = global[key]
            }
        }
    }
}

// 　获取全局
export function getGlobalProperties() {
    const { emit, appContext: { app: { config: { globalProperties } } } } = getCurrentInstance() as any
    return { ...globalProperties }
}