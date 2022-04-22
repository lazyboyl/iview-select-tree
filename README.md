# iview-select-tree

> 基于iview进行二次开发的级联树状选择组件，支持无限级，单选，多选，搜索,表单验证（注：使用前先引入iview，否则无法使用）

# 安装
``` js
npm install iview-select-tree --save
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
| 属性 | 说明 | 类型 | 默认 | 版本 |
| :-----| ---- | :----: | :----: | :----: |
| filterable | 是否支持搜索 | Boolean |  false | 1.0.6 |
| clearable | 是否可以清空选项，只在单选时有效 | Boolean |  false | 1.0.6 |
| treeData | 下拉树的数据 | Array |  空 | 1.0.6 |
| multiple | 是否允许多选 | Boolean |  false | 1.0.6 |
| value | 指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array | String 或 Number 或 Array |  空 | 1.0.6 |
| showQuery | 是否展示下拉的搜索框 |  true | 1.0.8 |
| disabled | 是否禁用或启用当前的下拉框 |  true | 1.0.10 |

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
## demo说明的例子
[iview下拉菜单树的iview-select-tree的使用](https://blog.csdn.net/linzhefeng89/article/details/105245236)
## github
如果觉得写的可以就给一个star吧，如果那里有bug大家可以直接提issue
[https://github.com/lazyboyl/iview-select-tree](https://github.com/lazyboyl/iview-select-tree)
### 版本更新
#### 1.0.13
- 修复部分反馈的BUG
- 支持view-design-4.7版本
#### 1.0.12
- 【BUG】修复无法下载问题
#### 1.0.11
- 【BUG】修复加载的数据无法回显的问题
#### 1.0.10
- 【新增】新增由@GyPsyEyes提出的[#issues4](https://github.com/lazyboyl/iview-select-tree/issues/4)的disabled禁用和启用的需求场景。
#### 1.0.9
- 【新增】新增由@zhangjiwei14提出的[#issues3](https://github.com/lazyboyl/iview-select-tree/issues/3)的需求场景。




