import { ColorVariants, type ColorVariantsInterface } from '@/modules/Color/ColorVariantsInterface'
import { ColorJsIoColorVariants } from '@/modules/Color/ColorJsIoColorVariants'
import { UserColor, UserColorService } from '@/modules/Color/UserColorService'
import { Md5Hash } from '@/modules/Hash/Md5Hash'
import type { App } from 'vue'
import { Chat, type ChatInterface } from '@/modules/Chat/ChatInterface'
import { TwurpleChat } from '@/modules/Chat/TwurpleChat'
import type { ToastInterface } from '@/modules/Toast/ToastInterface'
import { Toast } from '@/modules/Toast/ToastInterface'
import { NotyfToast } from '@/modules/Toast/NotyfToast'
import { Notyf } from 'notyf'
import { ChatClient } from '@twurple/chat'
import { EmotesParserService } from '@/modules/Chat/EmotesParserService'

export function provide(app: App): void {
  app.provide<ColorVariantsInterface>(ColorVariants, new ColorJsIoColorVariants())
  app.provide<UserColorService>(UserColor, new UserColorService(new Md5Hash()))
  app.provide<ChatInterface>(Chat, new TwurpleChat(new ChatClient(), new EmotesParserService()))
  app.provide<ToastInterface>(Toast, new NotyfToast(new Notyf()))
}
