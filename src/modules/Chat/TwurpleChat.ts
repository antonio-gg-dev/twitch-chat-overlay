import type { ChatInterface } from '@/modules/Chat/ChatInterface'
import type { Message } from '@/modules/Chat/Message'
import { ChatClient, ChatMessage } from '@twurple/chat'
import type { HashInterface } from '@/modules/Hash/HashInterface'

export class TwurpleChat implements ChatInterface {
  private client: ChatClient | null = null

  constructor(private hash: HashInterface) {}

  connect(channel: string): void {
    console.log({ channel })

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
        id: this.hash.hash(data.date.toISOString() + user),
        user: user,
        color: color,
        message: message,
        date: data.date
      })
    })
  }

  disconnect(): void {
    if (this.client === null) {
      return
    }

    this.client.quit()
  }
}
