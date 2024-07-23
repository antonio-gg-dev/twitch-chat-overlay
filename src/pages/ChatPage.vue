<template>
  <main
    :style="{
      '--bg-rotate': bgRotate + 'deg'
    }"
  >
    <MessageBox
        v-for="message in messages"
        :user="message.user"
        :color="message.color"
        :message="message.message"
    />
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {ChatClient, ChatMessage} from "@twurple/chat";
import MessageBox from "@/components/MessageBox/MessageBox.vue";

interface Message {
  user: string
  color: string | null
  message: string
}

export default defineComponent({
  components: {MessageBox},
  data() {
    return {
      chat: null as null | ChatClient,
      messages: [] as Message[],
      bgRotate: 0 as number,
      rotationIntervalId: null as null | ReturnType<typeof setInterval>
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

      this.messages.push({
        user: user,
        color: color,
        message: text,
      })
    })

    this.rotationIntervalId = setInterval(() => {
      this.bgRotate = (this.bgRotate += 1) % 360
    }, 6_000/360)
  },

  unmounted() {
    this.chat?.quit()

    if(this.rotationIntervalId) {
      clearInterval(this.rotationIntervalId)
    }
  }
})
</script>