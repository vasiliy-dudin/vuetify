/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/Navigation/VAppBar",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "default"],
      description: "Применяет указанный цвет к панели приложения",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact", "prominent"],
      description: "Регулирует плотность панели приложения",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "default" }
      }
    },
    elevation: {
      control: ["number", "string"],
      description: "Устанавливает высоту тени панели приложения",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: 4 }
      }
    },
    flat: {
      control: "boolean",
      description: "Удаляет тень панели приложения",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    
    // Поведение
    absolute: {
      control: "boolean",
      description: "Применяет абсолютное позиционирование",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    collapse: {
      control: "boolean",
      description: "Сворачивает панель приложения",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    fixed: {
      control: "boolean",
      description: "Применяет фиксированное позиционирование",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    
    // Содержимое
    title: {
      control: "text",
      description: "Заголовок панели приложения",
      table: {
        category: "Содержимое"
      }
    },
    showNavIcon: {
      control: "boolean",
      description: "Показывает иконку навигации",
      table: {
        category: "Содержимое",
        defaultValue: { summary: false }
      }
    }
  },
  args: {
    color: "primary",
    density: "default",
    elevation: 4,
    flat: false,
    absolute: false,
    collapse: false,
    fixed: false,
    title: "Панель приложения",
    showNavIcon: true
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    template: `
      <v-app>
        <v-app-bar
          :color="args.color"
          :density="args.density"
          :elevation="args.elevation"
          :flat="args.flat"
          :absolute="args.absolute"
          :collapse="args.collapse"
          :fixed="args.fixed"
        >
          <template v-if="args.showNavIcon" v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>
          
          <v-app-bar-title>{{ args.title }}</v-app-bar-title>
          
          <template v-slot:append>
            <v-btn icon="mdi-magnify"></v-btn>
            <v-btn icon="mdi-heart"></v-btn>
            <v-btn icon="mdi-dots-vertical"></v-btn>
          </template>
        </v-app-bar>
        
        <v-main>
          <v-container>
            <v-card class="pa-4 mt-15">
              <p>Содержимое страницы под панелью приложения</p>
            </v-card>
          </v-container>
        </v-main>
      </v-app>
    `
  })
};

export default meta;

export const Default = {
  args: {}
};

export const Flat = {
  args: {
    flat: true
  }
};

export const Compact = {
  args: {
    density: "compact"
  }
};

export const NoNavIcon = {
  args: {
    showNavIcon: false
  }
};

export const Secondary = {
  args: {
    color: "secondary"
  }
};