import '@/styles/index.scss'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { provide } from '@/Bindings'

const app = createApp(App)

app.use(router)

provide(app)

app.mount('#app')
