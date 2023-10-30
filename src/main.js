import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

let app = createApp(App)

app.use(router)

router.isReady().then(() => {
    app.mount('#app')
})
