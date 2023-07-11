import App from './App.vue'
import router from './router/index.js'
import { createApp } from 'vue'

// Create vue app
const app = createApp(App)
app.use(router)

// Mount vue app
app.mount('#app')
