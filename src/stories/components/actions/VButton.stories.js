/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/Actions/VButton",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "default"],
      description: "Применяет указанный цвет к кнопке действия",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    variant: {
      control: "select",
      options: ["elevated", "flat", "tonal", "outlined", "text", "plain"],
      description: "Применяет различные стили кнопки действия",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "elevated" }
      }
    },
    size: {
      control: "select",
      options: ["x-small", "small", "default", "large", "x-large"],
      description: "Устанавливает размер кнопки действия",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "default" }
      }
    },
    
    // Состояние
    disabled: {
      control: "boolean",
      description: "Отключает кнопку действия",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    loading: {
      control: "boolean",
      description: "Отображает индикатор загрузки",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    
    // Содержимое
    text: {
      control: "text",
      description: "Текст кнопки действия",
      table: {
        category: "Содержимое"
      }
    },
    icon: {
      control: "text",
      description: "Добавляет иконку в кнопку действия",
      table: {
        category: "Содержимое"
      }
    }
  },
  args: {
    color: "primary",
    variant: "elevated",
    size: "default",
    disabled: false,
    loading: false,
    text: "Действие",
    icon: ""
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-btn
              :color="args.color"
              :variant="args.variant"
              :size="args.size"
              :disabled="args.disabled"
              :loading="args.loading"
              :icon="args.icon"
            >
              {{ args.text }}
            </v-btn>
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

export const Secondary = {
  args: {
    color: "secondary"
  }
};

export const Small = {
  args: {
    size: "small"
  }
};

export const IconButton = {
  args: {
    icon: "mdi-heart",
    text: ""
  }
};