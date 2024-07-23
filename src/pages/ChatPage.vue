<template>
  <MessagesList
      :messages="messages"
  />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {ChatClient, ChatMessage} from "@twurple/chat";
import MessagesList from "@/components/MessagesList/MessagesList.vue";

export interface Message {
  user: string
  color: string | null
  message: string,
  timestamp: null,
}

export default defineComponent({
  components: {MessagesList},
  data() {
    return {
      chat: null as null | ChatClient,
      messages: [] as Message[],
    }
  },

  mounted() {
    this.chat = new ChatClient({ channels: ['antonio_gg_dev'] })
    this.chat.connect()

    this.chat.onMessage(async (channel: string, user: string, text: string, msg: ChatMessage) => {
      let color = null

      if(msg.userInfo.color) {
        color = msg.userInfo.color
      }

      msg.date

      this.messages.push({
        user: user,
        color: color,
        message: text,
        timestamp: null,
      })
    })
  },

  unmounted() {
    this.chat?.quit()
  }
})
</script>