import { ColorVariants, type ColorVariantsInterface } from '@/Services/Color/ColorVariantsInterface'
import { ColorJsIoColorVariants } from '@/Services/Color/ColorJsIoColorVariants'
import { UserColor, UserColorService } from '@/Services/Color/UserColorService'
import type { HashInterface } from '@/Services/Hash/HashInterface'
import { Md5Hash } from '@/Services/Hash/Md5Hash'
import type { App } from 'vue'

export function provide(app: App): void {
  const hash: HashInterface = new Md5Hash()

  app.provide<ColorVariantsInterface>(ColorVariants, new ColorJsIoColorVariants())
  app.provide<UserColorService>(UserColor, new UserColorService(hash))
}
