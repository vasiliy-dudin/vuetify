/** @type { import('@storybook/vue3').Meta } */
const meta = {
  title: 'Components/VDataTable',
  tags: ['autodocs'],
  argTypes: {
    density: { control: 'select', options: ['default', 'comfortable', 'compact'], description: 'Плотность' },
    fixedHeader: { control: 'boolean', description: 'Фиксированный заголовок' },
    height: { control: 'text', description: 'Высота таблицы (например, 300px)' },
    showHeaders: { control: 'boolean', description: 'Показывать заголовки' },
    showCaption: { control: 'boolean', description: 'Показывать заголовок таблицы' },
    itemsPerPage: { control: { type: 'range', min: 1, max: 10, step: 1 }, description: 'Элементов на страницу' },
  },
  args: {
    density: 'default',
    fixedHeader: false,
    height: '',
    showHeaders: true,
    showCaption: false,
    itemsPerPage: 5,
  },
  render: (args) => ({
    setup() {
      const headers = [
        { text: 'Имя', value: 'name' },
        { text: 'Возраст', value: 'age' },
        { text: 'Город', value: 'city' },
      ]
      const items = [
        { name: 'Иван', age: 25, city: 'Москва' },
        { name: 'Анна', age: 30, city: 'Санкт-Петербург' },
        { name: 'Петр', age: 28, city: 'Казань' },
      ]
      return { args, headers, items }
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-data-table
              :headers="args.showHeaders ? headers : []"
              :items="items"
              :density="args.density"
              :fixed-header="args.fixedHeader"
              :height="args.height || undefined"
              :items-per-page="args.itemsPerPage"
            >
              <template #caption v-if="args.showCaption">
                Пример data-table
              </template>
            </v-data-table>
          </v-container>
        </v-main>
      </v-app>
    `
  })
}

export default meta

export const Default = {} 