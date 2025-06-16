import { h } from "vue";
import { setup } from "@storybook/vue3-vite";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

const pinia = createPinia();

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
          accent: "#FF4081",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
      dark: {
        colors: {
          primary: "#2196F3",
          secondary: "#424242",
          accent: "#FF4081",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
  defaults: {
    VBtn: {
      variant: "elevated",
      ripple: true,
    },
    VCard: {
      elevation: 2,
    },
    VSheet: {
      elevation: 0,
    },
  },
});

setup((app) => {
  app.use(vuetify);
  app.use(router);
  app.use(pinia);
});

export const withVuetify = (story, context) => {
  const wrapped = story(context);

  return () => {
    return h("v-app", {}, [h("v-main", {}, [h(wrapped)])]);
  };
};

export const decorators = [
  (story) => {
    return {
      vuetify,
      setup() {
        return { story };
      },
      template: `<v-app><story /></v-app>`
    };
  }
];
