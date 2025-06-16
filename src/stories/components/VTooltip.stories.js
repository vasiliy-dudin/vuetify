/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/VTooltip",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "default"],
      description: "Применяет указанный цвет к всплывающей подсказке",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    maxWidth: {
      control: ["text", "number"],
      description: "Устанавливает максимальную ширину всплывающей подсказки",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: 300 }
      }
    },
    minWidth: {
      control: ["text", "number"],
      description: "Устанавливает минимальную ширину всплывающей подсказки",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    text: {
      control: "text",
      description: "Текст всплывающей подсказки",
      table: {
        category: "Внешний вид"
      }
    },
    
    // Поведение
    modelValue: {
      control: "boolean",
      description: "Контролирует видимость всплывающей подсказки",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    openOnClick: {
      control: "boolean",
      description: "Открывает подсказку при клике на элемент",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    openOnHover: {
      control: "boolean",
      description: "Открывает подсказку при наведении на элемент",
      table: {
        category: "Поведение",
        defaultValue: { summary: true }
      }
    },
    openOnFocus: {
      control: "boolean",
      description: "Открывает подсказку при фокусе на элементе",
      table: {
        category: "Поведение",
        defaultValue: { summary: true }
      }
    },
    closeOnContentClick: {
      control: "boolean",
      description: "Закрывает подсказку при клике на её содержимое",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    closeOnBack: {
      control: "boolean",
      description: "Закрывает подсказку при нажатии кнопки 'назад'",
      table: {
        category: "Поведение",
        defaultValue: { summary: true }
      }
    },
    
    // Позиционирование
    location: {
      control: "select",
      options: ["top", "bottom", "start", "end", "left", "right"],
      description: "Устанавливает расположение всплывающей подсказки",
      table: {
        category: "Позиционирование",
        defaultValue: { summary: "bottom" }
      }
    },
    origin: {
      control: "select",
      options: ["auto", "top", "bottom", "left", "right", "center center", "top center", "bottom center"],
      description: "Устанавливает точку начала анимации",
      table: {
        category: "Позиционирование",
        defaultValue: { summary: "auto" }
      }
    },
    offset: {
      control: ["text", "number", "array"],
      description: "Смещение всплывающей подсказки относительно активатора",
      table: {
        category: "Позиционирование",
        defaultValue: { summary: 5 }
      }
    },
    
    // Переходы
    transition: {
      control: "text",
      description: "Устанавливает переход для всплывающей подсказки",
      table: {
        category: "Переходы",
        defaultValue: { summary: "scale-transition" }
      }
    },
    
    // Состояние
    disabled: {
      control: "boolean",
      description: "Отключает всплывающую подсказку",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    eager: {
      control: "boolean",
      description: "Принудительно отрисовывает компонент при инициализации",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
  },
  args: {
    color: "",
    maxWidth: 300,
    minWidth: "",
    text: "Это всплывающая подсказка",
    modelValue: false,
    openOnClick: false,
    openOnHover: true,
    openOnFocus: true,
    closeOnContentClick: false,
    closeOnBack: true,
    location: "bottom",
    origin: "auto",
    offset: 5,
    transition: "scale-transition",
    disabled: false,
    eager: false
  },
  render: (args) => ({
    setup() {
      const tooltip = ref(args.modelValue);
      return { args, tooltip };
    },
    template: `
      <v-app>
        <v-main>
          <v-container class="d-flex justify-center">
            <v-tooltip
              v-model="tooltip"
              :text="args.text"
              :color="args.color"
              :max-width="args.maxWidth"
              :min-width="args.minWidth"
              :open-on-click="args.openOnClick"
              :open-on-hover="args.openOnHover"
              :open-on-focus="args.openOnFocus"
              :close-on-content-click="args.closeOnContentClick"
              :close-on-back="args.closeOnBack"
              :location="args.location"
              :origin="args.origin"
              :offset="args.offset"
              :transition="args.transition"
              :disabled="args.disabled"
              :eager="args.eager"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  v-bind="props"
                >
                  Наведите на меня
                </v-btn>
              </template>
            </v-tooltip>
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

export const CustomColor = {
  args: {
    color: "error",
    text: "Важное предупреждение!"
  }
};

export const TopPosition = {
  args: {
    location: "top",
    text: "Подсказка сверху"
  }
};

export const ClickActivation = {
  args: {
    openOnClick: true,
    openOnHover: false,
    text: "Активируется по клику"
  }
};

export const CustomTransition = {
  args: {
    transition: "fade-transition",
    text: "С плавным появлением"
  }
};

export const LongContent = {
  args: {
    text: "Это пример всплывающей подсказки с длинным текстом. Такие подсказки могут использоваться для отображения дополнительной информации, которая не помещается в основной интерфейс.",
    maxWidth: 200
  }
};