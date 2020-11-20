<template>
  <div class="card__front">
    <header class="card__header">
      <div class="card__brand">
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'CardFrontSide',
  props: {
   
  },
  setup() {
    return {
    }
  }
})

</script>
<style lang="scss" scoped>
  .card__header {
    display: flex;
    width: 100%;
    .card__brand {
      max-width: 50%;
      position: relative;
      width: 100%;
      min-height: 40px;
      &:before {
        position: absolute;
        left: 0;
        width: 100%;
        height: 39px;
        content: ' ';
        background-image: url('../assets/card_brands.svg');
      }
    }
  }
  .card__visa {
    .card__brand {
      &:before {
        background-position: -.07692307692307693em -36.38461538461539em;
        background-size: 15.153846153846153em 42.61538461538461em;
      }
    }
  }
</style>