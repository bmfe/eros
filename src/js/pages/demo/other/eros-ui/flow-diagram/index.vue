<template>
    <list>
        <cell>
            <category title="流程图" hollow color="dark"></category>
            <div class="time-box">
                <!-- 顶端节点轴线控制 top-end -->
                <div class="axis top-end"></div>
                <div class="right-zone">
                    <text class="right-zone-tit">课程安排</text>
                    <text class="label-txt">2018-07-05 12：00：49</text>
                </div>
                <div class="pivot-point point"></div>
            </div>
            <div class="time-box">
                <div class="axis"></div>
                <div class="right-zone bor-top">
                    <text class="right-zone-tit">活动安排</text>
                    <text class="label-txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente vitae officiis repellendus, placeat
                        voluptates velit excepturi soluta fugit assumenda quia consequatur accusantium aperiam optio. Recusandae
                        saepe modi neque maxime at.</text>
                    <text class="label-txt">2018-07-05 12：00：49</text>
                </div>
                <div class="pivot-point">
                    <text class="eros-icon pivot-icon">&#xe871;</text>
                </div>
            </div>
            <div class="time-box">
                <!-- 底端节点轴线控制 bottom-end -->
                <div class="axis bottom-end"></div>
                <div class="left-zone" hadLeft>
                    <text class="time">7月5日</text>
                </div>
                <div class="right-zone bor-top" :class="leftZone">
                    <text class="right-zone-tit">考试安排</text>
                    <text class="label-txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente vitae officiis repellendus, placeat
                        voluptates velit excepturi soluta fugit assumenda quia consequatur accusantium aperiam optio. Recusandae
                        saepe modi neque maxime at.</text>
                    <text class="label-txt">2018-07-05 12：00：49</text>
                </div>
                <!-- 当前状态 active -->
                <div class="pivot-point point active"></div>
            </div>


            <category title="流程图横向" hollow color="dark"></category>
            <div class="horizontal-flow">
                <div class="time-box-hor">
                    <div class="axis-hor left-end"></div>
                    <div class="point row-center"></div>
                    <div class="bottom-zone">
                        <text class="right-zone-tit">已审核</text>
                    </div>
                </div>
                <div class="time-box-hor">
                    <div class="axis-hor"></div>
                    <div class="point row-center"></div>
                    <div class="bottom-zone">
                        <text class="right-zone-tit">拣货中</text>
                    </div>
                </div>
                <div class="time-box-hor">
                    <div class="axis-hor"></div>
                    <div class="point row-center"></div>
                    <div class="bottom-zone">
                        <text class="right-zone-tit">已打包</text>
                    </div>
                </div>
                <div class="time-box-hor">
                    <div class="axis-hor"></div>
                    <div class="point row-center"></div>
                    <div class="bottom-zone">
                        <text class="right-zone-tit">已发货</text>
                    </div>
                </div>
                <div class="time-box-hor">
                    <div class="axis-hor right-end"></div>
                    <div class="point row-center active"></div>
                    <div class="bottom-zone">
                        <text class="right-zone-tit">等待验收</text>
                    </div>
                </div>
            </div>
        </cell>
    </list>
</template>
<style lang="sass" src="./index.scss"></style>
<script>
    import Category from "eros-ui/components/category";
    export default {
        components: {
            Category,
        },
        props: {
            hadLeft: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            leftZone() {
                return [
                    this.hadLeft && 'had-left'
                ]
            },
        }
    }

</script>
