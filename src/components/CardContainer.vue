<template>
  <div class="card__container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CardContainer',
  props: {
   
  },
  setup() {

  }
})

</script>
<style lang="scss" scoped>
  .card__container {
    padding: 13px 20px;
    height: 100%;
  }
</style>