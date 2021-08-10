
<style scoped lang="less" rel="stylesheet/less"></style>

<template>
  <CardBox placement="right" :width="300">
  
    <CardItem title="导航栏" :enableFold="true">
      <Navigator></Navigator>
    </CardItem>
  </CardBox>
</template>

<script>
  import CardBox from '../components/CardBox'
  import CardItem from '../components/CardItem'
  // import Options from '../components/Options'
  import Navigator from '../components/Navigator'

  export default {
    name: 'PanelRight',
    components: {
      CardBox,
      CardItem,
      // Options,
      Navigator
    }
  }
</script>
