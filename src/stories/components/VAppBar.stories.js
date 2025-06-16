/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/VAppBar",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "surface"],
      description: "Применяет указанный цвет к панели приложения",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    elevation: {
      control: { type: "range", min: 0, max: 24, step: 1 },
      description: "Устанавливает высоту тени",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: 4 }
      }
    },
    flat: {
      control: "boolean",
      description: "Убирает тень панели приложения",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    border: {
      control: "boolean",
      description: "Добавляет границу к компоненту",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    
    // Содержимое
    title: {
      control: "text",
      description: "Текст заголовка панели приложения",
      table: {
        category: "Содержимое"
      }
    },
    showNavIcon: {
      control: "boolean",
      description: "Показывать/скрывать иконку навигации",
      table: {
        category: "Содержимое",
        defaultValue: { summary: true }
      }
    },
    showSpacer: {
      control: "boolean",
      description: "Показывать/скрывать разделитель между заголовком и действиями",
      table: {
        category: "Содержимое",
        defaultValue: { summary: true }
      }
    },
    showActions: {
      control: "boolean",
      description: "Показывать/скрывать кнопки действий",
      table: {
        category: "Содержимое",
        defaultValue: { summary: true }
      }
    },
    
    // Макет
    height: {
      control: { type: "range", min: 0, max: 128, step: 4 },
      description: "Устанавливает высоту панели приложения",
      table: {
        category: "Макет",
        defaultValue: { summary: 64 }
      }
    },
    density: {
      control: "select",
      options: ["default", "prominent", "comfortable", "compact"],
      description: "Регулирует высоту панели приложения",
      table: {
        category: "Макет",
        defaultValue: { summary: "default" }
      }
    },
    
    // Позиционирование
    absolute: {
      control: "boolean",
      description: "Применяет position: absolute к компоненту",
      table: {
        category: "Позиционирование",
        defaultValue: { summary: false }
      }
    },
    collapse: {
      control: "boolean",
      description: "Переводит панель в свернутое состояние",
      table: {
        category: "Позиционирование",
        defaultValue: { summary: false }
      }
    },
    prominent: {
      control: "boolean",
      description: "Делает панель выразительной (увеличивает высоту)",
      table: {
        category: "Позиционирование",
        defaultValue: { summary: false }
      }
    },
    fixed: {
      control: "boolean",
      description: "Применяет position: fixed к компоненту",
      table: {
        category: "Позиционирование",
        defaultValue: { summary: false }
      }
    },
    
    // Опции
    extended: {
      control: "boolean",
      description: "Расширяет панель дополнительным контентом",
      table: {
        category: "Опции",
        defaultValue: { summary: false }
      }
    },
    floating: {
      control: "boolean",
      description: "Убирает фон и добавляет эффект парения",
      table: {
        category: "Опции",
        defaultValue: { summary: false }
      }
    },
    image: {
      control: "text",
      description: "URL изображения для фона панели",
      table: {
        category: "Опции"
      }
    },
  },
  args: {
    color: "primary",
    elevation: 4,
    title: "Приложение",
    showNavIcon: true,
    showSpacer: true,
    showActions: true,
    flat: false,
    density: "default",
    border: false,
    absolute: false,
    prominent: false,
    fixed: false,
    extended: false,
    floating: false,
    collapse: false,
    height: 64,
    image: ""
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    template: `
      <v-app>
        <v-app-bar
          v-bind="args"
          :height="args.height"
          :image="args.image"
        >
          <template v-if="args.showNavIcon">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>

          <v-app-bar-title>{{ args.title }}</v-app-bar-title>

          <template v-if="args.showSpacer">
            <v-spacer></v-spacer>
          </template>

          <template v-if="args.showActions">
            <v-btn icon="mdi-magnify"></v-btn>
            <v-btn icon="mdi-heart"></v-btn>
            <v-btn icon="mdi-dots-vertical"></v-btn>
          </template>

          <template v-if="args.extended" v-slot:extension>
            <v-tabs align-with-title>
              <v-tab>Вкладка 1</v-tab>
              <v-tab>Вкладка 2</v-tab>
              <v-tab>Вкладка 3</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>

        <v-main style="min-height: 300px; background-color: #f5f5f5;">
          <v-container>
            <p>Основной контент приложения</p>
          </v-container>
        </v-main>
      </v-app>
    `
  })
};

export default meta;

export const Default = {
  args: {
    title: "Стандартная панель"
  }
};

export const Prominent = {
  args: {
    prominent: true,
    title: "Выразительная панель"
  }
};

export const WithTabs = {
  args: {
    extended: true,
    title: "Панель с вкладками"
  }
};

export const Dense = {
  args: {
    density: "compact",
    title: "Компактная панель"
  }
};

export const Flat = {
  args: {
    flat: true,
    title: "Плоская панель"
  }
};

export const Floating = {
  args: {
    floating: true,
    title: "Парящая панель"
  }
};

export const WithImage = {
  args: {
    image: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
    title: "Панель с изображением",
    color: "transparent"
  }
}; 