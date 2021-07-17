<template>
  <v-text-field placeholder="search" v-model="query" class="mt-0" />

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
