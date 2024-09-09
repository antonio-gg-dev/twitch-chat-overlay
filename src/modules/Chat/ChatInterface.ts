import type { Message } from '@/modules/Chat/Message'

export interface ChatInterface {
  connect(channel: string): void
  addMessage(callback: (message: Message) => void): void
  removeMessageById(callback: (id: string) => void): void
  removeMessageByUser(callback: (user: string) => void): void
  disconnect(): void
}

export const Chat = Symbol()
