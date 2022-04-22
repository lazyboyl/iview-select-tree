<template>
  <div id="app">
    <selectTree v-model="queryVal3" clearable :treeData="treeData" @on-select-change="selectChange"></selectTree>
  </div>
</template>

<script>
import selectTree from './iview/select/selectTree'

export default {
  name: 'app',
  components: {
    selectTree
  },
  data() {
    return {
      queryVal3: '',
      treeData: [
        {
          value: '001',
          title: '北京',
          children: [
            {
              value: '0011',
              title: '故宫',
              disable: true
            },
            {
              value: '0012',
              title: '天坛'
            }
          ]
        }
      ]
    }
  },
  methods: {
    selectChange(multipleShowVal, multipleHideVal) {
      console.log(multipleShowVal, multipleHideVal)
    }
  }
}
</script>

<style lang="scss">
</style>
