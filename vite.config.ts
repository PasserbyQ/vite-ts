import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: process.env.NODE_ENV === 'production' ? './' : '/',
    resolve: {
      alias: {
        '@': '/src/', //格式一定要写对喽不然没有代码提示或者报错
      }
    },
    plugins: [vue()],
    // css变量使用
    css: {
      preprocessorOptions: {
        // 给 sass-loader 传递选项
        scss: {
          // additionalData 的值就是要注入的字符串
          additionalData: '@import "@/styles/var.scss";'
        }
      }
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      },
    },
  }
})
