<template>
  <v-app class="app">
    <v-card class="ma-1" style="overflow: hidden">
      <media-search @input="onInput" />
    </v-card>

    <v-flex
      align-start
      class="pr-1"
      style="flex-wrap: wrap"
      v-if="context.data"
    >
      <media-item
        v-for="item in context.data.state.movies"
        :key="item"
        :value="item"
        class="ml-1 mb-1"
        @delete="onDelete"
      />
    </v-flex>
  </v-app>
</template>

<script >
import { inject } from 'vue';

import MediaSearch from './ui/media-search';
import MediaItem from './ui/media-item';

export default {
  name: 'media-list',
  components: {
    MediaSearch,
    MediaItem,
  },

  setup(props) {
    const context = inject('context');

    return {
      context,

      onInput(v) {
        context.data.mutate('ADD_MOVIE', v);
      },

      onDelete(v) {
        const index = context.data.state.movies.indexOf(v);
        context.data.mutate('DEL_MOVIE', index);
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.app {
  width: 100vw;
  min-height: 100vh;
}
</style>
