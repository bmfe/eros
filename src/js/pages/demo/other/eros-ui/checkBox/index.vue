<template>
 <scroller class="scroller">
        <category title="默认样式" type="danger"></category>
        <erosCell title="默认" :border="false"><text class="eros-icon eros-checkbox-x theme-gray">&#xe720;</text></erosCell>
        <erosCell title="被禁用"><text class="eros-icon eros-checkbox-x theme-gray">&#xe63a;</text></erosCell>
        <erosCell title="选中被禁用"><text class="eros-icon eros-checkbox-x theme-gray">&#xe722;</text></erosCell>
        <erosCell title="选中"><text class="eros-icon eros-checkbox-x theme-danger">&#xe721;</text></erosCell>


        <category title="推荐展示样式" type="success"></category>
        <erosCell label="美国" justify :border="false"><text class="eros-icon eros-checkbox">&#xe720;</text></erosCell>
        <erosCell label="中国" justify><text class="eros-icon eros-checkbox theme-primary">&#xe721;</text></erosCell>
        <erosCell label="巴西" ><text class="eros-icon eros-checkbox">&#xe720;</text></erosCell>
        <erosCell label="日本" ><text class="eros-icon eros-checkbox">&#xe722;</text></erosCell>
        <erosCell label="英国" justify><text class="eros-icon eros-checkbox">&#xe720;</text></erosCell>
        <erosCell label="法国" justify><text class="eros-icon eros-checkbox">&#xe720;</text></erosCell>
        
   
      <wxc-checkbox title="默认"></wxc-checkbox>
      <wxc-checkbox title="默认选中"
                    :checked="true"></wxc-checkbox>
      <wxc-checkbox title="未选中不可更改"
                    :disabled="true"></wxc-checkbox>
      <wxc-checkbox title="选中不可更改"
                    :disabled="true"
                    :checked="true"></wxc-checkbox>
      <div class="margin">
        <wxc-checkbox-list :list="list"
                           @wxcCheckBoxListChecked="wxcCheckBoxListChecked"></wxc-checkbox-list>
        <text class="checked-text">选中项 {{checkedList.toString()}}</text>
        </div>
    </scroller>
</template>

<script>
 import Category from 'eros-ui/components/category';
 import ErosCell from 'eros-ui/components/cell';
import { WxcCheckbox,WxcCheckboxList } from 'weex-ui'
  export default {
    components: { 
        Category, 
        ErosCell ,
        WxcCheckbox,
         WxcCheckboxList 
         },
    data: () => ({
      list: [
        { title: '选项1', value: 1 },
        { title: '选项2', value: 2, checked: true },
        { title: '选项3', value: 3 },
        { title: '选项4', value: 4 }
      ],
      checkedList: [2]
    }),
    methods: {
      wxcCheckBoxListChecked (e) {
        this.checkedList = e.checkedList;
      }
    }
  }
</script>
