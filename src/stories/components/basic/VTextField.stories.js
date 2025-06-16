/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/Basic/VTextField",
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
    modelValue: {
      control: "text",
      description: "Значение текстового поля",
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
    }
  },
  args: {
    color: "",
    variant: "outlined",
    density: "default",
    label: "Базовое текстовое поле",
    placeholder: "Введите текст",
    modelValue: "",
    disabled: false,
    readonly: false,
    error: false
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
              v-model="value"
              :color="args.color"
              :variant="args.variant"
              :density="args.density"
              :label="args.label"
              :placeholder="args.placeholder"
              :disabled="args.disabled"
              :readonly="args.readonly"
              :error="args.error"
            ></v-text-field>
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

export const Filled = {
  args: {
    variant: "filled"
  }
};

export const WithError = {
  args: {
    error: true
  }
};

export const Disabled = {
  args: {
    disabled: true
  }
};