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
        @click="open(item)"
      />
    </v-flex>

    <v-dialog :modelValue="opened != null" @update:modelValue="opened = null">
      <v-card style="overflow: hidden">
        <media-details
          :value="opened"
          @close="opened = null"
          @watch="onWatch(opened), (opened = null)"
        />
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script >
import { inject, shallowRef } from 'vue';

import MediaSearch from './ui/media-search';
import MediaItem from './ui/media-item';
import MediaDetails from './ui/media-details';

export default {
  name: 'media-list',
  components: {
    MediaSearch,
    MediaItem,
    MediaDetails,
  },

  setup(props) {
    const context = inject('context');
    const opened = shallowRef(null);

    return {
      opened,
      context,

      onInput(v) {
        context.data.mutate('ADD_MOVIE', v);
      },

      onWatch(v) {
        const index = context.data.state.movies.indexOf(v);
        context.data.mutate('WATCH_MOVIE', index);
      },

      open(movie) {
        opened.value = movie;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.app {
  width: 100vw !important;
  min-height: 100vh;
  overflow: hidden;
}
</style>

<style lang="scss">
body, .app {
  background-color: #e0e0e0;
}
</style>
