<template>
  <v-button
    class="button px-0"
    @click="$emit('click', value)"
  >
    <v-flex class="result">
      <img :src="imageUrl" :style="imageStyle" v-if="value.i" />
      <v-flex
        :style="imageStyle"
        align-center
        justify-center
        class="image-placeholder"
        v-else
      >
        <v-icon x-large>theaters</v-icon>
      </v-flex>

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
import { computed, shallowRef, watch } from 'vue';

const screenWidth = shallowRef(window.innerWidth);
window.addEventListener('resize', () => screenWidth.value = window.innerWidth);

export default {
  name: 'media-item',

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

    const height = computed(() => {
      return 1.453125 * width.value;
    });

    const imageUrl = computed(() => {
      return props.value.i[0]
        .replace('._V1_.jpg', `._V1._SX${width.value * 2}_CR0,0,${width.value * 2},${height.value * 2}_.jpg`);
    });

    const imageStyle = computed(() => {
      return {
        width: `${width.value}px`,
        height: `${height.value}px`,
      };
    });

    return {
      imageUrl,
      imageStyle,
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
