/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/VSelect",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "default"],
      description: "Применяет указанный цвет к селекту",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    variant: {
      control: "select",
      options: ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"],
      description: "Применяет различные стили селекта",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "filled" }
      }
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
      description: "Регулирует плотность селекта",
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
      description: "Применяет фоновый цвет к селекту",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    chipColor: {
      control: "text",
      description: "Применяет цвет к чипам выбранных элементов",
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
    items: {
      control: "object",
      description: "Массив элементов для выбора",
      table: {
        category: "Содержимое",
        defaultValue: { summary: "[]" }
      }
    },
    itemTitle: {
      control: "text",
      description: "Свойство для отображения заголовка элемента",
      table: {
        category: "Содержимое",
        defaultValue: { summary: "title" }
      }
    },
    itemValue: {
      control: "text",
      description: "Свойство для значения элемента",
      table: {
        category: "Содержимое",
        defaultValue: { summary: "value" }
      }
    },
    modelValue: {
      control: "text",
      description: "Значение селекта",
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
        category: "Содержимое",
        defaultValue: { summary: "$dropdown" }
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
    noDataText: {
      control: "text",
      description: "Текст, отображаемый при отсутствии данных",
      table: {
        category: "Содержимое",
        defaultValue: { summary: "$vuetify.noDataText" }
      }
    },
    
    // Состояние
    disabled: {
      control: "boolean",
      description: "Отключает селект",
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
    
    // Поведение
    multiple: {
      control: "boolean",
      description: "Позволяет выбрать несколько элементов",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    chips: {
      control: "boolean",
      description: "Отображает выбранные элементы как чипы",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    closableChips: {
      control: "boolean",
      description: "Добавляет кнопку закрытия к чипам",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    clearable: {
      control: "boolean",
      description: "Добавляет кнопку очистки поля",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    persistentHint: {
      control: "boolean",
      description: "Всегда показывает подсказку",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    persistentPlaceholder: {
      control: "boolean",
      description: "Всегда показывает плейсхолдер",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    returnObject: {
      control: "boolean",
      description: "Возвращает полный объект элемента вместо значения",
      table: {
        category: "Поведение",
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
    autofocus: {
      control: "boolean",
      description: "Автоматически фокусируется на поле при загрузке",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
    hideDetails: {
      control: ["boolean", "string"],
      description: "Скрывает детали (подсказки, счетчик, сообщения об ошибках)",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
    menuProps: {
      control: "object",
      description: "Свойства для меню выбора",
      table: {
        category: "Макет",
        defaultValue: { summary: "{}" }
      }
    },
  },
  args: {
    color: "",
    variant: "filled",
    density: "default",
    rounded: false,
    bgColor: "",
    chipColor: "",
    label: "Выберите опцию",
    placeholder: "",
    hint: "",
    items: [
      { title: "Опция 1", value: 1 },
      { title: "Опция 2", value: 2 },
      { title: "Опция 3", value: 3 },
      { title: "Опция 4", value: 4 },
      { title: "Опция 5", value: 5 },
    ],
    itemTitle: "title",
    itemValue: "value",
    modelValue: null,
    prependIcon: "",
    appendIcon: "$dropdown",
    prependInnerIcon: "",
    appendInnerIcon: "",
    noDataText: "Нет данных",
    disabled: false,
    readonly: false,
    error: false,
    errorMessages: "",
    loading: false,
    multiple: false,
    chips: false,
    closableChips: false,
    clearable: false,
    persistentHint: false,
    persistentPlaceholder: false,
    returnObject: false,
    counter: false,
    autofocus: false,
    hideDetails: false,
    menuProps: {}
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
            <v-select
              v-bind="args"
              v-model="value"
              :label="args.label"
              :placeholder="args.placeholder"
              :hint="args.hint"
              :items="args.items"
              :item-title="args.itemTitle"
              :item-value="args.itemValue"
              :error-messages="args.errorMessages"
              :disabled="args.disabled"
              :readonly="args.readonly"
              :error="args.error"
              :loading="args.loading"
              :multiple="args.multiple"
              :chips="args.chips"
              :closable-chips="args.closableChips"
              :clearable="args.clearable"
              :persistent-hint="args.persistentHint"
              :persistent-placeholder="args.persistentPlaceholder"
              :return-object="args.returnObject"
              :counter="args.counter"
              :autofocus="args.autofocus"
              :hide-details="args.hideDetails"
              :menu-props="args.menuProps"
              :prepend-icon="args.prependIcon"
              :append-icon="args.appendIcon"
              :prepend-inner-icon="args.prependInnerIcon"
              :append-inner-icon="args.appendInnerIcon"
              :no-data-text="args.noDataText"
            ></v-select>
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

export const Outlined = {
  args: {
    variant: "outlined",
    label: "Выберите опцию"
  }
};

export const WithIcon = {
  args: {
    prependIcon: "mdi-account",
    label: "Выберите пользователя"
  }
};

export const Multiple = {
  args: {
    multiple: true,
    label: "Выберите несколько опций"
  }
};

export const WithChips = {
  args: {
    multiple: true,
    chips: true,
    label: "Выберите с чипами"
  }
};

export const ClosableChips = {
  args: {
    multiple: true,
    chips: true,
    closableChips: true,
    label: "Выберите с закрываемыми чипами"
  }
};

export const Clearable = {
  args: {
    clearable: true,
    label: "Очищаемый селект"
  }
};

export const Disabled = {
  args: {
    disabled: true,
    label: "Отключенный селект",
    modelValue: 1
  }
};

export const WithError = {
  args: {
    error: true,
    errorMessages: "Пожалуйста, выберите опцию",
    label: "Обязательное поле"
  }
};