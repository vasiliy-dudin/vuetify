/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/VTabs",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "default"],
      description: "Применяет указанный цвет к вкладкам",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    bgColor: {
      control: "text",
      description: "Применяет фоновый цвет к вкладкам",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
      description: "Регулирует плотность вкладок",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "default" }
      }
    },
    height: {
      control: ["text", "number"],
      description: "Устанавливает высоту вкладок",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    alignTabs: {
      control: "select",
      options: ["start", "center", "end", "title"],
      description: "Выравнивание вкладок",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "start" }
      }
    },
    fixedTabs: {
      control: "boolean",
      description: "Фиксированная ширина вкладок",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    grow: {
      control: "boolean",
      description: "Вкладки занимают всю доступную ширину",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    hideSlider: {
      control: "boolean",
      description: "Скрывает ползунок активной вкладки",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    sliderColor: {
      control: "text",
      description: "Цвет ползунка активной вкладки",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    
    // Поведение
    modelValue: {
      control: ["text", "number"],
      description: "Значение активной вкладки",
      table: {
        category: "Поведение",
        defaultValue: { summary: "undefined" }
      }
    },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Направление вкладок",
      table: {
        category: "Поведение",
        defaultValue: { summary: "horizontal" }
      }
    },
    nextIcon: {
      control: "text",
      description: "Иконка для кнопки следующей вкладки",
      table: {
        category: "Поведение",
        defaultValue: { summary: "$next" }
      }
    },
    prevIcon: {
      control: "text",
      description: "Иконка для кнопки предыдущей вкладки",
      table: {
        category: "Поведение",
        defaultValue: { summary: "$prev" }
      }
    },
    showArrows: {
      control: ["boolean", "string"],
      description: "Показывает стрелки для прокрутки вкладок",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    
    // Состояние
    disabled: {
      control: "boolean",
      description: "Отключает вкладки",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    mandatory: {
      control: "boolean",
      description: "Требует выбора вкладки",
      table: {
        category: "Состояние",
        defaultValue: { summary: true }
      }
    },
    
    // Макет
    centered: {
      control: "boolean",
      description: "Центрирует вкладки",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
    stacked: {
      control: "boolean",
      description: "Отображает иконки и текст в столбец",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
  },
  args: {
    color: "",
    bgColor: "",
    density: "default",
    height: "",
    alignTabs: "start",
    fixedTabs: false,
    grow: false,
    hideSlider: false,
    sliderColor: "",
    modelValue: 0,
    direction: "horizontal",
    nextIcon: "$next",
    prevIcon: "$prev",
    showArrows: false,
    disabled: false,
    mandatory: true,
    centered: false,
    stacked: false
  },
  render: (args) => ({
    setup() {
      const tab = ref(args.modelValue);
      return { args, tab };
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-card>
              <v-tabs
                v-model="tab"
                :color="args.color"
                :bg-color="args.bgColor"
                :density="args.density"
                :height="args.height"
                :align-tabs="args.alignTabs"
                :fixed-tabs="args.fixedTabs"
                :grow="args.grow"
                :hide-slider="args.hideSlider"
                :slider-color="args.sliderColor"
                :direction="args.direction"
                :next-icon="args.nextIcon"
                :prev-icon="args.prevIcon"
                :show-arrows="args.showArrows"
                :disabled="args.disabled"
                :mandatory="args.mandatory"
                :centered="args.centered"
                :stacked="args.stacked"
              >
                <v-tab value="0">Вкладка 1</v-tab>
                <v-tab value="1">Вкладка 2</v-tab>
                <v-tab value="2">Вкладка 3</v-tab>
              </v-tabs>
              
              <v-window v-model="tab">
                <v-window-item value="0">
                  <v-card-text>
                    <p>Содержимое первой вкладки</p>
                    <p>Здесь может быть любой контент.</p>
                  </v-card-text>
                </v-window-item>
                
                <v-window-item value="1">
                  <v-card-text>
                    <p>Содержимое второй вкладки</p>
                    <p>Здесь может быть любой контент.</p>
                  </v-card-text>
                </v-window-item>
                
                <v-window-item value="2">
                  <v-card-text>
                    <p>Содержимое третьей вкладки</p>
                    <p>Здесь может быть любой контент.</p>
                  </v-card-text>
                </v-window-item>
              </v-window>
            </v-card>
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

export const Colored = {
  args: {
    color: "primary"
  }
};

export const Centered = {
  args: {
    centered: true
  }
};

export const Growing = {
  args: {
    grow: true
  }
};

export const WithArrows = {
  args: {
    showArrows: true
  }
};

export const Vertical = {
  args: {
    direction: "vertical",
    height: 300
  }
};

export const Stacked = {
  args: {
    stacked: true
  }
};