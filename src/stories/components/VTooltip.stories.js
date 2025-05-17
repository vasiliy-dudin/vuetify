/** @type { import('@storybook/vue3').Meta } */
const meta = {
  title: 'Components/VTooltip',
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', description: 'Текст подсказки' },
    location: { control: 'select', options: ['top', 'bottom', 'left', 'right'], description: 'Положение' },
    openOnHover: { control: 'boolean', description: 'Открывать при наведении' },
    openOnClick: { control: 'boolean', description: 'Открывать при клике' },
    disabled: { control: 'boolean', description: 'Отключить' },
    activatorText: { control: 'text', description: 'Текст кнопки-активатора' },
  },
  args: {
    text: 'Подсказка',
    location: 'top',
    openOnHover: true,
    openOnClick: false,
    disabled: false,
    activatorText: 'Наведи на меня',
  },
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-tooltip
              v-bind="args"
              :text="args.text"
              :location="args.location"
              :open-on-hover="args.openOnHover"
              :open-on-click="args.openOnClick"
              :disabled="args.disabled"
            >
              <template #activator="{ props }">
                <v-btn v-bind="props">{{ args.activatorText }}</v-btn>
              </template>
            </v-tooltip>
          </v-container>
        </v-main>
      </v-app>
    `
  })
}

export default meta

export const Default = {} 