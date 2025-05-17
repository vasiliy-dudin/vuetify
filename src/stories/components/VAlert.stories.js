/** @type { import('@storybook/vue3').Meta } */
const meta = {
  title: "Components/VAlert",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "default"],
      description: "Применяет указанный цвет к алерту",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    variant: {
      control: "select",
      options: ["flat", "elevated", "tonal", "outlined", "text", "plain"],
      description: "Применяет различные стили алерта",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "flat" }
      }
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
      description: "Регулирует плотность алерта",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "default" }
      }
    },
    elevation: {
      control: { type: "range", min: 0, max: 24, step: 1 },
      description: "Устанавливает высоту тени",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: 0 }
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
    border: {
      control: "select",
      options: [false, true, "top", "end", "bottom", "start", "top start", "top end", "bottom start", "bottom end"],
      description: "Добавляет границу к компоненту",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    
    // Содержимое
    title: {
      control: "text",
      description: "Заголовок алерта",
      table: {
        category: "Содержимое"
      }
    },
    text: {
      control: "text",
      description: "Текст алерта",
      table: {
        category: "Содержимое"
      }
    },
    icon: {
      control: "text",
      description: "Иконка алерта (например, mdi-alert-circle)",
      table: {
        category: "Содержимое"
      }
    },
    
    // Состояние
    type: {
      control: "select",
      options: ["success", "info", "warning", "error"],
      description: "Тип алерта, который применяет предопределенные цвета и иконки",
      table: {
        category: "Состояние"
      }
    },
    closable: {
      control: "boolean",
      description: "Добавляет кнопку закрытия",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    prominent: {
      control: "boolean",
      description: "Делает иконку больше",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
  },
  args: {
    color: "",
    variant: "flat",
    density: "default",
    elevation: 0,
    rounded: false,
    border: false,
    title: "Заголовок алерта",
    text: "Это пример текста алерта. Он может содержать важную информацию для пользователя.",
    icon: "",
    type: "",
    closable: false,
    prominent: false
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-alert
              v-bind="args"
              :title="args.title"
              :icon="args.icon"
              :type="args.type"
              :closable="args.closable"
              :prominent="args.prominent"
            >
              {{ args.text }}
            </v-alert>
          </v-container>
        </v-main>
      </v-app>
    `
  })
};

export default meta;

export const Default = {
  args: {
    text: "Стандартный алерт без дополнительных свойств"
  }
};

export const Success = {
  args: {
    type: "success",
    text: "Операция успешно выполнена"
  }
};

export const Warning = {
  args: {
    type: "warning",
    text: "Внимание! Это предупреждение."
  }
};

export const Error = {
  args: {
    type: "error",
    text: "Произошла ошибка! Пожалуйста, попробуйте снова."
  }
};

export const Info = {
  args: {
    type: "info",
    text: "Это информационное сообщение."
  }
};

export const Closable = {
  args: {
    color: "primary",
    closable: true,
    text: "Этот алерт можно закрыть."
  }
};

export const WithIcon = {
  args: {
    icon: "mdi-heart",
    color: "pink",
    text: "Алерт с пользовательской иконкой."
  }
};

export const WithTitle = {
  args: {
    title: "Важное сообщение",
    color: "deep-purple",
    text: "Алерт с заголовком и текстом."
  }
}; 