/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/VTextField",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "default"],
      description: "Применяет указанный цвет к текстовому полю",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    variant: {
      control: "select",
      options: ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"],
      description: "Применяет различные стили текстового поля",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "filled" }
      }
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
      description: "Регулирует плотность текстового поля",
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
    bgColor: {
      control: "text",
      description: "Применяет фоновый цвет к текстовому полю",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    
    // Содержимое
    label: {
      control: "text",
      description: "Текст метки поля",
      table: {
        category: "Содержимое"
      }
    },
    placeholder: {
      control: "text",
      description: "Текст подсказки внутри поля",
      table: {
        category: "Содержимое"
      }
    },
    hint: {
      control: "text",
      description: "Подсказка, отображаемая под полем",
      table: {
        category: "Содержимое"
      }
    },
    modelValue: {
      control: "text",
      description: "Значение текстового поля",
      table: {
        category: "Содержимое"
      }
    },
    prependIcon: {
      control: "text",
      description: "Добавляет иконку перед полем",
      table: {
        category: "Содержимое"
      }
    },
    appendIcon: {
      control: "text",
      description: "Добавляет иконку после поля",
      table: {
        category: "Содержимое"
      }
    },
    prependInnerIcon: {
      control: "text",
      description: "Добавляет иконку внутри поля перед текстом",
      table: {
        category: "Содержимое"
      }
    },
    appendInnerIcon: {
      control: "text",
      description: "Добавляет иконку внутри поля после текста",
      table: {
        category: "Содержимое"
      }
    },
    
    // Состояние
    disabled: {
      control: "boolean",
      description: "Отключает текстовое поле",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    readonly: {
      control: "boolean",
      description: "Устанавливает поле только для чтения",
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
    
    // Валидация
    rules: {
      control: "object",
      description: "Массив функций валидации",
      table: {
        category: "Валидация",
        defaultValue: { summary: "[]" }
      }
    },
    clearable: {
      control: "boolean",
      description: "Добавляет кнопку очистки поля",
      table: {
        category: "Валидация",
        defaultValue: { summary: false }
      }
    },
    persistentHint: {
      control: "boolean",
      description: "Всегда показывает подсказку",
      table: {
        category: "Валидация",
        defaultValue: { summary: false }
      }
    },
    
    // Макет
    counter: {
      control: ["boolean", "number"],
      description: "Создает счетчик для поля ввода",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
    maxlength: {
      control: "number",
      description: "Максимальная длина ввода",
      table: {
        category: "Макет"
      }
    },
    autofocus: {
      control: "boolean",
      description: "Автоматически фокусируется на поле при загрузке",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
  },
  args: {
    color: "",
    variant: "filled",
    density: "default",
    rounded: false,
    bgColor: "",
    label: "Текстовое поле",
    placeholder: "Введите текст",
    hint: "",
    modelValue: "",
    prependIcon: "",
    appendIcon: "",
    prependInnerIcon: "",
    appendInnerIcon: "",
    disabled: false,
    readonly: false,
    error: false,
    errorMessages: "",
    loading: false,
    clearable: false,
    persistentHint: false,
    counter: false,
    maxlength: null,
    autofocus: false
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
            <v-text-field
              v-bind="args"
              v-model="value"
              :label="args.label"
              :placeholder="args.placeholder"
              :hint="args.hint"
              :maxlength="args.maxlength"
              :counter="args.counter"
              :error-messages="args.errorMessages"
              :disabled="args.disabled"
              :readonly="args.readonly"
              :error="args.error"
              :loading="args.loading"
              :clearable="args.clearable"
              :persistent-hint="args.persistentHint"
              :prepend-icon="args.prependIcon"
              :append-icon="args.appendIcon"
              :prepend-inner-icon="args.prependInnerIcon"
              :append-inner-icon="args.appendInnerIcon"
              :autofocus="args.autofocus"
            ></v-text-field>
          </v-container>
        </v-main>
      </v-app>
    `
  })
};

export default meta;

export const Default = {
  args: {
    label: "Имя",
    placeholder: "Введите ваше имя"
  }
};

export const Outlined = {
  args: {
    variant: "outlined",
    label: "Электронная почта",
    placeholder: "example@email.com"
  }
};

export const WithIcon = {
  args: {
    label: "Поиск",
    prependIcon: "mdi-magnify"
  }
};

export const WithInnerIcon = {
  args: {
    label: "Пароль",
    appendInnerIcon: "mdi-eye",
    placeholder: "Введите пароль"
  }
};

export const Disabled = {
  args: {
    label: "Недоступное поле",
    modelValue: "Это недоступное значение",
    disabled: true
  }
};

export const WithError = {
  args: {
    label: "Электронная почта",
    error: true,
    errorMessages: "Пожалуйста, введите корректный email",
    modelValue: "invalid-email"
  }
};

export const WithCounter = {
  args: {
    label: "Биография",
    counter: true,
    maxlength: 100,
    placeholder: "Расскажите о себе"
  }
};

export const WithHint = {
  args: {
    label: "Пароль",
    hint: "Минимум 8 символов, включая буквы и цифры",
    persistentHint: true
  }
};

export const Clearable = {
  args: {
    label: "Поисковый запрос",
    clearable: true,
    modelValue: "Vuetify компоненты"
  }
}; 