<template>
  <v-app class="app">
    <v-card class="ma-3" style="overflow: hidden">
      <template v-slot:title>
        <v-text title>Media</v-text>
      </template>

      <media-search @input="onInput" />
    </v-card>

    <v-flex class="px-3">
      <media-item v-for="item in list" :key="item" :value="item" />
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
