<template>
  <list>
      <cell> 
            <category title="列表cell展示——默认" type="primary"></category>
            <erosCell v-for="index in posts"
                      :key="index"
                      :label="index.title"
                      :desc="index.descripe"
                      :title="index.descripe"
                      ></erosCell>
            <category title="列表cell展示" type="danger"></category>
            <erosCell label="标题" title="具体描述" :border="false"></erosCell>
            <erosCell label="标题" title="具体描述"  has-arrow></erosCell>
            <erosCell label="标题" title="换个描述"></erosCell>
            <category title="列表cell展示——两端对齐" type="success"></category>
            <erosCell label="标题" title="具体描述" justify :border="false"></erosCell>
            <erosCell label="标题" title="具体描述" justify has-arrow></erosCell>
            <erosCell label="标题" title="换个描述" desc="来个备注" justify></erosCell>
      </cell>
  </list>
</template>

<script>
    import Category from '../../_mods/category.vue';
    import ErosCell from '../../_mods/eros-cell.vue';
    export default {
        components: { 
            Category, 
            ErosCell 
        },
        data: {
            posts: [
                { title:'我的订单',descripe: 'My journey with Vue' },
                { title:'我的收藏',descripe: 'Blogging with Vue' },
                { title:'手机号',descripe: 'Why Vue is so fun' },
            ]
        }

    }    
</script>