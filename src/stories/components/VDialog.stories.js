/** @type { import('@storybook/vue3').Meta } */
import { ref } from 'vue'

const meta = {
  title: 'Components/VDialog',
  tags: ['autodocs'],
  argTypes: {
    persistent: { control: 'boolean', description: 'Запретить закрытие по клику вне' },
    fullscreen: { control: 'boolean', description: 'Во весь экран' },
    scrollable: { control: 'boolean', description: 'Прокручиваемое содержимое' },
    maxWidth: { control: 'text', description: 'Максимальная ширина' },
    activatorText: { control: 'text', description: 'Текст кнопки-активатора' },
    title: { control: 'text', description: 'Заголовок диалога' },
    text: { control: 'text', description: 'Текст диалога' },
  },
  args: {
    persistent: false,
    fullscreen: false,
    scrollable: false,
    maxWidth: '400',
    activatorText: 'Открыть диалог',
    title: 'Пример диалога',
    text: 'Это содержимое диалога.'
  },
  render: (args) => ({
    setup() {
      const dialog = ref(false)
      return { args, dialog }
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-btn @click="dialog = true">{{ args.activatorText }}</v-btn>
            <v-dialog
              v-model="dialog"
              :persistent="args.persistent"
              :fullscreen="args.fullscreen"
              :scrollable="args.scrollable"
              :max-width="args.maxWidth"
            >
              <v-card>
                <v-card-title>{{ args.title }}</v-card-title>
                <v-card-text>{{ args.text }}</v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="dialog = false">Закрыть</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-container>
        </v-main>
      </v-app>
    `
  })
}

export default meta

export const Default = {} 