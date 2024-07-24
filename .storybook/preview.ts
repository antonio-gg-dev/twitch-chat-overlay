import { type Preview, setup } from '@storybook/vue3'
import '@/styles/index.scss'
import { provide } from '../src/Bindings'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

setup((app) => {
  provide(app)
})

export default preview
