/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/VDialog",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    width: {
      control: ["text", "number"],
      description: "Устанавливает ширину диалога",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "auto" }
      }
    },
    height: {
      control: ["text", "number"],
      description: "Устанавливает высоту диалога",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "auto" }
      }
    },
    maxWidth: {
      control: ["text", "number"],
      description: "Устанавливает максимальную ширину диалога",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "none" }
      }
    },
    maxHeight: {
      control: ["text", "number"],
      description: "Устанавливает максимальную высоту диалога",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "none" }
      }
    },
    fullscreen: {
      control: "boolean",
      description: "Отображает диалог в полноэкранном режиме",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    scrollable: {
      control: "boolean",
      description: "Добавляет прокрутку для содержимого диалога",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    noClickAnimation: {
      control: "boolean",
      description: "Отключает анимацию при клике вне диалога",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    
    // Поведение
    modelValue: {
      control: "boolean",
      description: "Контролирует видимость диалога",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    persistent: {
      control: "boolean",
      description: "Предотвращает закрытие диалога при клике вне его области",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    closeOnBack: {
      control: "boolean",
      description: "Закрывает диалог при нажатии кнопки 'назад'",
      table: {
        category: "Поведение",
        defaultValue: { summary: true }
      }
    },
    scrim: {
      control: ["boolean", "string"],
      description: "Настраивает затемнение фона за диалогом",
      table: {
        category: "Поведение",
        defaultValue: { summary: true }
      }
    },
    retainFocus: {
      control: "boolean",
      description: "Автоматически возвращает фокус на элемент, который был активен до открытия диалога",
      table: {
        category: "Поведение",
        defaultValue: { summary: true }
      }
    },
    noClickOutside: {
      control: "boolean",
      description: "Отключает обработку кликов вне диалога",
      table: {
        category: "Поведение",
        defaultValue: { summary: false }
      }
    },
    
    // Переходы
    transition: {
      control: "text",
      description: "Устанавливает переход для диалога",
      table: {
        category: "Переходы",
        defaultValue: { summary: "dialog-transition" }
      }
    },
    
    // Позиционирование
    location: {
      control: "select",
      options: ["center", "top", "bottom", "left", "right"],
      description: "Устанавливает расположение диалога",
      table: {
        category: "Позиционирование",
        defaultValue: { summary: "center" }
      }
    },
    origin: {
      control: "text",
      description: "Устанавливает точку начала анимации",
      table: {
        category: "Позиционирование",
        defaultValue: { summary: "center center" }
      }
    },
  },
  args: {
    width: "auto",
    height: "auto",
    maxWidth: 600,
    maxHeight: "auto",
    fullscreen: false,
    scrollable: false,
    noClickAnimation: false,
    modelValue: false,
    persistent: false,
    closeOnBack: true,
    scrim: true,
    retainFocus: true,
    noClickOutside: false,
    transition: "dialog-transition",
    location: "center",
    origin: "center center"
  },
  render: (args) => ({
    setup() {
      const dialog = ref(args.modelValue);
      return { args, dialog };
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-btn @click="dialog = true" color="primary">Открыть диалог</v-btn>
            
            <v-dialog
              v-model="dialog"
              :width="args.width"
              :height="args.height"
              :max-width="args.maxWidth"
              :max-height="args.maxHeight"
              :fullscreen="args.fullscreen"
              :scrollable="args.scrollable"
              :no-click-animation="args.noClickAnimation"
              :persistent="args.persistent"
              :close-on-back="args.closeOnBack"
              :scrim="args.scrim"
              :retain-focus="args.retainFocus"
              :no-click-outside="args.noClickOutside"
              :transition="args.transition"
              :location="args.location"
              :origin="args.origin"
            >
              <v-card>
                <v-card-title>Заголовок диалога</v-card-title>
                <v-card-text>
                  <p>Это пример содержимого диалогового окна.</p>
                  <p>Вы можете настроить различные параметры диалога с помощью элементов управления.</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="dialog = false">Закрыть</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-container>
        </v-main>
      </v-app>
    `
  })
};

export default meta;

export const Default = {
  args: {
    modelValue: false
  }
};

export const Persistent = {
  args: {
    persistent: true
  }
};

export const Fullscreen = {
  args: {
    fullscreen: true
  }
};

export const Scrollable = {
  args: {
    scrollable: true,
    maxHeight: 300
  }
};

export const CustomTransition = {
  args: {
    transition: "slide-y-transition"
  }
};

export const CustomPosition = {
  args: {
    location: "top"
  }
};