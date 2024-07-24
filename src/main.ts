import '@/styles/index.scss'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { ColorVariants, type ColorVariantsInterface } from '@/Services/Color/ColorVariantsInterface'
import { ColorJsIoColorVariants } from '@/Services/Color/ColorJsIoColorVariants'
import { UserColorService } from '@/Services/Color/UserColorService'
import { UserColor } from '@/Services/Color/UserColorService'
import { Md5Hash } from '@/Services/Hash/Md5Hash'
import type { HashInterface } from '@/Services/Hash/HashInterface'
import { provide } from '@/Bindings'

const app = createApp(App)

app.use(router)

app.mount('#app')

provide(app)
