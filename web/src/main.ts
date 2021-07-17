import { createApp } from 'vue'
import { framework } from '@mfro/vue-ui';
import { assert } from '@mfro/ts-common/assert';

import App from './main.vue'
import { initData } from './modules/data';

const currentUrl = new URL(location.href);
const remote = currentUrl.searchParams.get('remote');
assert(remote != null, 'remote');

const context = initData(remote);

const app = createApp(App);
app.use(framework);
app.provide('context', context);
app.mount('#app')
