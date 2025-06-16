/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Design System/Vuetify",
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
            <h1>Дизайн-система Vuetify</h1>
            <p>Этот раздел содержит основные элементы дизайн-системы Vuetify.</p>
            
            <h2 class="mt-6">Цвета</h2>
            <v-row>
              <v-col v-for="color in ['primary', 'secondary', 'success', 'info', 'warning', 'error']" :key="color" cols="12" sm="6" md="4" lg="2">
                <v-card :color="color" height="100" class="d-flex align-center justify-center">
                  <span class="text-capitalize white--text">{{ color }}</span>
                </v-card>
              </v-col>
            </v-row>
            
            <h2 class="mt-6">Типография</h2>
            <v-card class="pa-4 mb-4">
              <h1>Заголовок h1</h1>
              <h2>Заголовок h2</h2>
              <h3>Заголовок h3</h3>
              <h4>Заголовок h4</h4>
              <h5>Заголовок h5</h5>
              <h6>Заголовок h6</h6>
              <p>Обычный текст параграфа</p>
              <p class="text-caption">Текст caption</p>
              <p class="text-overline">Текст overline</p>
            </v-card>
          </v-container>
        </v-main>
      </v-app>
    `
  })
};

export default meta;

export const DesignSystem = {
  args: {}
};