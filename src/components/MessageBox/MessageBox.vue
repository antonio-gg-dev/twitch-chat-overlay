<template>
  <div
    class="message-box__container"
    :style="{
      '--color-primary': colorPrimary,
      '--color-secondary': colorSecondary,
      '--color-tertiary': colorTertiary,
      '--color-primary-light': colorPrimaryLight,
      '--color-secondary-light': colorSecondaryLight,
      '--color-tertiary-light': colorTertiaryLight,
    }"
  >
    <strong class="message-box__user">
      {{ user }}
    </strong>

    <span class="message-box__test"></span>

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
      let color = new Color(this.userColor)

      color.hsl.h += 0
      color.hsl.l = 50
      color.hsl.s = 70

      return color.toString({format: "hex"})
    },
    colorSecondary(): string {
      let color = new Color(this.userColor)

      color.hsl.h += 20
      color.hsl.l = 50
      color.hsl.s = 70

      return color.toString({format: "hex"})
    },
    colorTertiary(): string {
      let color = new Color(this.userColor)

      color.hsl.h -= 20
      color.hsl.l = 50
      color.hsl.s = 70

      return color.toString({format: "hex"})
    },

    colorPrimaryLight(): string {
      let color = new Color(this.colorPrimary)

      color.hsl.l = 80

      return color.toString({format: "hex"})
    },
    colorSecondaryLight(): string {
      let color = new Color(this.colorSecondary)

      color.hsl.l = 80

      return color.toString({format: "hex"})
    },
    colorTertiaryLight(): string {
      let color = new Color(this.colorTertiary)

      color.hsl.l = 80

      return color.toString({format: "hex"})
    },
  }
})
</script>

<style scoped lang="scss">
.message-box {
  &__container {
    @apply mb-4 relative pt-7;
  }

  &__user {
    @apply inline-block px-2 py-0.5 overflow-hidden absolute top-0 bottom-2 left-0 whitespace-nowrap max-w-full;

    &:before {
      @apply absolute origin-center bottom-1/2 right-1/2 h-[200vmax] w-[200vmax] blur-xl z-[-1];
      transform: translate(50%, 50%) rotate(var(--bg-rotate, 0deg));
      background-image: conic-gradient(
              var(--color-primary),
              var(--color-secondary),
              var(--color-tertiary),
              var(--color-primary)
      );
      content: '';
    }
  }

  &__message {
    @apply block px-2 py-0.5 relative overflow-hidden ml-2;

    &:before {
      @apply absolute origin-center bottom-1/2 right-1/2 h-[200vmax] w-[200vmax] blur-xl z-[-1];
      transform: translate(50%, 50%) rotate(var(--bg-rotate, 0deg));
      background-image: conic-gradient(
              var(--color-primary-light),
              var(--color-secondary-light),
              var(--color-tertiary-light),
              var(--color-primary-light)
      );
      content: '';
    }
  }
}
</style>