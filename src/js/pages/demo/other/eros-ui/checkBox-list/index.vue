<template>
    <scroller class="scroller">
        <category title="默认样式"  type="danger"></category>
        <erosCheckBox title="默认"  :border="false"></erosCheckBox>
        <erosCheckBox title="被禁用" name="check">
            <eros-icon name="success" style="padding-right: 20px;"></eros-icon>
          <!-- <unicodeIcon name="check"></unicodeIcon> -->
        </erosCheckBox>
        <erosCheckBox icon="success" title="选中被禁用"></erosCheckBox>
        <erosCheckBox title="选中啦啦啦啦"></erosCheckBox>
    </scroller>
</template>

<script>
import ErosIcon from 'eros-ui/components/icon'
 import Category from 'eros-ui/components/category';
//  import unicodeIcon from "eros-ui/components/icon-type"
 import ErosCheckBox from 'eros-ui/components/checkbox';
  export default {
    components: { 
        Category, 
        ErosCheckBox ,
        unicodeIcon,
        ErosIcon
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
