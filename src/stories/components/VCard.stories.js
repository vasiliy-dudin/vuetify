/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/VCard",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "default"],
      description: "Применяет указанный цвет к карточке",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    variant: {
      control: "select",
      options: ["flat", "elevated", "tonal", "outlined", "text", "plain"],
      description: "Применяет различные стили карточки",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "elevated" }
      }
    },
    elevation: {
      control: { type: "range", min: 0, max: 24, step: 1 },
      description: "Устанавливает высоту тени карточки",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: 2 }
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
    border: {
      control: "select",
      options: [false, true, "top", "end", "bottom", "start", "top start", "top end", "bottom start", "bottom end"],
      description: "Добавляет границу к компоненту",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    
    // Содержимое
    title: {
      control: "text",
      description: "Заголовок карточки",
      table: {
        category: "Содержимое"
      }
    },
    subtitle: {
      control: "text",
      description: "Подзаголовок карточки",
      table: {
        category: "Содержимое"
      }
    },
    text: {
      control: "text",
      description: "Основной текст карточки",
      table: {
        category: "Содержимое"
      }
    },
    image: {
      control: "text",
      description: "URL изображения для карточки",
      table: {
        category: "Содержимое"
      }
    },
    
    // Макет
    width: {
      control: { type: "range", min: 100, max: 800, step: 10 },
      description: "Ширина карточки в пикселях",
      table: {
        category: "Макет",
        defaultValue: { summary: 'auto' }
      }
    },
    maxWidth: {
      control: { type: "range", min: 100, max: 800, step: 10 },
      description: "Максимальная ширина карточки в пикселях",
      table: {
        category: "Макет",
        defaultValue: { summary: 'auto' }
      }
    },
    flat: {
      control: "boolean",
      description: "Убирает тень карточки",
      table: {
        category: "Макет",
        defaultValue: { summary: false }
      }
    },
    
    // Опции
    loading: {
      control: "boolean",
      description: "Отображает состояние загрузки",
      table: {
        category: "Опции",
        defaultValue: { summary: false }
      }
    },
    disabled: {
      control: "boolean",
      description: "Отключает карточку",
      table: {
        category: "Опции",
        defaultValue: { summary: false }
      }
    },
    hover: {
      control: "boolean",
      description: "Применяет эффект при наведении",
      table: {
        category: "Опции",
        defaultValue: { summary: false }
      }
    },
    link: {
      control: "boolean",
      description: "Делает карточку ссылкой (добавляет cursor: pointer)",
      table: {
        category: "Опции",
        defaultValue: { summary: false }
      }
    },
    ripple: {
      control: "boolean",
      description: "Включает/отключает эффект волны",
      table: {
        category: "Опции",
        defaultValue: { summary: true }
      }
    },
    
    // Отображение элементов
    showActions: {
      control: "boolean",
      description: "Включает/отключает отображение действий карточки",
      table: {
        category: "Отображение элементов",
        defaultValue: { summary: false }
      }
    },
  },
  args: {
    color: "",
    variant: "elevated",
    elevation: 2,
    rounded: false,
    border: false,
    title: "Заголовок карточки",
    subtitle: "Подзаголовок карточки",
    text: "Это пример текста карточки. Здесь может быть размещена любая информация.",
    image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    width: 400,
    maxWidth: 400,
    flat: false,
    loading: false,
    disabled: false,
    hover: false,
    link: false,
    ripple: true,
    showActions: true
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    template: `
      <v-app>
        <v-main>
          <v-container class="d-flex justify-center">
            <v-card
              v-bind="args"
              :width="args.width"
              :max-width="args.maxWidth"
              :flat="args.flat"
              :loading="args.loading"
              :disabled="args.disabled"
              :hover="args.hover"
              :link="args.link"
              :ripple="args.ripple"
            >
              <v-img
                v-if="args.image"
                :src="args.image"
                height="200px"
                cover
              ></v-img>
              
              <v-card-title>{{ args.title }}</v-card-title>
              
              <v-card-subtitle>{{ args.subtitle }}</v-card-subtitle>
              
              <v-card-text>{{ args.text }}</v-card-text>
              
              <v-card-actions v-if="args.showActions">
                <v-btn color="primary" variant="text">Отмена</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary">Подтвердить</v-btn>
              </v-card-actions>
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
    title: "Карточка по умолчанию",
    subtitle: "С изображением и действиями",
  }
};

export const NoImage = {
  args: {
    title: "Карточка без изображения",
    image: "",
  }
};

export const Outlined = {
  args: {
    variant: "outlined",
    title: "Карточка с контуром",
  }
};

export const Colored = {
  args: {
    color: "primary",
    title: "Цветная карточка",
    subtitle: "С цветом primary",
  }
};

export const Loading = {
  args: {
    loading: true,
    title: "Загрузка карточки",
  }
};

export const Hoverable = {
  args: {
    hover: true,
    title: "Интерактивная карточка",
    subtitle: "Наведите курсор чтобы увидеть эффект",
  }
};

export const NoActions = {
  args: {
    showActions: false,
    title: "Карточка без действий",
  }
}; 