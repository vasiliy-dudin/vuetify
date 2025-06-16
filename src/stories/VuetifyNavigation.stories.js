/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Navigation/Vuetify",
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
            <h1>Навигационные компоненты Vuetify</h1>
            <p>Этот раздел демонстрирует навигационные элементы Vuetify.</p>
            
            <h2 class="mt-6">Примеры навигации</h2>
            <v-row>
              <v-col cols="12">
                <v-card class="mb-4">
                  <v-toolbar color="primary" dark>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    <v-toolbar-title>Панель навигации</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-toolbar>
                </v-card>
              </v-col>
              
              <v-col cols="12" md="6">
                <v-card class="mb-4">
                  <v-tabs>
                    <v-tab>Вкладка 1</v-tab>
                    <v-tab>Вкладка 2</v-tab>
                    <v-tab>Вкладка 3</v-tab>
                  </v-tabs>
                </v-card>
              </v-col>
              
              <v-col cols="12" md="6">
                <v-card class="mb-4">
                  <v-bottom-navigation>
                    <v-btn>
                      <v-icon>mdi-home</v-icon>
                      Главная
                    </v-btn>
                    <v-btn>
                      <v-icon>mdi-heart</v-icon>
                      Избранное
                    </v-btn>
                    <v-btn>
                      <v-icon>mdi-account</v-icon>
                      Профиль
                    </v-btn>
                  </v-bottom-navigation>
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

export const NavigationComponents = {
  args: {}
};