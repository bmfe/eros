# 富文本标签（bmrichtext）

1.文本通过 `value`属性设置；

2.`bmspan`可以不写字体样式，默认会继承‘bmrichtext’的字体样式；

3.`bmrichtext` 与 `bmspan` 标签本身支持 `v-if`条件，但是不支持 `v-for`表达式，使用 `v-for`时可以在包一层`div`来实现；



```js
举个例子：
<div v-for="item in [1,2,3]">
   <bmrichtext class="hd-txt flex">
      <bmspan value="已提交" v-if="true"></bmspan>
      <bmspan class="f-green" value="18"></bmspan>
      <bmspan  value="天"></bmspan>
      <bmspan class="f-green" value="3"></bmspan>
      <bmspan  value="小时"></bmspan>
      <bmspan class="f-green" value="1"></bmspan>
      <div v-for="item in [1,2,3]">
          <bmspan value="分"></bmspan>
      </div>
   </bmrichtext>
</div>
```

![](https://img.benmu-health.com/gitbook/import.png)

