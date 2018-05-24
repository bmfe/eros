<template>
    <div class="category" :class="innerContainerStyle"  :style="categoryStyle">
        <text class="category-text" :class="innerTextStyle" :style="categoryTitle" :value="title"></text>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../../css/reset.scss";
.category {
    margin-top: 20px;
    padding-left: 30pxw;
    width: 750px;
    height: 60px;
    background-color: $white;
    justify-content: center;
}
.category-text {
    @extend %c-white;
    font-size: 26;
}
.title-default {
    color: $default;
}
.title-white {
    color: $white;
}
.title-dark {
    color: $dark;
}
.title-primary {
    color: $primary;
}
.title-secondary {
    color: $secondary;
}
.title-success {
    color: $success;
}
.title-warning {
    color: $warning;
}
.title-danger {
    color: $danger;
}
.category-default {
    background-color: $default;
}
.category-primary {
    background-color: $primary;
}
.category-secondary {
    background-color: $secondary;
}
.category-warning {
    background-color: $warning;
}
.category-danger {
    background-color: $danger;
}
.category-success {
    background-color: $success;
}
</style>

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
                return [!this.hollow && `category-${this.type}`];
            },
            innerTextStyle() {
                return [
                    this.hollow && `title-${this.color}`,
                    this.icon && this.title 
                ];
            }
        }
    };
</script>