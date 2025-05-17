/** @type { import('@storybook/vue3').Meta } */
const meta = {
  title: "Components/VBtn",
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
      options: ["text", "flat", "elevated", "tonal", "outlined", "plain"],
      description: "Применяет различные стили кнопки",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "elevated" }
      }
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
      description: "Регулирует плотность кнопки",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "default" }
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

    // Содержимое
    text: {
      control: "text",
      description: "Текст кнопки",
      table: {
        category: "Содержимое"
      }
    },
    prependIcon: {
      control: "text",
      description: "Добавляет иконку перед текстом",
      table: {
        category: "Содержимое"
      }
    },
    appendIcon: {
      control: "text",
      description: "Добавляет иконку после текста",
      table: {
        category: "Содержимое"
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
      description: "Добавляет индикатор загрузки",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    active: {
      control: "boolean",
      description: "Управляет состоянием активности кнопки",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },

    // Поведение
    ripple: {
      control: "boolean",
      description: "Включает/отключает эффект волны",
      table: {
        category: "Поведение",
        defaultValue: { summary: true }
      }
    },
    
    // Макет
    block: {
      control: "boolean",
      description: "Расширяет кнопку на 100% ширины",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
    position: {
      control: "select",
      options: ["static", "relative", "fixed", "absolute", "sticky"],
      description: "Устанавливает позицию кнопки",
      table: {
        category: "Макет",
        defaultValue: { summary: "relative" }
      }
    },
    rounded: {
      control: "select",
      options: [false, true, "0", "sm", "xs", "lg", "xl", "pill"],
      description: "Применяет скругление границ",
      table: {
        category: "Макет",
        defaultValue: { summary: "xs" }
      }
    },
  },
  args: {
    text: "Кнопка",
    color: "primary",
    variant: "elevated",
    size: "default",
    density: "default",
    disabled: false,
    loading: false,
    block: false,
    ripple: true,
    position: "relative",
    prependIcon: "",
    appendIcon: "",
    active: false,
    rounded: "xs"
  },
  render: (args) => ({
    setup() {
      return { args };
    },    
    template: `
      <v-app>
        <v-main>
          <v-container>
            <div style="display: flex; flex-direction: column; gap: 20px; align-items: flex-start;">
              <v-btn 
                v-bind="args"
                :icon="false"
              >
                {{ args.text }}

                <template v-if="args.prependIcon" #prepend>
                  <v-icon :icon="args.prependIcon" />
                </template>
                
                <template v-if="args.appendIcon" #append>
                  <v-icon :icon="args.appendIcon" />
                </template>
              </v-btn>
            </div>
          </v-container>
        </v-main>
      </v-app>
    `
  })
};

export default meta;

export const Primary = {
  args: {
    color: "primary",
    text: "Основная кнопка"
  }
};

export const Secondary = {
  args: {
    color: "secondary",
    text: "Вторичная кнопка"
  }
};

export const Icon = {
  args: {
    prependIcon: "mdi-heart",
    text: "",
    color: "error"
  }
};

export const Loading = {
  args: {
    loading: true,
    text: "Загрузка..."
  }
};

export const Block = {
  args: {
    block: true,
    text: "Блочная кнопка"
  }
};

export const Outlined = {
  args: {
    variant: "outlined",
    text: "Кнопка с контуром"
  }
};

export const Text = {
  args: {
    variant: "text",
    text: "Текстовая кнопка"
  }
};

export const WithIcons = {
  args: {
    prependIcon: "mdi-magnify",
    text: "Поиск",
    appendIcon: "mdi-arrow-right"
  }
};

export const LongText = {
  args: {
    text: "Кнопка с очень длинным текстом, который может переноситься"
  }
};
