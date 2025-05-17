/** @type { import('@storybook/vue3').Meta } */
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
    sliderColor: {
      control: "text",
      description: "Применяет цвет к ползунку активной вкладки",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    
    // Макет
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Выравнивание вкладок",
      table: {
        category: "Макет",
        defaultValue: { summary: "start" }
      }
    },
    fixedTabs: {
      control: "boolean",
      description: "Делает ширину вкладок фиксированной",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
    grow: {
      control: "boolean",
      description: "Заставляет вкладки занимать все доступное пространство",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
      description: "Регулирует плотность вкладок",
      table: {
        category: "Макет",
        defaultValue: { summary: "default" }
      }
    },
    height: {
      control: { type: "range", min: 0, max: 128, step: 4 },
      description: "Устанавливает высоту вкладок",
      table: {
        category: "Макет",
        defaultValue: { summary: 48 }
      }
    },
    
    // Поведение
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Устанавливает направление вкладок",
      table: {
        category: "Поведение",
        defaultValue: { summary: "horizontal" }
      }
    },
    centerActive: {
      control: "boolean",
      description: "Центрирует активную вкладку",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    hideSlider: {
      control: "boolean",
      description: "Скрывает ползунок активной вкладки",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    modelValue: {
      control: "text",
      description: "Текущая активная вкладка",
      table: {
        category: "Поведение"
      }
    },
    
    // Опции
    showArrows: {
      control: "select",
      options: [false, true, "always", "desktop", "mobile"],
      description: "Показывает стрелки для прокрутки вкладок",
      table: {
        category: "Опции",
        defaultValue: { summary: false }
      }
    },
    tabCount: {
      control: { type: "range", min: 1, max: 10, step: 1 },
      description: "Количество вкладок",
      table: {
        category: "Опции"
      }
    },
    withIcons: {
      control: "boolean",
      description: "Добавляет иконки к вкладкам",
      table: {
        category: "Опции",
        defaultValue: { summary: false }
      }
    },
    withContent: {
      control: "boolean",
      description: "Показывает содержимое вкладок",
      table: {
        category: "Опции",
        defaultValue: { summary: true }
      }
    },
  },
  args: {
    color: "primary",
    bgColor: "",
    sliderColor: "",
    align: "start",
    fixedTabs: false,
    grow: false,
    density: "default",
    height: 48,
    direction: "horizontal",
    centerActive: false,
    hideSlider: false,
    modelValue: 0,
    showArrows: false,
    tabCount: 5,
    withIcons: false,
    withContent: true
  },
  render: (args) => ({
    setup() {
      const tab = ref(args.modelValue);
      
      const getTabs = () => {
        const tabs = [];
        const icons = ["mdi-home", "mdi-account", "mdi-bell", "mdi-cog", "mdi-heart", 
                      "mdi-camera", "mdi-map", "mdi-clock", "mdi-cloud", "mdi-play"];
        
        for (let i = 0; i < args.tabCount; i++) {
          tabs.push({
            title: `Вкладка ${i + 1}`,
            icon: icons[i],
            content: `Содержимое вкладки ${i + 1}. Это пример текста, который можно увидеть в панели вкладок.`
          });
        }
        
        return tabs;
      };
      
      return { args, tab, getTabs };
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-card>
              <v-tabs
                v-bind="args"
                v-model="tab"
                :direction="args.direction"
                :align="args.align"
                :fixed-tabs="args.fixedTabs"
                :grow="args.grow"
                :center-active="args.centerActive"
                :height="args.height"
                :hide-slider="args.hideSlider"
                :show-arrows="args.showArrows"
              >
                <v-tab
                  v-for="(item, index) in getTabs()"
                  :key="index"
                  :value="index"
                >
                  <v-icon v-if="args.withIcons" :icon="item.icon" class="mr-2"></v-icon>
                  {{ item.title }}
                </v-tab>
              </v-tabs>
              
              <v-window v-if="args.withContent" v-model="tab">
                <v-window-item
                  v-for="(item, index) in getTabs()"
                  :key="index"
                  :value="index"
                >
                  <v-card-text>
                    {{ item.content }}
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
  args: {
    tabCount: 5
  }
};

export const WithIcons = {
  args: {
    withIcons: true,
    tabCount: 5
  }
};

export const Centered = {
  args: {
    align: "center",
    tabCount: 3
  }
};

export const Growing = {
  args: {
    grow: true,
    tabCount: 4
  }
};

export const Vertical = {
  args: {
    direction: "vertical",
    tabCount: 5
  }
};

export const Sliding = {
  args: {
    tabCount: 10,
    showArrows: true
  }
};

export const FixedWidth = {
  args: {
    fixedTabs: true,
    tabCount: 4
  }
};

export const DifferentColors = {
  args: {
    color: "success",
    sliderColor: "warning",
    tabCount: 3
  }
};

export const Dense = {
  args: {
    density: "compact",
    tabCount: 5
  }
}; 