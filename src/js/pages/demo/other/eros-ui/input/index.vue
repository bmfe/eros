
<template>
    <scroller>
        <category title="有标签:" type="primary"></category>
        <div class="eros-form">
            <div class="eros-cell-input">
                <text class="eros-hint">用户名称</text>
                <input type="text" class="eros-input" placeholder="请输入用户名/手机号/邮箱" :autofocus="true"/>
                <text class="eros-icon eros-empty">&#xe724;</text>
            </div>
            <div class="eros-cell-input bor-top">
                <text class="eros-hint">密码</text>
                <input type="password" class="eros-input" placeholder="请输入密码" :autofocus="true"/>
                <text class="eros-icon eros-empty">&#xe724;</text>
            </div>
        </div>
        <category title="无标签:" type="primary"></category>
        <div class="eros-form">
            <div class="eros-cell-input">
                <input type="text" class="eros-input" placeholder="用户名/手机/邮箱">
                <text class="eros-icon eros-empty">&#xe724;</text>
            </div>
        </div>
        <category title="带搜索" type="primary"></category>
        <div class="eros-form bg-dark">
            <div class="eros-cell-input">
                <div class="eros-no-flat">
                    <text class="eros-icon eros-search">&#xe752;</text>
                    <input type="text" class="eros-input" placeholder="用户名/手机/邮箱">
                    <text class="eros-icon eros-empty">&#xe724;</text>
                </div>
                <text class="cancel-label theme-white">取消</text>
            </div>
        </div>
        <category title="带目的地" type="primary"></category>
        <div class="eros-form bg-dark">
            <div class="eros-cell-input">
                <div class="eros-no-flat">
                    <text class="eros-target">杭州出发</text>
                    <text class="eros-icon eros-arrow-drop">&#xe772;</text>
                    <input type="text" class="eros-input" placeholder="搜索目的地" >
                    <text class="eros-icon eros-empty">&#xe724;</text>
                </div>
                <text class="cancel-label theme-white">取消</text>
            </div>
        </div>
        <category title="强引导类输入框" type="primary"></category>
        <div class="eros-form">
            <div class="eros-cell-input">
                <div class="eros-no-flat bg-background">
                    <input type="text" class="eros-input" placeholder="留下你的评论..." >
                    <text class="eros-icon eros-empty">&#xe724;</text>
                </div>
                <div class="handle-btn">评论</div>
            </div>
        </div>
        <category title="控制占位符颜色的input" type="primary"></category>
        <div class="eros-form">
            <div class="eros-cell-input">
                <input type="text" class="eros-input  placeholder-danger" placeholder="用户名/手机/邮箱">
                <text class="eros-icon eros-empty">&#xe724;</text>
            </div>
        </div>
    </scroller>
</template>
<style scoped lang="scss">
@import "src/js/css/reset";
.eros-form {
    @extend %bg-white;
}
.eros-cell-input {
    padding-right: 30;
    padding-left: 30;
    @extend %row-start;
    height: 100;
}
.eros-no-flat {
    flex: 1;
    @extend %row-start;
    margin-top: 10;
    margin-bottom: 10;
    padding-right: 20;
    padding-left: 20;
    height: 80;
    background-color:#fff;
    @include border-radius(8);
}
.eros-target {
    font-size: 30;
}
.eros-hint {
    width: 140;
    font-size: 32;
}
.eros-input {
    flex: 1;
    height: 80;
}
.cancel-label {
    margin-left: 30;
}
// icon设置
.eros-search {
    margin-right: 20;
    font-size: 36;
    color: #999;
}
.eros-arrow-drop {
    margin-right: 20;
    margin-left: 10;
    font-size: 20;
}
.eros-empty {
    padding-top: 20;
    padding-bottom: 20;
    padding-left: 40;
    font-size: 32;
    color: #999;
}
.handle-btn {
    margin-left: 20;
    @include rect(120,60);
    @extend %flex-align;
    @include border($border-color:#c7ced4,$radius: 8);
    background-color: #fff;
}
.bg-background {
    background-color: #eee;
}
</style>



<script>
    import Category from 'eros-ui/components/category';
    export default {
        components: { 
            Category, 
        },
        data:function() {
            
        },
        methods: {
           
        }


    }    
</script>
