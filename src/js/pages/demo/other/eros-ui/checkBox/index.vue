<template>
    <scroller class="scroller">
        <category title="默认样式"  type="primary"></category>
        <erosCheckBox label="默认选中" :border="false" icon="checked" checked></erosCheckBox>
        <erosCheckBox label="未选中" icon="unChecked"></erosCheckBox>
        <erosCheckBox label="选中禁用" icon="checkedDisabled" disabled></erosCheckBox>
        <erosCheckBox label="未选中禁用" icon="unCheckedDisabled" disabled justify="true"></erosCheckBox>
        <category title="示例"  type="primary"></category>
        <erosCheckBox v-for="index in list"
                      :key="index"
                      :label="index.title"
                      :icon="index.icon"
                      :theme="index.theme"
                      :checked ="index.checked" ></erosCheckBox>
    </scroller>
</template>

<script>
import ErosIcon from 'eros-ui/components/iconEros'
 import Category from 'eros-ui/components/category';
 import ErosCheckBox from 'eros-ui/components/checkbox';

  export default {
    components: { 
        Category, 
        ErosCheckBox ,
        ErosIcon
    },
    data: () => ({
      list: [
        { title: '选项1', value: 1,theme:'danger', icon:'unChecked'},
        { title: '选项2', value: 2,theme:'danger', icon:'checked', checked: true },
        { title: '选项3', value: 3,theme:'danger', icon:'unChecked'},
        { title: '选项4', value: 4,theme:'danger', icon:'unChecked' }
      ],
    }),
  }
</script>
