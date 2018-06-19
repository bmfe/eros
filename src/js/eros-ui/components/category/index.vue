<template>
    <div class="category" :class="innerContainerStyle"  :style="categoryStyle">
        <text class="category-text" :class="innerTextStyle" :style="categoryTitle" :value="title"></text>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        color: {
            type: String,
        },
        type: {
            type: String,
            default: "default"
        },
        hollow: {
            type: Boolean,
            default: false
        },
        categoryStyle: Object,
        categoryTitle: Object 
    },
    computed: {
        innerContainerStyle() {
            return [!this.hollow && `bg-${this.type}`];
        },
        innerTextStyle() {
            return [
                this.hollow && `theme-${this.color}`,
                this.icon && this.title 
            ];
        }
    }
};
</script>

<style lang="sass" src="./index.scss"></style>