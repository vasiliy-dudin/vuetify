/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/VButton",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "default"],
      description: "Применяет указанный цвет к кнопке",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    variant: {
      control: "select",
      options: ["elevated", "flat", "tonal", "outlined", "text", "plain"],
      description: "Применяет различные стили кнопки",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "elevated" }
      }
    },
    size: {
      control: "select",
      options: ["x-small", "small", "default", "large", "x-large"],
      description: "Устанавливает размер кнопки",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "default" }
      }
    },
    rounded: {
      control: "select",
      options: [false, true, "0", "sm", "md", "lg", "xl", "pill"],
      description: "Применяет скругление границ",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    
    // Состояние
    disabled: {
      control: "boolean",
      description: "Отключает кнопку",
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
      description: "Текст кнопки",
      table: {
        category: "Содержимое"
      }
    },
    icon: {
      control: "text",
      description: "Добавляет иконку в кнопку",
      table: {
        category: "Содержимое"
      }
    },
    prependIcon: {
      control: "text",
      description: "Добавляет иконку перед текстом кнопки",
      table: {
        category: "Содержимое"
      }
    },
    appendIcon: {
      control: "text",
      description: "Добавляет иконку после текста кнопки",
      table: {
        category: "Содержимое"
      }
    },
  },
  args: {
    color: "",
    variant: "elevated",
    size: "default",
    rounded: false,
    disabled: false,
    loading: false,
    text: "Кнопка",
    icon: "",
    prependIcon: "",
    appendIcon: ""
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
              :rounded="args.rounded"
              :disabled="args.disabled"
              :loading="args.loading"
              :icon="args.icon"
              :prepend-icon="args.prependIcon"
              :append-icon="args.appendIcon"
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

export const Primary = {
  args: {
    color: "primary"
  }
};

export const Outlined = {
  args: {
    variant: "outlined"
  }
};

export const WithIcon = {
  args: {
    prependIcon: "mdi-heart"
  }
};

export const Loading = {
  args: {
    loading: true
  }
};

export const Disabled = {
  args: {
    disabled: true
  }
};