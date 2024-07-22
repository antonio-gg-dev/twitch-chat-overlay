<template>
  <div
    class="message-box__container"
    :style="{
      '--color-primary': colorPrimary,
      '--color-secondary': colorSecondary,
      '--color-tertiary': colorTertiary,
    }"
  >
    <strong class="message-box__user">
      {{ user }}
    </strong>

    <p class="message-box__message">
      {{ message }}
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import md5 from 'md5'
import Color from "colorjs.io";

export default defineComponent({
  props: {
    user: {
      required: true,
      type: String as PropType<string>,
    },
    color: {
      required: false,
      default: null,
      type: String as PropType<null | string>,
    },
    message: {
      required: true,
      type: String as PropType<string>,
    },
  },
  computed: {
    userColor(): string {
      if (this.color !== null) {
        return this.color
      }

      return '#' + md5(this.user).substring(0, 6)
    },
    colorPrimary(): string {
      return this.userColor
    },
    colorSecondary(): string {
      let color = new Color(this.userColor)

      color.lch.h += 20

      return color.toString({format: "hex"})
    },
    colorTertiary(): string {
      let color = new Color(this.userColor)

      color.lch.h -= 20

      return color.toString({format: "hex"})
    },
  }
})
</script>

<style scoped lang="scss">
.message-box {
  &__container {
    @apply overflow-hidden relative;

    &:before {
      @apply absolute bottom-1/2 right-1/2 h-[200vmax] w-[200vmax] blur-3xl z-[-1];
      translate: 50% 50%;
      rotate: var(--bg-rotate);
      background-image: conic-gradient(
              var(--color-primary),
              var(--color-secondary),
              var(--color-tertiary),
              var(--color-primary)
      );
      content: '';
    }
  }

  &__user {
    @apply inline-block px-2 py-0.5 bg-scroll;
  }

  &__message {
    @apply block px-2 py-0.5 bg-scroll;
  }
}
</style>