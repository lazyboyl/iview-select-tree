# iview-select-tree

> 基于iview进行二次开发的级联树状选择组件，支持无限级，单选，多选，搜索,表单验证（注：使用前先引入iview，否则无法使用）

# 安装
``` js
npm install iview-tree-select --save
```
# 引入
``` js
import selectTree from 'iview-select-tree'
```
在引入的vue模块中需要在components上注册这个组件，这样才可以正常使用这个组件：
``` js
export default {
  name: 'app',
  components:{
    selectTree
  },
  data () {
     return {
        ...
     }
  },
  ...
}
```
# 效果
## 多选效果
![avatar](https://raw.githubusercontent.com/lazyboyl/iview-select-tree/master/src/assets/multiple.png)
## 单选效果
![avatar](https://raw.githubusercontent.com/lazyboyl/iview-select-tree/master/src/assets/single.png)
## 表单验证效果
![avatar](https://raw.githubusercontent.com/lazyboyl/iview-select-tree/master/src/assets/check.png)
# 调用方式
``` js
<selectTree  v-model="val" :treeData="data"></selectTree>
```
# 参数说明
| 属性 | 说明 | 类型 | 默认 |
| :-----| ---- | :----: | :----: |
| filterable | 是否支持搜索 | Boolean |  false |
| clearable | 是否可以清空选项，只在单选时有效 | Boolean |  false |
| treeData | 下拉树的数据 | Array |  空 |
| multiple | 是否允许多选 | Boolean |  false |
| value | 指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array | String 或 Number 或 Array |  空 |
# 方法说明
| 方法 | 说明 | 返回值 |
| :-----| ---- | :----: |
| on-select-change | 下拉框选中的时候触发的事件 | hideVal,showVal |

## treeData的数据格式
``` json
{
	"title": "parent 1",
	"expand": true,
	"value": "1",
	"children": [{
		"title": "k 1-1",
		"expand": true,
		"value": "11",
		"children": [{
			"value": "111",
			"title": "leaf 1-1-1",
			"expand": true
		}]
	}]
}
```
## github
如果觉得写的可以就给一个star吧，如果那里有bug大家可以直接提issue
[https://github.com/lazyboyl/iview-select-tree](https://github.com/lazyboyl/iview-select-tree)




