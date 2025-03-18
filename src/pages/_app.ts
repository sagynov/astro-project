import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';

export default (app: App) => {
  app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
  });
  app.use(ToastService)
};

