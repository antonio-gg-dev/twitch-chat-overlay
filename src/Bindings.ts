import { ColorVariants, type ColorVariantsInterface } from '@/modules/Color/ColorVariantsInterface'
import { ColorJsIoColorVariants } from '@/modules/Color/ColorJsIoColorVariants'
import { UserColor, UserColorService } from '@/modules/Color/UserColorService'
import type { HashInterface } from '@/modules/Hash/HashInterface'
import { Md5Hash } from '@/modules/Hash/Md5Hash'
import type { App } from 'vue'
import { Chat, type ChatInterface } from '@/modules/Chat/ChatInterface'
import { TwurpleChat } from '@/modules/Chat/TwurpleChat'
import type { ToastInterface } from '@/modules/Toast/ToastInterface'
import { Toast } from '@/modules/Toast/ToastInterface'
import { NotyfToast } from '@/modules/Toast/NotyfToast'
import { Notyf } from 'notyf'

export function provide(app: App): void {
  const hash: HashInterface = new Md5Hash()

  app.provide<ColorVariantsInterface>(ColorVariants, new ColorJsIoColorVariants())
  app.provide<UserColorService>(UserColor, new UserColorService(hash))
  app.provide<ChatInterface>(Chat, new TwurpleChat(hash))
  app.provide<ToastInterface>(Toast, new NotyfToast(new Notyf()))
}
