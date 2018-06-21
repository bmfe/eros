<template>
    <div class="eros-cell-input" :class="cellStyle">
        <template v-if="mod === 'no-flat'">
            <div class="eros-no-flat">
                <text class="eros-icon eros-search" v-if="search">&#xe752;</text>
                <slot v-if="targetName">
                    <text class="eros-target">{{targetName}}</text>
                    <text class="eros-icon eros-arrow-drop">&#xe772;</text>
                </slot>
                <input class="eros-input" :class="customizeInput" :type="type" :placeholder="placeholder" :disabled="disabled" :autofocus="autofocus"/>
                <text class="eros-icon eros-empty">&#xe724;</text>
            </div>
            <div class="handle-btn" v-if="handle">{{handle}}</div>
            <text class="cancel-label theme-white" v-if="cancelLabel">{{cancelLabel}}</text>
        </template>
         <template v-else>
                <text class="eros-hint" v-if="hint">{{hint}}</text>
                <input class="eros-input" :class="customizeInput" :type="type" :placeholder="placeholder" :disabled="disabled" :autofocus="autofocus"/>
                <text class="eros-icon eros-empty">&#xe724;</text>
        </template>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: '请输入文本信息~'
        },
        color: {
            type: String,
        },
        disabled: {
          type: Boolean,
            default: false  
        },
        hint: {
            type: String,
            default: ''
        },
        border: {
            type: Boolean,
            default: true
        },
        mod: {
            type: String,
            default: ''
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        theme: {
            type: String,
            default: 'white'
        },
        cancelLabel: {
            type: String,
            default: ''
        },
        targetName: {
            type: String,
            default: ''
        },
        search: {
            type: Boolean
        },
        handle: {
            type: String
        }
    },
    computed: {
        cellStyle() {
            return [
                this.border && 'bor-top',
                !this.hollow && `bg-${this.theme}`
            ]
        },
        customizeInput() {
            return [
                `placeholder-${this.color}`
            ];
        }
    }
}    
</script>
<style lang="sass" src="./index.scss"></style>

