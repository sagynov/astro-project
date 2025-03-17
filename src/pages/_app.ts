import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

export default (app: App) => {
  app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
  });
};

