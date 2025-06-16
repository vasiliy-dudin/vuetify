/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Showcase/Vuetify",
  tags: ["autodocs"],
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <h1>Showcase компонентов Vuetify</h1>
            <p>Этот раздел демонстрирует различные компоненты Vuetify в действии.</p>
            
            <h2 class="mt-6">Карточки и элементы управления</h2>
            <v-row>
              <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="400">
                  <v-img
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    cover
                  ></v-img>
                  <v-card-title>Заголовок карточки</v-card-title>
                  <v-card-subtitle>Подзаголовок</v-card-subtitle>
                  <v-card-text>
                    <p>Это пример карточки с изображением и текстом.</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary">Действие</v-btn>
                    <v-btn color="secondary">Отмена</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              
              <v-col cols="12" md="4">
                <v-card class="pa-4">
                  <v-card-title>Элементы формы</v-card-title>
                  <v-text-field label="Имя" variant="outlined"></v-text-field>
                  <v-select
                    label="Выберите опцию"
                    :items="['Опция 1', 'Опция 2', 'Опция 3']"
                    variant="outlined"
                  ></v-select>
                  <v-checkbox label="Согласен с условиями"></v-checkbox>
                  <v-btn block color="primary" class="mt-4">Отправить</v-btn>
                </v-card>
              </v-col>
              
              <v-col cols="12" md="4">
                <v-card class="pa-4">
                  <v-card-title>Уведомления</v-card-title>
                  <v-alert
                    type="success"
                    title="Успех"
                    text="Операция выполнена успешно!"
                    class="mb-4"
                  ></v-alert>
                  <v-alert
                    type="warning"
                    title="Предупреждение"
                    text="Обратите внимание на важную информацию."
                    class="mb-4"
                  ></v-alert>
                  <v-alert
                    type="error"
                    title="Ошибка"
                    text="Произошла ошибка при выполнении операции."
                  ></v-alert>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-app>
    `
  })
};

export default meta;

export const ComponentShowcase = {
  args: {}
};