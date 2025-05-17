/** @type { import('@storybook/vue3').Meta } */
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
    bgColor: {
      control: "text",
      description: "Применяет фоновый цвет к селекту",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    
    // Содержимое
    label: {
      control: "text",
      description: "Текст метки селекта",
      table: {
        category: "Содержимое"
      }
    },
    items: {
      control: "object",
      description: "Массив элементов для выбора",
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
      description: "Устанавливает селект только для чтения",
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
    
    // Опции селекта
    multiple: {
      control: "boolean",
      description: "Позволяет выбрать несколько значений",
      table: {
        category: "Опции селекта",
        defaultValue: { summary: false }
      }
    },
    chips: {
      control: "boolean",
      description: "Отображает выбранные элементы как фишки",
      table: {
        category: "Опции селекта",
        defaultValue: { summary: false }
      }
    },
    clearable: {
      control: "boolean",
      description: "Добавляет кнопку очистки поля",
      table: {
        category: "Опции селекта",
        defaultValue: { summary: false }
      }
    },
    itemTitle: {
      control: "text",
      description: "Определяет свойство элемента для отображения в качестве заголовка",
      table: {
        category: "Опции селекта",
        defaultValue: { summary: "title" }
      }
    },
    itemValue: {
      control: "text",
      description: "Определяет свойство элемента для использования в качестве значения",
      table: {
        category: "Опции селекта",
        defaultValue: { summary: "value" }
      }
    },
    persistentHint: {
      control: "boolean",
      description: "Всегда показывает подсказку",
      table: {
        category: "Опции селекта",
        defaultValue: { summary: false }
      }
    },
    returnObject: {
      control: "boolean",
      description: "Возвращает весь объект элемента, а не только значение",
      table: {
        category: "Опции селекта",
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
  },
  args: {
    color: "primary",
    variant: "filled",
    density: "default",
    bgColor: "",
    label: "Выберите опцию",
    items: [
      { title: "Опция 1", value: 1 },
      { title: "Опция 2", value: 2 },
      { title: "Опция 3", value: 3 }
    ],
    placeholder: "Выберите...",
    hint: "",
    modelValue: null,
    prependIcon: "",
    appendIcon: "",
    prependInnerIcon: "",
    disabled: false,
    readonly: false,
    error: false,
    errorMessages: "",
    loading: false,
    multiple: false,
    chips: false,
    clearable: false,
    itemTitle: "title",
    itemValue: "value",
    persistentHint: false,
    returnObject: false,
    hideDetails: false
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
              :items="args.items"
              :placeholder="args.placeholder"
              :hint="args.hint"
              :error-messages="args.errorMessages"
              :disabled="args.disabled"
              :readonly="args.readonly"
              :error="args.error"
              :loading="args.loading"
              :multiple="args.multiple"
              :chips="args.chips"
              :clearable="args.clearable"
              :item-title="args.itemTitle"
              :item-value="args.itemValue"
              :persistent-hint="args.persistentHint"
              :return-object="args.returnObject"
              :hide-details="args.hideDetails"
              :prepend-icon="args.prependIcon"
              :append-icon="args.appendIcon"
              :prepend-inner-icon="args.prependInnerIcon"
            ></v-select>
          </v-container>
        </v-main>
      </v-app>
    `
  })
};

export default meta;

export const Default = {
  args: {
    label: "Выберите опцию"
  }
};

export const Outlined = {
  args: {
    variant: "outlined",
    label: "Выберите страну",
    items: [
      { title: "Россия", value: "ru" },
      { title: "США", value: "us" },
      { title: "Германия", value: "de" },
      { title: "Франция", value: "fr" },
      { title: "Япония", value: "jp" }
    ]
  }
};

export const WithIcons = {
  args: {
    label: "Выберите транспорт",
    prependIcon: "mdi-transit-connection",
    items: [
      { title: "Автомобиль", value: "car", icon: "mdi-car" },
      { title: "Самолет", value: "plane", icon: "mdi-airplane" },
      { title: "Поезд", value: "train", icon: "mdi-train" },
      { title: "Корабль", value: "ship", icon: "mdi-ship" }
    ]
  }
};

export const Multiple = {
  args: {
    label: "Выберите языки",
    multiple: true,
    items: [
      { title: "Английский", value: "en" },
      { title: "Русский", value: "ru" },
      { title: "Французский", value: "fr" },
      { title: "Испанский", value: "es" },
      { title: "Китайский", value: "zh" }
    ]
  }
};

export const WithChips = {
  args: {
    label: "Выберите навыки",
    multiple: true,
    chips: true,
    items: [
      { title: "HTML", value: "html" },
      { title: "CSS", value: "css" },
      { title: "JavaScript", value: "js" },
      { title: "Vue", value: "vue" },
      { title: "React", value: "react" }
    ]
  }
};

export const Clearable = {
  args: {
    label: "Выберите категорию",
    clearable: true,
    items: [
      { title: "Технологии", value: "tech" },
      { title: "Спорт", value: "sport" },
      { title: "Искусство", value: "art" },
      { title: "Наука", value: "science" }
    ]
  }
};

export const Disabled = {
  args: {
    label: "Недоступный селект",
    disabled: true,
    modelValue: 2
  }
};

export const WithError = {
  args: {
    label: "Обязательное поле",
    error: true,
    errorMessages: "Пожалуйста, выберите опцию"
  }
}; 