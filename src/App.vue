<style scoped lang="less" rel="stylesheet/less"></style>

<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  created () {
    
    document.oncontextmenu = function (event) {
      if (event.stopPropagation) {
        event.stopPropagation()
      }
      if (event.preventDefault) {
        event.preventDefault()
      }
    }
  }
}
</script>
