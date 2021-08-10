<style scoped lang="less" rel="stylesheet/less">
  .tool-box {
    display: inline-block;
    padding: 5px;
    background: #fff;
    cursor: default;
  }
</style>

<template>
  <div class="tool-box" @contextmenu.stop.prevent>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    props: {
      tools: {
        type: Array
      }
    }
  }
</script>
