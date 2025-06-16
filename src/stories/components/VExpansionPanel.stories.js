/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/VExpansionPanel",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "default"],
      description: "Применяет указанный цвет к панели",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    variant: {
      control: "select",
      options: ["default", "accordion", "inset", "popout"],
      description: "Вариант отображения панели",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "default" }
      }
    },
    elevation: {
      control: { type: "number", min: 0, max: 24 },
      description: "Уровень тени панели (0-24)",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    rounded: {
      control: "select",
      options: [false, true, "0", "sm", "md", "lg", "xl", "pill"],
      description: "Применяет скругление углов",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    theme: {
      control: "text",
      description: "Применяет указанную тему к компоненту",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    
    // Содержимое
    title: {
      control: "text",
      description: "Заголовок панели",
      table: {
        category: "Содержимое"
      }
    },
    text: {
      control: "text",
      description: "Текст содержимого панели",
      table: {
        category: "Содержимое"
      }
    },
    icon: {
      control: "text",
      description: "Иконка для заголовка панели",
      table: {
        category: "Содержимое"
      }
    },
    
    // Состояние
    modelValue: {
      control: "array",
      description: "Массив открытых панелей",
      table: {
        category: "Состояние",
        defaultValue: { summary: "[]" }
      }
    },
    disabled: {
      control: "boolean",
      description: "Отключает панель",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    readonly: {
      control: "boolean",
      description: "Устанавливает панель только для чтения",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    
    // Макет
    multiple: {
      control: "boolean",
      description: "Позволяет открывать несколько панелей одновременно",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
    mandatory: {
      control: "boolean",
      description: "Требует, чтобы хотя бы одна панель была активна",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
    max: {
      control: "number",
      description: "Максимальное количество открытых панелей",
      table: {
        category: "Макет",
        defaultValue: { summary: "undefined" }
      }
    },
    
    // Дополнительно
    eager: {
      control: "boolean",
      description: "Принудительно отрисовывает содержимое при инициализации",
      table: {
        category: "Дополнительно",
        defaultValue: { summary: false }
      }
    },
  },
  args: {
    color: "primary",
    variant: "default",
    elevation: undefined,
    rounded: undefined,
    theme: undefined,
    title: "Заголовок панели",
    text: "Содержимое панели расширения",
    icon: "",
    modelValue: [0],
    disabled: false,
    readonly: false,
    multiple: false,
    mandatory: false,
    max: undefined,
    eager: false
  },
  render: (args) => ({
    setup() {
      const panel = ref(args.modelValue);
      return { args, panel };
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-expansion-panels
              v-model="panel"
              :multiple="args.multiple"
              :mandatory="args.mandatory"
              :max="args.max"
              :color="args.color"
              :variant="args.variant"
              :elevation="args.elevation"
              :rounded="args.rounded"
              :theme="args.theme"
              :disabled="args.disabled"
              :readonly="args.readonly"
              :eager="args.eager"
            >
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <template v-if="args.icon" #prepend>
                    <v-icon>{{ args.icon }}</v-icon>
                  </template>
                  {{ args.title }}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  {{ args.text }}
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title>Панель 2</v-expansion-panel-title>
                <v-expansion-panel-text>
                  Содержимое второй панели
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title>Панель 3</v-expansion-panel-title>
                <v-expansion-panel-text>
                  Содержимое третьей панели
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-container>
        </v-main>
      </v-app>
    `
  })
};

export default meta;

export const Default = {
  args: {
    title: "Нажмите, чтобы развернуть",
    text: "Здесь находится содержимое панели расширения. Вы можете разместить здесь любой контент."
  }
};

export const Accordion = {
  args: {
    variant: "accordion",
    title: "Аккордеон",
    text: "Вариант отображения в виде аккордеона"
  }
};

export const Inset = {
  args: {
    variant: "inset",
    title: "Вложенная панель",
    text: "Вариант отображения с отступом"
  }
};

export const Popout = {
  args: {
    variant: "popout",
    title: "Выступающая панель",
    text: "Вариант отображения с выступом"
  }
};

export const WithIcon = {
  args: {
    title: "С иконкой",
    text: "Панель с иконкой в заголовке",
    icon: "mdi-star"
  }
};

export const Multiple = {
  args: {
    title: "Множественный выбор",
    text: "Можно открыть несколько панелей одновременно",
    multiple: true,
    modelValue: [0, 1]
  }
};

export const Disabled = {
  args: {
    title: "Отключенная панель",
    text: "Эту панель нельзя открыть",
    disabled: true
  }
};