<template>
  <v-flex column class="result" :style="resultStyle">
    <img
      class="image"
      :src="imageUrl"
      :style="imageStyle"
      v-if="value.i"
      @click="$emit('close')"
    />

    <v-flex column class="px-2 py-2 details" style="flex: 0 0 auto">
      <v-text title>{{ value.l }}</v-text>

      <span class="my-1" />

      <v-flex align-start>
        <v-text subtitle>{{ value.y }}</v-text>

        <v-grow />

        <v-button x-small color="error" @click="remove">watched</v-button>
      </v-flex>

      <span class="my-1" />

      <v-flex justify-end style="flex: 0 0 auto">
        <v-button x-small color="default" @click="openDl">dl</v-button>
        <span class="mx-1" />
        <v-button x-small color="default" @click="openImdb">imdb</v-button>
        <span class="mx-1" />
        <v-button x-small color="default" @click="openGoogle">google</v-button>
      </v-flex>
    </v-flex>
  </v-flex>
</template>

<script >
import { computed, shallowRef, watch } from 'vue';

const screenWidth = shallowRef(window.innerWidth);
const screenHeight = shallowRef(window.innerHeight);
window.addEventListener('resize', () => (screenWidth.value = window.innerWidth, screenHeight.value = window.innerHeight));

export default {
  name: 'media-details',

  props: {
    value: Object,
  },

  emits: ['close', 'watch'],

  setup(props, { emit }) {
    const width = computed(() => {
      const a = screenWidth.value * 0.7;
      const b = screenHeight.value * 0.66 / 1.453125;
      return Math.min(a, b);
    });

    const height = computed(() => {
      return 1.453125 * width.value;
    });

    const imageUrl = computed(() => {
      return props.value.i[0]
        .replace('._V1_.jpg', `._V1._SX${width.value * devicePixelRatio}_CR0,0,${width.value * devicePixelRatio},${height.value * devicePixelRatio}_.jpg`);
    });

    const imageStyle = computed(() => {
      return {
        width: `${width.value}px`,
        height: `${height.value}px`,
      };
    });

    const resultStyle = computed(() => {
      return {
        width: `${width.value}px`,
      };
    });

    return {
      imageUrl,
      imageStyle,
      resultStyle,

      remove() {
        emit('watch', props.value);
      },

      openDl() {
        const url = `https://rargb.to/search/?order=seeders&by=DESC&search=${props.value.l}+${props.value.y}`;
        window.open(url, '_blank').focus();
      },

      openImdb() {
        const url = `https://www.imdb.com/title/${props.value.id}/`;
        window.open(url, '_blank').focus();
      },

      openGoogle() {
        const url = `https://www.google.com/search?q=${props.value.l}+(${props.value.y})`;
        window.open(url, '_blank').focus();
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.result {
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  position: relative;
}

.image {
  object-fit: cover;
  // position: absolute;
}

// .overlay {
//   position: absolute;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   background-image: linear-gradient(transparent 65%, black);
// }

.details {
  white-space: normal;
  text-align: left;
}

.button-container {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
