<style src="./style.css"></style>
<template>
    <button @click="$emit('click')" :disabled="disabled" :class="btnClass" :type="btnType">
       <slot></slot>
    </button>
</template>
<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'default'
            },
            btnType: {
                type: String,
                default: 'button'
            },
            plain: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: ''
            }
        },
        computed: {
            btnClass(){
                let cls = ['vt-button']
                if(this.plain) {
                    cls.push(`vt-button--plain-${this.type}`)
                } else {
                    cls.push(`vt-button--${this.type}`)
                }
                this.size && cls.push(`vt-button--${this.size}`)
                return cls
            }
        },
        methods: {}
    }
</script>
