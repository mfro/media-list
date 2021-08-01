<template>
  <v-flex class="bar-container">
    <v-text-field
      placeholder="add movies"
      v-model="query"
      class="mt-0"
      style="flex: 1 1"
    />
    <v-button icon class="close-button" @click="query = ''">
      <v-icon>close</v-icon>
    </v-button>
  </v-flex>

  <v-flex align-start style="overflow-x: scroll">
    <search-result
      v-for="result in results"
      :key="result"
      :value="result"
      @click="onInput(result)"
    />
  </v-flex>
</template>

<script >
import { shallowRef, watch } from 'vue';
import { suggestions } from '@/modules/imdb';

import SearchResult from './search-result';

export default {
  name: 'media-search',
  components: {
    SearchResult,
  },

  emits: ['input'],

  setup(props, { emit }) {
    const query = shallowRef('');
    const results = shallowRef([]);

    watch(query, async value => {
      const rsp = await suggestions(value);
      if (value != query.value) return;

      results.value = rsp.filter(v => v.q == 'feature');
    });

    return {
      query, results,

      onInput(result) {
        query.value = '';
        emit('input', result);
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.bar-container {
  position: relative;
}

.close-button {
  position: absolute !important;
  top: 1px;
  right: 1px;
}
</style>
