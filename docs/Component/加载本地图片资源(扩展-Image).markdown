# 加载本地图片资源（扩展 Image）

目前 Weex 的 `<image>` 标签不支持加载本地图片资源，但是在实际开发中加载本地图片资源还是必须的功能，通过扩展 `<image>` 组件使其支持此特性；

**使用方法：**  
首先需要将图片资源放到 assets 目录下，填写 scr 时请以 bmlocal://assets/ 开头后面跟上图片的具体路径

**示例：**

```js
<template>
    <image style="width:550px; height:550px; top:100px" src="bmlocal://assets/logo.png"></image>
</template>
```

**效果**

![](https://img.benmu-health.com/gitbook/iimport.png)

