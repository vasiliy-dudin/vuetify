import { setup } from '@storybook/vue3-vite'
import { ref } from 'vue'

import { decorators } from './preview-setup'
import './preview-setup'

setup((app) => {
  // Глобальные настройки Vue приложения для Storybook
  
  // Определяем глобальный ref для использования в историях
  app.config.globalProperties.$ref = ref
})

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  decorators,
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview