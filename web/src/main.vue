<template>
  <v-app class="app">
    <v-card class="ma-1" style="overflow: hidden">
      <media-search @input="onInput" />
    </v-card>

    <v-flex align-start class="pr-1" style="flex-wrap:wrap">
      <media-item v-for="item in list" :key="item" :value="item" class="ml-1 mb-1" />
    </v-flex>
  </v-app>
</template>

<script >
import { shallowReactive, shallowRef, watch } from 'vue';

import MediaSearch from './ui/media-search';
import MediaItem from './ui/media-item';

export default {
  name: 'media-list',
  components: {
    MediaSearch,
    MediaItem,
  },

  setup(props) {
    const list = shallowReactive([]);

    return {
      list,

      onInput(v) {
        console.log(v);
        list.push(v);
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
