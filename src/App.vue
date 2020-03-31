<template>
  <div id="app">
    <selectTree  v-model="queryVal3" clearable :treeData="treeData"></selectTree>
  </div>
</template>

<script>
  import selectTree from './iview/select/selectTree'
export default {
  name: 'app',
  components:{
    selectTree
  },
  data () {
    return {
      queryVal3:'',
      treeData: [
        {
          title: 'parent 1',
          expand: true,
          value: '1',
          children: [
            {
              title: 'k 1-1',
              expand: true,
              value: '11',
              children: [
                {
                  value: '111',
                  title: 'leaf 1-1-1',
                  expand: true,
                  children: [
                    {
                      value: '111111',
                      title: 'leaf 1-1-1-1'
                    },
                    {
                      value: '2222222',
                      title: 'leaf 1-1-1-2'
                    }
                  ]
                },
                {
                  value: '112',
                  title: 'leaf 1-1-2'
                },
                {
                  value: '1123',
                  title: 'leaf 1-1-3'
                },
                {
                  value: '1124',
                  title: 'leaf 1-1-4'
                },
                {
                  value: '1125',
                  title: 'leaf 1-1-5'
                },
                {
                  value: '1126',
                  title: 'leaf 1-1-6'
                },
                {
                  value: '1127',
                  title: 'leaf 1-1-7'
                },
                {
                  value: '1128',
                  title: 'leaf 1-1-8'
                },
                {
                  value: '1129',
                  title: 'leaf 1-1-9'
                },
                {
                  value: '11210',
                  title: 'leaf 1-1-10'
                },
                {
                  value: '11211',
                  title: 'leaf 1-1-11'
                },
                {
                  value: '11212',
                  title: 'leaf 1-1-12'
                },
                {
                  value: '11213',
                  title: 'leaf 1-1-13'
                },
                {
                  value: '11214',
                  title: 'leaf 1-1-14'
                }
              ]
            },
            {
              title: 'g 1-2',
              value: '12',
              expand: true,
              children: [
                {
                  value: '121',
                  title: 'leaf 1-2-1'
                },
                {
                  value: '122',
                  title: 'leaf 1-2-2'
                }
              ]
            }
          ]
        },
        {
          title: 'parent 2',
          expand: true,
          value: '999999'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
