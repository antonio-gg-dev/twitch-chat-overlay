<template>
  <MessagesList :messages="messages" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MessagesList from '@/components/MessagesList/MessagesList.vue'
import type { Message } from '@/modules/Chat/Message'
import { Chat, type ChatInterface } from '@/modules/Chat/ChatInterface'

export default defineComponent({
  components: { MessagesList },

  inject: {
    chat: { from: Chat }
  },

  data() {
    return {
      messages: [] as Message[],
      cleanupIntervalId: null as null | ReturnType<typeof setInterval>
    }
  },

  mounted() {
    const chat = this.chat as ChatInterface | undefined

    if (chat) {
      chat.connect('antonio_gg_dev')

      chat.onMessage((message) => {
        this.messages.push(message)

        this.messages = this.messages.slice(-20)
      })
    }

    this.startCleaningOldMessages()
  },

  unmounted() {
    const chat = this.chat as ChatInterface | undefined

    if (chat) {
      chat.disconnect()
    }

    this.stopCleaningOldMessages()
  },

  methods: {
    startCleaningOldMessages() {
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

    stopCleaningOldMessages() {
      if (this.cleanupIntervalId) {
        clearInterval(this.cleanupIntervalId)
      }
    }
  }
})
</script>
