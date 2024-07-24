<template>
  <div class="message-box__container" :style="styles">
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
import { type CSSProperties, defineComponent, type PropType } from 'vue'
import { ColorVariants, type ColorVariantsInterface } from '@/Services/Color/ColorVariantsInterface'
import { UserColor, UserColorService } from '@/Services/Color/UserColorService'

export default defineComponent({
  inject: {
    colorVariants: { from: ColorVariants },
    userColor: { from: UserColor }
  },

  props: {
    user: {
      required: true,
      type: String as PropType<string>
    },
    color: {
      required: false,
      default: null,
      type: String as PropType<null | string>
    },
    message: {
      required: true,
      type: String as PropType<string>
    }
  },

  computed: {
    styles(): CSSProperties {
      const userColor = this.userColor as UserColorService | undefined
      const colorVariants = this.colorVariants as ColorVariantsInterface | undefined

      if (!userColor || !colorVariants) {
        return {}
      }

      const color = userColor?.userColor(this.user, this.color)

      return {
        '--color-primary': colorVariants?.colorPrimary(color),
        '--color-secondary': colorVariants?.colorSecondary(color),
        '--color-tertiary': colorVariants?.colorTertiary(color),
        '--color-primary-light': colorVariants?.colorPrimaryLight(color),
        '--color-secondary-light': colorVariants?.colorSecondaryLight(color),
        '--color-tertiary-light': colorVariants?.colorTertiaryLight(color)
      }
    }
  }
})
</script>

<style scoped lang="scss">
.message-box {
  &__container {
    @apply mb-4 relative pt-7 w-full h-auto;
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
