<template>
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
</template>

<script >
import { computed } from 'vue';

export default {
  name: 'media-poster',

  props: {
    value: Object,
    width: Number,
  },

  setup(props) {
    const ratio = computed(() => {
      return props.value.i[2] / props.value.i[1];
    });

    const height = computed(() => {
      return ratio.value * props.width;
    });

    const imageUrl = computed(() => {
      const imgWidth = Math.min(props.value.i[1], Math.round(props.width * devicePixelRatio * 2));

      return props.value.i[0].replace('._V1_.jpg', `._V1._SX${imgWidth}_CR0,0,${imgWidth}_.jpg`);
    });

    const imageStyle = computed(() => {
      return {
        width: `${props.width}px`,
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
img {
  object-fit: cover;
  flex: 0 0 auto;
}

.image-placeholder {
  flex: 0 0 auto;
}
</style>
