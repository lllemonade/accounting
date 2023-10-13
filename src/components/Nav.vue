<template>
  <div>
    <router-link :to="{name:'money'}">主页</router-link> |
    <router-link :to="{name:'labels'}">label</router-link>| 
    <router-link :to="{name:'statistics'}">statistics</router-link>| 
  </div>
</template>

<script>
  export default {
    name:'nav'
  }
</script>

<style lang="scss" scoped>

</style>