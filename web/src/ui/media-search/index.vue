<template>
  <v-text-field v-model="query" />

  <v-flex align-start class="py-2 pr-2" style="overflow-x: scroll">
    <search-result
      v-for="result in results"
      :key="result"
      :value="result"
      class="ml-2"
      @click="$emit('input', result)"
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

  setup(props) {
    const query = shallowRef('');
    const results = shallowRef([]);

    watch(query, async value => {
      const rsp = await suggestions(value);
      if (value != query.value) return;
      console.log(`${value}:`, rsp);
      results.value = rsp.filter(v => v.q == 'feature');
    });

    return {
      query, results,
    };
  },
};
</script>
