/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/Basic/VButton",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "default"],
      description: "Применяет указанный цвет к базовой кнопке",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    variant: {
      control: "select",
      options: ["elevated", "flat", "tonal", "outlined", "text", "plain"],
      description: "Применяет различные стили базовой кнопки",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "elevated" }
      }
    },
    size: {
      control: "select",
      options: ["x-small", "small", "default", "large", "x-large"],
      description: "Устанавливает размер базовой кнопки",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "default" }
      }
    },
    block: {
      control: "boolean",
      description: "Растягивает кнопку на всю ширину контейнера",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    
    // Содержимое
    text: {
      control: "text",
      description: "Текст базовой кнопки",
      table: {
        category: "Содержимое"
      }
    }
  },
  args: {
    color: "primary",
    variant: "elevated",
    size: "default",
    block: false,
    text: "Базовая кнопка"
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
              :block="args.block"
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

export const Flat = {
  args: {
    variant: "flat"
  }
};

export const Block = {
  args: {
    block: true
  }
};

export const Large = {
  args: {
    size: "large"
  }
};