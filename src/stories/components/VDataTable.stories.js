/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/VDataTable",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    theme: {
      control: "text",
      description: "Применяет указанную тему к таблице данных",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
      description: "Регулирует плотность таблицы данных",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "default" }
      }
    },
    hover: {
      control: "boolean",
      description: "Добавляет эффект наведения на строки таблицы",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    fixedHeader: {
      control: "boolean",
      description: "Фиксирует заголовок таблицы при прокрутке",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
      }
    },
    height: {
      control: ["text", "number"],
      description: "Устанавливает высоту таблицы",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    
    // Данные
    items: {
      control: "object",
      description: "Массив элементов для отображения в таблице",
      table: {
        category: "Данные",
        defaultValue: { summary: "[]" }
      }
    },
    headers: {
      control: "object",
      description: "Массив заголовков для колонок таблицы",
      table: {
        category: "Данные",
        defaultValue: { summary: "[]" }
      }
    },
    itemValue: {
      control: "text",
      description: "Свойство для уникального идентификатора элемента",
      table: {
        category: "Данные",
        defaultValue: { summary: "id" }
      }
    },
    itemSelectable: {
      control: "text",
      description: "Свойство, определяющее, может ли элемент быть выбран",
      table: {
        category: "Данные",
        defaultValue: { summary: "undefined" }
      }
    },
    returnObject: {
      control: "boolean",
      description: "Возвращает полный объект элемента вместо значения",
      table: {
        category: "Данные",
        defaultValue: { summary: false }
      }
    },
    
    // Выбор
    showSelect: {
      control: "boolean",
      description: "Показывает колонку с чекбоксами для выбора строк",
      table: {
        category: "Выбор",
        defaultValue: { summary: false }
      }
    },
    selectStrategy: {
      control: "select",
      options: ["single", "page", "all"],
      description: "Стратегия выбора элементов",
      table: {
        category: "Выбор",
        defaultValue: { summary: "page" }
      }
    },
    modelValue: {
      control: "object",
      description: "Массив выбранных элементов",
      table: {
        category: "Выбор",
        defaultValue: { summary: "[]" }
      }
    },
    
    // Сортировка
    sortBy: {
      control: "object",
      description: "Массив или объект для сортировки данных",
      table: {
        category: "Сортировка",
        defaultValue: { summary: "[]" }
      }
    },
    multiSort: {
      control: "boolean",
      description: "Разрешает сортировку по нескольким колонкам",
      table: {
        category: "Сортировка",
        defaultValue: { summary: false }
      }
    },
    
    // Пагинация
    page: {
      control: "number",
      description: "Текущая страница",
      table: {
        category: "Пагинация",
        defaultValue: { summary: 1 }
      }
    },
    itemsPerPage: {
      control: "number",
      description: "Количество элементов на странице",
      table: {
        category: "Пагинация",
        defaultValue: { summary: 10 }
      }
    },
    
    // Состояние
    loading: {
      control: "boolean",
      description: "Отображает индикатор загрузки",
      table: {
        category: "Состояние",
        defaultValue: { summary: false }
      }
    },
    loadingText: {
      control: "text",
      description: "Текст, отображаемый при загрузке",
      table: {
        category: "Состояние",
        defaultValue: { summary: "$vuetify.dataTable.loading" }
      }
    },
    noDataText: {
      control: "text",
      description: "Текст, отображаемый при отсутствии данных",
      table: {
        category: "Состояние",
        defaultValue: { summary: "$vuetify.noDataText" }
      }
    },
  },
  args: {
    theme: "",
    density: "default",
    hover: false,
    fixedHeader: false,
    height: "",
    items: [
      { name: "Иван", surname: "Иванов", age: 25, id: 1 },
      { name: "Петр", surname: "Петров", age: 30, id: 2 },
      { name: "Анна", surname: "Сидорова", age: 28, id: 3 },
      { name: "Мария", surname: "Кузнецова", age: 22, id: 4 },
      { name: "Алексей", surname: "Смирнов", age: 35, id: 5 },
    ],
    headers: [
      { title: "Имя", key: "name" },
      { title: "Фамилия", key: "surname" },
      { title: "Возраст", key: "age" },
    ],
    itemValue: "id",
    itemSelectable: "",
    returnObject: false,
    showSelect: false,
    selectStrategy: "page",
    modelValue: [],
    sortBy: [],
    multiSort: false,
    page: 1,
    itemsPerPage: 10,
    loading: false,
    loadingText: "Загрузка...",
    noDataText: "Нет данных"
  },
  render: (args) => ({
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-data-table
              v-bind="args"
              v-model="selected"
              :headers="args.headers"
              :items="args.items"
              :item-value="args.itemValue"
              :item-selectable="args.itemSelectable"
              :return-object="args.returnObject"
              :show-select="args.showSelect"
              :select-strategy="args.selectStrategy"
              :sort-by="args.sortBy"
              :multi-sort="args.multiSort"
              :page="args.page"
              :items-per-page="args.itemsPerPage"
              :loading="args.loading"
              :loading-text="args.loadingText"
              :no-data-text="args.noDataText"
              :fixed-header="args.fixedHeader"
              :height="args.height"
              :hover="args.hover"
              :density="args.density"
              :theme="args.theme"
            ></v-data-table>
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

export const WithSelection = {
  args: {
    showSelect: true
  }
};

export const Dense = {
  args: {
    density: "compact"
  }
};

export const WithHover = {
  args: {
    hover: true
  }
};

export const FixedHeader = {
  args: {
    fixedHeader: true,
    height: 300
  }
};

export const Loading = {
  args: {
    loading: true
  }
};

export const WithSorting = {
  args: {
    sortBy: [{ key: "age", order: "desc" }]
  }
};

export const CustomTheme = {
  args: {
    theme: "dark"
  }
};