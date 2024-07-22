<template>
  <main>
    <MessageBox
        v-for="message in messages"
        :user="message.userName"
        :color="message.userColor"
        :message="message.message"
    />
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {ChatClient, ChatMessage} from "@twurple/chat";
import MessageBox from "@/components/MessageBox/MessageBox.vue";

interface Message {
  userName: string
  userColor: string
  message: string
}

export default defineComponent({
  components: {MessageBox},
  data() {
    return {
      chat: null as null | ChatClient,
      messages: [] as Message[]
    }
  },

  mounted() {
    this.chat = new ChatClient({ channels: ['antonio_gg_dev'] })
    this.chat.connect()

    this.chat.onMessage(async (channel: string, user: string, text: string, msg: ChatMessage) => {
      this.messages.push({
        userName: user,
        userColor: msg.userInfo.color ?? '#000000',
        message: text,
      })
    })
  },

  unmounted() {
    this.chat?.quit()
  }
})
</script>