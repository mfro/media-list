<template>
  <v-card class="pa-3 ma-3">
    <v-text-field v-model="input" label="user name" class="mt-0" />

    <v-flex justify-end class="mt-3">
      <v-button color="primary" @click="submit()">submit</v-button>
    </v-flex>
  </v-card>
</template>

<script>
import { inject, shallowRef } from 'vue'
export default {
  name: 'user-login',

  setup(props) {
    const input = shallowRef('');
    const context = inject('context');

    return {
      input,
      submit() {
        context.user = input.value;

        const url = new URL(location.href);
        url.searchParams.set('user', input.value);

        history.replaceState(null, document.title, url.toString());
      },
    };
  },
}
</script>
