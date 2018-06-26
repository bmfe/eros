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

            <category title="列表cell展示——线不到头" type="primary"></category>
            <div class="eros-list">
                <erosCell label="只有标题" cellMargin :cellPadding="false"></erosCell>
                <erosCell label="有箭头" has-arrow cellMargin :cellPadding="false"></erosCell>
            </div>

            <category title="列表cell展示" type="danger"></category>
            <erosCell title="消息" :border="false" has-arrow></erosCell>
            <erosCell title="通知"  has-arrow></erosCell>
            <erosCell title="隐私" has-arrow></erosCell>
            <category title="列表cell展示——两端对齐" type="success"></category>
            <erosCell label="通知" title="已开启" justify :border="false"></erosCell>
            <erosCell label="标题" title="具体描述" justify></erosCell>
            <erosCell label="标题" title="换个描述" desc="来个备注" justify></erosCell>
      </cell>
  </list>
</template>

<script>
    import Category from 'eros-ui/components/category';
    import ErosCell from 'eros-ui/components/cell';
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
<style scoped>
    .eros-list {
    background-color: #fff;
    }
</style>
