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
import {defineComponent, type PropType} from 'vue'
import md5 from 'md5'
import Color from "colorjs.io";
import type {Message} from "@/pages/ChatPage.vue";
import MessageBox from "@/components/MessageBox/MessageBox.vue";
import {ChatClient, ChatMessage} from "@twurple/chat";

export default defineComponent({
  components: {MessageBox},
  props: {
    messages: {
      required: true,
      type: Array as PropType<Message[]>,
    },
  },

  data() {
    return {
      bgRotate: 0 as number,
      rotationIntervalId: null as null | ReturnType<typeof setInterval>
    }
  },

  mounted() {
    this.rotationIntervalId = setInterval(() => {
      this.bgRotate = (this.bgRotate += 1) % 360
    }, 60_000/360)
  },

  unmounted() {
    if(this.rotationIntervalId) {
      clearInterval(this.rotationIntervalId)
    }
  }
})
</script>

<style scoped lang="scss">

</style>