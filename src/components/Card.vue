<template>
  <div class="card card__visa">
    <card-container>
      <card-front-side/>
    </card-container>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CardBackSide from './CardBackSide.vue';
import CardFrontSide from './CardFrontSide.vue';
import CardContainer from './CardContainer.vue';

export default defineComponent({
  components: { CardFrontSide, CardBackSide, CardContainer },
  name: 'Card',
  props: {
    
  },
  setup() {
  }
})

</script>

<style lang="scss">
.card {
  width: 430px;
  height: 260px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: black;
}
</style>