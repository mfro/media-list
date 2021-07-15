import { createApp } from 'vue'
import { framework } from '@mfro/vue-ui';
import App from './main.vue'

const app = createApp(App);
app.use(framework);
app.mount('#app')
