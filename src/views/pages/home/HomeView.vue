<template>
  <div class="home">
    <img alt="Vue logo" :src="require('@/assets/logo.png')">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss">
.home{
  @include max800px {
    width: 100%;
    padding: 1rem;
  }
}
</style>
