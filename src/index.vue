<style src="./style.css"></style>
<template>
    <button :disabled="disabled" :class="btnClass" :type="btnType">
        <span><slot></slot></span>
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
                default: 'default'
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
                cls.push(`vt-button--${this.size}`)
                return cls
            }
        },
        methods: {}
    }
</script>
