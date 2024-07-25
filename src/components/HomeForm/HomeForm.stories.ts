import HomeForm from '@/components/HomeForm/HomeForm.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

export default {
  component: HomeForm,
  argTypes: {}
} satisfies Meta<typeof HomeForm>

export const Default: StoryObj<typeof HomeForm> = {}
