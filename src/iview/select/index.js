// selectTree 插件对应组件的名字
import selectTree from './selectTree';
selectTree.install = Vue => Vue.component(selectTree.name, selectTree);//注册组件
export default selectTree;
