<template>
  <TransitionGroup
    tag="main"
    name="list"
    class="messages-list__container"
    :style="{
      '--bg-rotate': bgRotate + 'deg'
    }"
  >
    <div key="separator" class="messages-list__space"></div>

    <MessageBox
      v-for="message in messages"
      :key="message.id"
      :user="message.user"
      :color="message.color"
      :message="message.message"
    />
  </TransitionGroup>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Message } from '@/pages/ChatPage.vue'
import MessageBox from '@/components/MessageBox/MessageBox.vue'

export default defineComponent({
  components: { MessageBox },
  props: {
    messages: {
      required: true,
      type: Array as PropType<Message[]>
    }
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
    }, 60_000 / 360)
  },

  unmounted() {
    if (this.rotationIntervalId) {
      clearInterval(this.rotationIntervalId)
    }
  }
})
</script>

<style scoped lang="scss">
.messages-list {
  &__container {
    @apply min-h-screen w-screen bottom-0 left-0 right-0 fixed;
  }

  &__space {
    @apply h-screen;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  @apply ease-in-out transition-all duration-300;
}

.list-enter-from,
.list-leave-to {
  @apply opacity-0 translate-y-4;
}

.list-leave-active {
  @apply absolute;
}
</style>
