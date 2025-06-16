/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/VCheckbox",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "default"],
      description: "Применяет указанный цвет к чекбоксу",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
      description: "Регулирует плотность чекбокса",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "default" }
      }
    },
    
    // Содержимое
    label: {
      control: "text",
      description: "Текст метки чекбокса",
      table: {
        category: "Содержимое"
      }
    },
    falseIcon: {
      control: "text",
      description: "Иконка для невыбранного состояния (например, mdi-checkbox-blank-outline)",
      table: {
        category: "Содержимое"
      }
    },
    trueIcon: {
      control: "text",
      description: "Иконка для выбранного состояния (например, mdi-checkbox-marked)",
      table: {
        category: "Содержимое"
      }
    },
    indeterminateIcon: {
      control: "text",
      description: "Иконка для неопределенного состояния (например, mdi-minus-box)",
      table: {
        category: "Содержимое"
      }
    },
    
    // Состояние
    modelValue: {
      control: "boolean",
      description: "Значение чекбокса (true/false)",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    disabled: {
      control: "boolean",
      description: "Отключает чекбокс",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    readonly: {
      control: "boolean",
      description: "Устанавливает чекбокс только для чтения",
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
    indeterminate: {
      control: "boolean",
      description: "Использует неопределенное состояние",
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
    
    // Дополнительно
    value: {
      control: "text",
      description: "Значение для использования в режиме множественного выбора",
      table: {
        category: "Дополнительно"
      }
    },
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
    density: "default",
    label: "Чекбокс",
    falseIcon: "",
    trueIcon: "",
    indeterminateIcon: "",
    modelValue: false,
    disabled: false,
    readonly: false,
    error: false,
    errorMessages: "",
    indeterminate: false,
    hideDetails: false,
    ripple: true,
    value: "",
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
            <v-checkbox
              v-bind="args"
              v-model="value"
              :label="args.label"
              :error-messages="args.errorMessages"
              :disabled="args.disabled"
              :readonly="args.readonly"
              :error="args.error"
              :indeterminate="args.indeterminate"
              :hide-details="args.hideDetails"
              :ripple="args.ripple"
              :false-icon="args.falseIcon"
              :true-icon="args.trueIcon"
              :indeterminate-icon="args.indeterminateIcon"
              :hint="args.hint"
              :persistent-hint="args.persistentHint"
            ></v-checkbox>
          </v-container>
        </v-main>
      </v-app>
    `
  })
};

export default meta;

export const Default = {
  args: {
    label: "Примите условия использования"
  }
};

export const Checked = {
  args: {
    label: "Уже выбрано",
    modelValue: true
  }
};

export const Indeterminate = {
  args: {
    label: "Выбрать все",
    indeterminate: true
  }
};

export const CustomIcons = {
  args: {
    label: "С пользовательскими иконками",
    falseIcon: "mdi-star-outline",
    trueIcon: "mdi-star"
  }
};

export const Disabled = {
  args: {
    label: "Недоступный чекбокс",
    disabled: true
  }
};

export const Error = {
  args: {
    label: "Обязательное поле",
    error: true,
    errorMessages: "Это поле обязательно для заполнения"
  }
};

export const WithHint = {
  args: {
    label: "Настройки уведомлений",
    hint: "Вы можете изменить это в любое время",
    persistentHint: true
  }
};

export const Dense = {
  args: {
    label: "Компактный чекбокс",
    density: "compact"
  }
}; 