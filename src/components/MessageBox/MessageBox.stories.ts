import MessageBox from '@/components/MessageBox/MessageBox.vue'
import { EMOTE_URL_TEMPLATE } from '@/modules/Chat/EmotesParserService'
import type { Meta, StoryObj } from '@storybook/vue3'

export default {
  component: MessageBox,
  argTypes: {
    color: { control: 'color' }
  }
} satisfies Meta<typeof MessageBox>

export const Default: StoryObj<typeof MessageBox> = {
  args: {
    user: 'Katarn',
    color: '#dc143c',
    message: [{ type: 'text', content: 'Hola mundo' }]
  }
}

export const NoColor1: StoryObj<typeof MessageBox> = {
  args: {
    user: 'lagreycueva',
    color: null,
    message: [{ type: 'text', content: 'Ah, veo que estás usando tailwind' }]
  }
}

export const NoColor2: StoryObj<typeof MessageBox> = {
  args: {
    user: 'tinkerers_dev',
    color: null,
    message: [{ type: 'text', content: 'brb daily' }]
  }
}

export const LongUserName: StoryObj<typeof MessageBox> = {
  args: {
    user: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum luctus mauris, at venenatis eros aliquam ac. Nam pellentesque luctus erat vel ultrices.',
    color: '#17e5aa',
    message: [{ type: 'text', content: 'Hola mundo' }]
  }
}

export const LongMessage: StoryObj<typeof MessageBox> = {
  args: {
    user: 'luz_bot',
    color: '#531ac5',
    message: [{ type: 'text', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum luctus mauris, at venenatis eros aliquam ac. Nam pellentesque luctus erat vel ultrices. Integer blandit, dui vitae convallis ornare, nisi libero euismod odio, sit amet eleifend sapien velit at massa. Donec orci magna, molestie sed elementum vitae, tempus id tellus. Suspendisse finibus malesuada eros nec pretium. Integer malesuada congue feugiat. Vestibulum arcu erat, auctor quis ullamcorper vitae, tempus nec ex. Aliquam auctor faucibus lorem, ultrices suscipit justo finibus eget. Mauris gravida est in nunc sodales lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti.' }]
  }
}

export const Emotes: StoryObj<typeof MessageBox> = {
  args: {
    user: 'dk4n',
    color: '#8efaed',
    message: [{ type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '25') }, { type: 'text', content: 'Buenos dias ' }, { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '425618') }]
  }
}

export const LongMessageEmotes: StoryObj<typeof MessageBox> = {
  args: {
    user: 'dk4n',
    color: '#8efaed',
    message: [{ type: 'text', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum luctus mauris, at venenatis eros aliquam ac. Nam pellentesque luctus erat vel ultrices. Integer blandit, dui vitae convallis ornare, nisi libero euismod odio, sit amet eleifend sapien velit at massa. Donec orci magna, molestie sed elementum vitae, tempus id tellus. Suspendisse finibus malesuada eros nec pretium. Integer malesuada congue feugiat. Vestibulum arcu erat, auctor quis ullamcorper vitae, tempus nec ex. Aliquam auctor faucibus lorem, ultrices suscipit justo finibus eget. Mauris gravida est in nunc sodales lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti.' }, { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '25') }]
  }
}