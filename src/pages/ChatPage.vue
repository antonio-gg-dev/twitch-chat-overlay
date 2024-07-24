<template>
  <MessagesList :messages="messages" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ChatClient, ChatMessage } from '@twurple/chat'
import MessagesList from '@/components/MessagesList/MessagesList.vue'
import md5 from 'md5'

export interface Message {
  id: string
  user: string
  color: string | null
  message: string
  date: Date
}

export default defineComponent({
  components: { MessagesList },
  data() {
    return {
      chat: null as null | ChatClient,
      messages: [] as Message[],
      cleanupIntervalId: null as null | ReturnType<typeof setInterval>
    }
  },

  mounted() {
    this.chat = new ChatClient({ channels: ['antonio_gg_dev'] })
    this.chat.connect()

    this.chat.onMessage(async (channel: string, user: string, text: string, msg: ChatMessage) => {
      let color = null

      if (msg.userInfo.color) {
        color = msg.userInfo.color
      }

      this.messages.push({
        id: md5(msg.date.toISOString() + user),
        user: user,
        color: color,
        message: text,
        date: msg.date
      })

      this.messages = this.messages.slice(-20)
    })

    this.cleanupIntervalId = setInterval(() => {
      const newestMessage = this.messages.slice(-1).at(0)

      if (newestMessage === undefined) {
        return
      }

      if (newestMessage.date < new Date(new Date().getTime() - 300_000)) {
        this.messages = []
      }
    }, 10_000)
  },

  unmounted() {
    this.chat?.quit()

    if (this.cleanupIntervalId) {
      clearInterval(this.cleanupIntervalId)
    }
  }
})
</script>
