import MessageBox from "@/components/MessageBox/MessageBox.vue";
import type {Meta, StoryObj} from "@storybook/vue3";

export default {
  component: MessageBox,
  argTypes: {}
} satisfies Meta<typeof MessageBox>

export const Default: StoryObj<typeof MessageBox> = {
  args: {
    user: 'Katarn',
    color: '#dc143c',
    message: 'Hola mundo',
  }
}