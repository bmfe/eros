<template>
  <list>
      <cell> 
            <category title="input有标签" type="primary"></category>
            <div class="eros-form">
                <erosInput hint="用户名称" type="text" placeholder="请输入用户名/手机号/邮箱"></erosInput>
                <erosInput hint="密码"  type="password" placeholder="请输入密码"></erosInput>
            </div>
            <category title="input无标签" type="primary"></category>
            <div class="eros-form">
                <erosInput type="text" placeholder="用户名/手机/邮箱"></erosInput>
            </div>
            <category title="input自定义placeholder颜色" type="primary"></category>
            <div class="eros-form">
                <erosInput type="text" placeholder="请输入" color="danger"></erosInput>
            </div>
            <category title="input带搜索" type="primary"></category>
            <div class="eros-form">
                <erosInput mod="no-flat" search theme="dark" type="text" placeholder="请输入到达城市" cancelLabel="取消"></erosInput>
            </div>
            <category title="input带目的地" type="primary"></category>
            <div class="eros-form">
                <erosInput mod="no-flat" theme="danger" type="text" placeholder="请输入到达城市" targetName="到达城市" cancelLabel="搜索"></erosInput>
            </div>
            <category title="input带操作按钮" type="primary"></category>
            <div class="eros-form">
                <erosInput mod="no-flat" theme="dark" containColor="bg-primary" type="text" placeholder="请把你的评论留下来~~~" handle="评论"></erosInput>
            </div>
      </cell>
  </list>
</template>

<script>
    import Category from 'eros-ui/components/category';
    import ErosInput from 'eros-ui/components/input';
    export default {
        components: { 
            Category, 
            ErosInput 
        },
        data: {
        }

    }    
</script>

