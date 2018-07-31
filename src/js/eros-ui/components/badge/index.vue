<template>
    <div class="eros-badge" :class="badgeStyle">
        <text 
            class="badge-txt"
            :class="innerTextStyle" 
            v-if="text" 
            :value="text"></text>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'default'
        },
        rounded: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        badgeStyle() {
            return [
                `bg-${this.type}`,
                this.rounded && 'circle'
            ]
        },
        innerTextStyle() {
            if(this.type != `default`) {
                return [
                    `theme-white`,
                    this.text
                ]
            }
        }
    }
}
</script>

<style lang="sass" src="./index.scss"></style>