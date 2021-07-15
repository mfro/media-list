<template>
  <v-card class="card px-0" @click="$emit('click', value)">
    <v-flex class="result">
      <img :src="imageUrl" v-if="value.i" />
      <v-flex align-center justify-center class="image-placeholder" v-else>
        <v-icon x-large>theaters</v-icon>
      </v-flex>
      <v-flex column align-start class="px-3 py-1 details">
        <v-text title>{{ value.l }}</v-text>
        <span class="my-1" />
        <v-text subtitle>{{ value.y }}</v-text>
        <span class="my-3" />
        <v-text subtitle>{{ value.s }}</v-text>

        <v-flex grow />
      </v-flex>
    </v-flex>
  </v-card>
</template>

<script >
import { computed, shallowRef, watch } from 'vue';

export default {
  name: 'search-result',

  props: {
    value: Object,
  },

  emits: ['click'],

  setup(props) {
    const imageUrl = computed(() => {
      return props.value.i[0]
        .replace("._V1_.jpg", "._V1._SX120_CR0,0,120,162_.jpg");
    });

    return {
      imageUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: auto !important;
  overflow: hidden;
  flex: 0 0 auto;
}

.result {
  cursor: pointer;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
}

img {
  width: 120px;
  height: 162px;
  object-fit: cover;
  flex: 0 0 auto;
}

.image-placeholder {
  width: 120px;
  height: 162px;
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
