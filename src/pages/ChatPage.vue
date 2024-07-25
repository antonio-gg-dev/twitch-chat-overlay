<template>
  <MessagesList :messages="messages" />
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import MessagesList from '@/components/MessagesList/MessagesList.vue'
import type { Message } from '@/modules/Chat/Message'
import { Chat, type ChatInterface } from '@/modules/Chat/ChatInterface'

export default defineComponent({
  components: { MessagesList },

  inject: {
    chat: { from: Chat }
  },

  props: {
    channel: {
      required: true,
      type: String as PropType<string>
    }
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
      chat.connect(this.channel)

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
