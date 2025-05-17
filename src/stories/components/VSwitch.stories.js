/** @type { import('@storybook/vue3').Meta } */
const meta = {
  title: "Components/VSwitch",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "default"],
      description: "Применяет указанный цвет к переключателю",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "primary" }
      }
    },
    trackColor: {
      control: "text",
      description: "Цвет трека переключателя",
      table: {
        category: "Внешний вид"
      }
    },
    thumbColor: {
      control: "text",
      description: "Цвет ползунка переключателя",
      table: {
        category: "Внешний вид"
      }
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
      description: "Регулирует плотность переключателя",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "default" }
      }
    },
    
    // Содержимое
    label: {
      control: "text",
      description: "Текст метки переключателя",
      table: {
        category: "Содержимое"
      }
    },
    falseIcon: {
      control: "text",
      description: "Иконка для выключенного состояния (например, mdi-close)",
      table: {
        category: "Содержимое"
      }
    },
    trueIcon: {
      control: "text",
      description: "Иконка для включенного состояния (например, mdi-check)",
      table: {
        category: "Содержимое"
      }
    },
    
    // Состояние
    modelValue: {
      control: "boolean",
      description: "Значение переключателя (true/false)",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    disabled: {
      control: "boolean",
      description: "Отключает переключатель",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    readonly: {
      control: "boolean",
      description: "Устанавливает переключатель только для чтения",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    error: {
      control: "boolean",
      description: "Устанавливает состояние ошибки",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    errorMessages: {
      control: "text",
      description: "Сообщения об ошибках",
      table: {
        category: "Состояние"
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
    
    // Макет
    hideDetails: {
      control: "boolean",
      description: "Скрывает сообщения об ошибках и подсказки",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
    ripple: {
      control: "boolean",
      description: "Включает/отключает эффект волны",
      table: {
        category: "Макет",
        defaultValue: { summary: true }
      }
    },
    inset: {
      control: "boolean",
      description: "Сдвигает метку вправо",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
    
    // Дополнительно
    hint: {
      control: "text",
      description: "Подсказка, отображаемая под полем",
      table: {
        category: "Дополнительно"
      }
    },
    persistentHint: {
      control: "boolean",
      description: "Всегда показывает подсказку",
      table: {
        category: "Дополнительно",
        defaultValue: { summary: false }
      }
    },
  },
  args: {
    color: "primary",
    trackColor: "",
    thumbColor: "",
    density: "default",
    label: "Переключатель",
    falseIcon: "",
    trueIcon: "",
    modelValue: false,
    disabled: false,
    readonly: false,
    error: false,
    errorMessages: "",
    loading: false,
    hideDetails: false,
    ripple: true,
    inset: false,
    hint: "",
    persistentHint: false
  },
  render: (args) => ({
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-switch
              v-bind="args"
              v-model="value"
              :label="args.label"
              :error-messages="args.errorMessages"
              :disabled="args.disabled"
              :readonly="args.readonly"
              :error="args.error"
              :loading="args.loading"
              :hide-details="args.hideDetails"
              :ripple="args.ripple"
              :inset="args.inset"
              :false-icon="args.falseIcon"
              :true-icon="args.trueIcon"
              :hint="args.hint"
              :persistent-hint="args.persistentHint"
              :track-color="args.trackColor"
              :thumb-color="args.thumbColor"
            ></v-switch>
          </v-container>
        </v-main>
      </v-app>
    `
  })
};

export default meta;

export const Default = {
  args: {
    label: "Включите функцию"
  }
};

export const Toggled = {
  args: {
    label: "Активный переключатель",
    modelValue: true
  }
};

export const CustomColors = {
  args: {
    label: "Цветной переключатель",
    color: "success",
    trackColor: "grey-lighten-1"
  }
};

export const WithIcons = {
  args: {
    label: "С иконками",
    falseIcon: "mdi-close",
    trueIcon: "mdi-check"
  }
};

export const Disabled = {
  args: {
    label: "Недоступный переключатель",
    disabled: true
  }
};

export const Loading = {
  args: {
    label: "Загрузка",
    loading: true
  }
};

export const Error = {
  args: {
    label: "Ошибка",
    error: true,
    errorMessages: "Что-то пошло не так!"
  }
};

export const WithHint = {
  args: {
    label: "С подсказкой",
    hint: "Включите эту функцию для активации уведомлений",
    persistentHint: true
  }
};

export const Inset = {
  args: {
    label: "Со смещением",
    inset: true
  }
}; 