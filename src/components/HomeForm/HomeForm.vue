<template>
  <main class="home-form__container">
    <h1 class="home-form__header">Welcome to <strong>Twitch Chat Overlay</strong></h1>

    <label class="home-form__step">
      1. Enter your Twitch channel name:
      <input v-model="channel" class="home-form__input" type="text" />
    </label>

    <label
      :class="{
        'home-form__step': true,
        'home-form__step--disabled': !channel
      }"
    >
      2. Now add a <strong>Browser Source</strong> to your OBS with the next URL:
      <input
        ref="chatUrl"
        readonly
        class="home-form__input"
        data-chromatic="ignore"
        :value="chatUrl"
        @click="copyToClipboard"
      />
    </label>

    <footer class="home-form__footer">
      View Source Code on
      <a
        class="home-form__link"
        href="https://github.com/antonio-gg-dev/twitch-chat-overlay"
        target="_blank"
      >
        GitHub </a
      >.
    </footer>
  </main>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { Toast, type ToastInterface } from '@/modules/Toast/ToastInterface'

export default defineComponent({
  setup() {
    return {
      toast: inject<ToastInterface>(Toast)
    }
  },
  data() {
    return {
      channel: '' as string
    }
  },

  computed: {
    chatUrl(): string {
      const baseUrl = window.location.origin

      return `${baseUrl}/channel/${this.channel}`
    }
  },

  methods: {
    copyToClipboard(): void {
      const input = this.$refs.chatUrl as HTMLInputElement | undefined

      if (input) {
        input.select()
      }

      navigator.clipboard.writeText(this.chatUrl)

      this.toast?.info('URL copied to clipboard')
    }
  }
})
</script>

<style scoped lang="scss">
.home-form {
  &__container {
    @apply w-screen min-h-screen grid place-content-center;
  }

  &__header {
    @apply text-3xl mb-8;
  }

  &__step {
    @apply mb-8 transition-opacity;

    &--disabled {
      @apply opacity-30 pointer-events-none;
    }
  }

  &__input {
    @apply bg-neutral-300 px-4 py-2 block mt-2 w-full transition-colors;
    box-shadow: theme('spacing.2') theme('spacing.2') theme('colors.neutral.400');

    &:hover,
    &:focus {
      @apply bg-neutral-200;
    }
  }

  &__footer {
    @apply text-xs;
  }

  &__link {
    @apply text-cyan-600 transition-colors;

    &:hover,
    &:focus {
      @apply text-cyan-500;
    }
  }
}
</style>
