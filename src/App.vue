<template>
  <Card/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Card from './components/Card.vue';

@Options({
  components: {
    Card
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
* {
  box-sizing: border-box;
}
</style>
