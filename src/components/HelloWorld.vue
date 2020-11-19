<template>
  <div class="hello">
    <p>{{count}}</p>
    <button @click="increase">click-me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: false,
    },
  },
  setup() {
    const count = ref(0)
    const increase = () => {
      count.value++;
    }

    return {
      count,
      increase,
    }
  }
})

</script>