import type { ChatInterface } from '@/modules/Chat/ChatInterface'
import type { Message } from '@/modules/Chat/Message'
import { ChatClient, ChatMessage, type ClearMsg } from '@twurple/chat'
import type { HashInterface } from '@/modules/Hash/HashInterface'

export class TwurpleChat implements ChatInterface {
  private client: ChatClient | null = null

  constructor(private hash: HashInterface) {}

  connect(channel: string): void {
    this.client = new ChatClient({ channels: [channel] })

    this.client.connect()
  }

  onMessage(callback: (message: Message) => void): void {
    if (this.client === null) {
      return
    }

    this.client.onMessage(async (_: string, user: string, message: string, data: ChatMessage) => {
      let color = null

      if (data.userInfo.color) {
        color = data.userInfo.color
      }

      callback({
        id: this.createMessageId(data.id, user),
        user: user,
        color: color,
        message: message,
        date: data.date
      })
    })
  }

  private createMessageId(twurpleMessageId: string, user: string) {
    return this.hash.hash(twurpleMessageId + user)
  }

  onRemoveMessage(callback: (messageId: string) => void): void {
    if (this.client === null) {
      return
    }

    this.client.onMessageRemove((_: string, id: string, data: ClearMsg) => {
      callback(this.createMessageId(data.targetMessageId, data.userName))
    })
  }

  disconnect(): void {
    if (this.client === null) {
      return
    }

    this.client.quit()
  }
}
