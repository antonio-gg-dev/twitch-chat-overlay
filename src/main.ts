import '@/styles/index.scss'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { ColorVariants, type ColorVariantsInterface } from '@/Services/Color/ColorVariantsInterface'
import { ColorVariantsJsIoColor } from '@/Services/Color/ColorVariantsJsIoColor'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.provide<ColorVariantsInterface>(ColorVariants, new ColorVariantsJsIoColor())
