<template>
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

    <v-flex grow column class="px-3 py-1 details">
      <v-flex>
        <v-text title>{{ value.l }}</v-text>
        <v-flex grow />
      </v-flex>

      <span class="my-1" />
      <v-text subtitle>{{ value.y }}</v-text>
      <span class="my-3" />

      <v-flex grow column align-end justify-end>
        <v-button small color="error" @click="remove">remove</v-button>
        <span class="my-1" />
        <v-flex>
          <v-button small color="default" @click="openImdb">imdb</v-button>
          <span class="mx-1" />
          <v-button small color="default" @click="openGoogle">google</v-button>
        </v-flex>
        <span class="my-1" />
      </v-flex>
    </v-flex>
  </v-flex>
</template>

<script >
import { computed, shallowRef, watch } from 'vue';

const screenWidth = shallowRef(window.innerWidth);
window.addEventListener('resize', () => screenWidth.value = window.innerWidth);

export default {
  name: 'media-details',

  props: {
    value: Object,
  },

  emits: ['delete'],

  setup(props, { emit }) {
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
        .replace('._V1_.jpg', `._V1._SX${width.value}_CR0,0,${width.value},${height.value}_.jpg`);
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

      remove() {
        emit('delete', props.value);
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
