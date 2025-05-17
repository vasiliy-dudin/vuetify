/** @type { import('@storybook/vue3').Meta } */
const meta = {
  title: 'Components/VTable',
  tags: ['autodocs'],
  argTypes: {
    dense: { control: 'boolean', description: 'Компактный режим' },
    fixedHeader: { control: 'boolean', description: 'Фиксированный заголовок' },
    height: { control: 'text', description: 'Высота таблицы (например, 300px)' },
    showCaption: { control: 'boolean', description: 'Показывать заголовок таблицы' },
  },
  args: {
    dense: false,
    fixedHeader: false,
    height: '',
    showCaption: false,
  },
  render: (args) => ({
    setup() {
      const items = [
        { name: 'Иван', age: 25, city: 'Москва' },
        { name: 'Анна', age: 30, city: 'Санкт-Петербург' },
        { name: 'Петр', age: 28, city: 'Казань' },
      ]
      return { args, items }
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-table
              :dense="args.dense"
              :fixed-header="args.fixedHeader"
              :height="args.height || undefined"
            >
              <caption v-if="args.showCaption">Пример таблицы</caption>
              <thead>
                <tr>
                  <th>Имя</th>
                  <th>Возраст</th>
                  <th>Город</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in items" :key="i">
                  <td>{{ item.name }}</td>
                  <td>{{ item.age }}</td>
                  <td>{{ item.city }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-container>
        </v-main>
      </v-app>
    `
  })
}

export default meta

export const Default = {} 