/** @type { import('@storybook/vue3').Meta } */
import { ref } from 'vue'

const meta = {
  title: 'Components/VExpansionPanels',
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean', description: 'Множественное раскрытие' },
    variant: { control: 'select', options: ['default', 'accordion', 'inset', 'popout'], description: 'Вариант отображения' },
    elevation: { control: { type: 'range', min: 0, max: 24, step: 1 }, description: 'Тень' },
    disabled: { control: 'boolean', description: 'Отключить панели' },
    expandIcon: { control: 'text', description: 'Иконка раскрытия' },
    collapseIcon: { control: 'text', description: 'Иконка сворачивания' },
    panelCount: { control: { type: 'range', min: 1, max: 5, step: 1 }, description: 'Количество панелей' },
  },
  args: {
    multiple: false,
    variant: 'default',
    elevation: 1,
    disabled: false,
    expandIcon: 'mdi-chevron-down',
    collapseIcon: 'mdi-chevron-up',
    panelCount: 3,
  },
  render: (args) => ({
    setup() {
      const panels = Array.from({ length: args.panelCount }, (_, i) => ({
        title: `Панель ${i + 1}`,
        text: `Содержимое панели ${i + 1}`
      }))
      const model = ref([])
      return { args, panels, model }
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-expansion-panels
              v-model="model"
              v-bind="args"
              :variant="args.variant === 'default' ? undefined : args.variant"
              :elevation="args.elevation"
              :multiple="args.multiple"
              :disabled="args.disabled"
              :expand-icon="args.expandIcon"
              :collapse-icon="args.collapseIcon"
            >
              <v-expansion-panel v-for="(item, i) in panels" :key="i">
                <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
                <v-expansion-panel-text>{{ item.text }}</v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-container>
        </v-main>
      </v-app>
    `
  })
}

export default meta

export const Default = {} 