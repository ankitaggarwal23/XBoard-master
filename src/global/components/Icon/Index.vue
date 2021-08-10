<style scoped lang="less" rel="stylesheet/less">
  .icon {

  }
</style>

<template>
  <span v-if="type" class="icon iconfont" :class="[type ? 'icon-' + type : '']"></span>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      type: String
    }
  }
</script>
