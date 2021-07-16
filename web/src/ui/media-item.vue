<template>
  <v-button class="button px-0" @click="$emit('click', value)">
    <v-flex class="result">
      <img :src="imageUrl" v-if="value.i" />
      <v-flex align-center justify-center class="image-placeholder" v-else>
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

export default {
  name: 'search-result',

  props: {
    value: Object,
  },

  emits: ['click'],

  setup(props) {
    const imageUrl = computed(() => {
      return props.value.i[0]
        .replace("._V1_.jpg", "._V1._SX128_CR0,0,128,186_.jpg");
    });

    return {
      imageUrl,
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
  width: 128px;
  height: 186px;
  object-fit: cover;
  flex: 0 0 auto;
}

.image-placeholder {
  width: 128px;
  height: 186px;
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
