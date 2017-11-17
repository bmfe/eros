# 下拉刷新（扩展Scroller、List）

Weex 自带的`<refresh>` 组件使用起来不是很好用，效果也差强人意，综合考虑由 native 端来实现下拉刷新，方式是在 \`&lt;scroller&gt;、&lt;list&gt;\` 组件的基础上进行扩展，这样对于前端的改动最小，使用也非常简单，具体方式如下：

### 效果：

![](https://img.benmu-health.com/gitbook/show4.gif)

### 扩展特性

说明：在原有\`&lt;scroller&gt;、&lt;list&gt;\`组件基础上添加\`showRefresh\`属性来控制是否需要显示下拉刷新组件；

`showRefresh {bool}`：当值为\`true\`时 native 端自动为\`&lt;scroller&gt;\`或\`&lt;list&gt;\`添加下拉刷新组件（缺省此属性或者值为\`false\`时不会显示下拉刷新组件）；

### 扩展事件

`refresh`：当下拉并执行刷新操作时会触发这个事件，你可以在这个事件的处理函数中来执行刷新的操作，如重新请求数据；

`refreshEnd`: 结束刷新动画，当刷新的操作完毕后需要调用此方法来结束刷新动画；

```js
<template>
    <div class="wrap">
        <!--  头部  -->
        <layout-header></layout-header>
        <list ref="list" :showRefresh="true" @refresh="onrefresh">
            ...
            ...
        </list>
    </div>
</template>
<script>
    var globalEvent = weex.requireModule('globalEvent');
    module.exports = {
        data() {
            ...
        },
        components: {
            ...
        },
        methods: {
            onrefresh() {
                Promise.all([disease.GET_COMMONDISEASES_LIST(this), banner.GET_BANNER_LIST(this)]).then(() => {
                    // 请求数据结束后调用 refreshEnd 方法
                    this.$refs["list"].refreshEnd()
                })
            }
        }
    }
</script>
```



