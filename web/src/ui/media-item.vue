<template>
  <v-button tile class="button px-0" @click="$emit('click', value)">
    <v-flex class="result">
      <media-poster :value="value" :width="width" />

      <!-- <v-flex column align-start class="px-3 py-1 details">
        <v-text title>{{ value.l }}</v-text>
        <span class="my-1" />
        <v-text subtitle>{{ value.y }}</v-text>
        <span class="my-3" />
        <v-text subtitle>{{ value.s }}</v-text>

        <v-flex grow />
      </v-flex> -->
    </v-flex>
  </v-button>
</template>

<script >
import { computed, shallowRef } from 'vue';

import MediaPoster from './media-poster';

const screenWidth = shallowRef(window.innerWidth);
window.addEventListener('resize', () => screenWidth.value = window.innerWidth);

export default {
  name: 'media-item',
  components: {
    MediaPoster,
  },

  props: {
    value: Object,
  },

  emits: ['click'],

  setup(props) {
    const width = computed(() => {
      const maxWidth = 180;

      const count = Math.ceil((screenWidth.value - 4) / maxWidth);
      const min = Math.floor((screenWidth.value - 4) / count) - 4;
      return min;
    });

    return {
      width
    };
  },
};
</script>

<style lang="scss" scoped>
.button {
  height: auto !important;
  flex: 0 0 auto;
  overflow: hidden;
  cursor: pointer;
}

.result {
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
}

img {
  object-fit: cover;
  flex: 0 0 auto;
}

.image-placeholder {
  flex: 0 0 auto;
}

.details {
  max-width: 16em;
  white-space: normal;
  text-align: left;
}

.button-container {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
