import { createApp } from 'vue'
import { framework } from '@mfro/vue-ui';
import App from './main.vue'

const app = createApp(App);
app.use(framework);
app.mount('#app')

const ws = new WebSocket('ws://box:8081/95afb6a66c836cff90608b3917252fd20add4a8e815a13a8e688d4b07616f01a');
