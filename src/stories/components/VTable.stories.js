/** @type { import('@storybook/vue3-vite').Meta } */
const meta = {
  title: "Components/VTable",
  tags: ["autodocs"],
  argTypes: {
    // Внешний вид
    theme: {
      control: "text",
      description: "Применяет указанную тему к таблице",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "undefined" }
      }
    },
    density: {
      control: "select",
      options: ["default", "comfortable", "compact"],
      description: "Регулирует плотность таблицы",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: "default" }
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
    fixedHeader: {
      control: "boolean",
      description: "Фиксирует заголовок таблицы при прокрутке",
      table: {
        category: "Внешний вид",
        defaultValue: { summary: false }
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
    
    // Макет
    width: {
      control: ["text", "number"],
      description: "Устанавливает ширину таблицы",
      table: {
        category: "Макет",
        defaultValue: { summary: "undefined" }
      }
    },
    tag: {
      control: "text",
      description: "Устанавливает HTML-тег для таблицы",
      table: {
        category: "Макет",
        defaultValue: { summary: "table" }
      }
    },
  },
  args: {
    theme: "",
    density: "default",
    height: "",
    fixedHeader: false,
    hover: false,
    width: "",
    tag: "table"
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    template: `
      <v-app>
        <v-main>
          <v-container>
            <v-table
              v-bind="args"
              :theme="args.theme"
              :density="args.density"
              :height="args.height"
              :fixed-header="args.fixedHeader"
              :hover="args.hover"
              :width="args.width"
              :tag="args.tag"
            >
              <thead>
                <tr>
                  <th class="text-left">Имя</th>
                  <th class="text-left">Фамилия</th>
                  <th class="text-left">Возраст</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in 5" :key="item">
                  <td>Иван</td>
                  <td>Иванов</td>
                  <td>{{ 20 + item }}</td>
                </tr>
              </tbody>
            </v-table>
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

export const CustomTheme = {
  args: {
    theme: "dark"
  }
};