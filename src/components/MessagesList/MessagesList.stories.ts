import MessagesList from '@/components/MessagesList/MessagesList.vue';
import type {Meta, StoryObj} from "@storybook/vue3";

export default {
  component: MessagesList,
  argTypes: {
  }
} satisfies Meta<typeof MessagesList>

export const Default: StoryObj<typeof MessagesList> = {
  args: {
    messages: [],
  }
}