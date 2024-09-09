import type { ChatInterface } from '@/modules/Chat/ChatInterface'
import type { Message } from '@/modules/Chat/Message'
import { ChatClient, ChatMessage } from '@twurple/chat'

export class TwurpleChat implements ChatInterface {
  constructor(private client: ChatClient) {}

  connect(channel: string): void {
    this.client.connect()

    this.client.join(channel)
  }

  addMessage(callback: (message: Message) => void): void {
    if (this.client === null) {
      return
    }

    this.client.onMessage(async (_: string, user: string, message: string, data: ChatMessage) => {
      let color = null

      if (data.userInfo.color) {
        color = data.userInfo.color
      }

      callback({
        id: data.id,
        user: user,
        color: color,
        message: message,
        date: data.date
      })
    })
  }

  removeMessageById(callback: (id: string) => void): void {
    this.client?.onMessageRemove((_: string, id: string) => {
      callback(id)
    })
  }

  removeMessageByUser(callback: (user: string) => void): void {
    this.client?.onBan((_: string, user: string) => {
      callback(user)
    })

    this.client?.onTimeout((_: string, user: string) => {
      callback(user)
    })
  }

  disconnect(): void {
    this.client?.quit()
  }
}
