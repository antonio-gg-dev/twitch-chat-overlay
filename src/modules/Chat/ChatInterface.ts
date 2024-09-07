import type { Message } from '@/modules/Chat/Message'

export interface ChatInterface {
  connect(channel: string): void
  onMessage(callback: (message: Message) => void): void
  onRemoveMessage(callback: (messageId: string) => void): void
  onBan(callback: (user: string) => void): void
  disconnect(): void
}

export const Chat = Symbol()
