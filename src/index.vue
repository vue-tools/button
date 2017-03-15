<style src="./style.css"></style>
<template>
    <button @click="$emit('click')" 
        :disabled="disabled" 
        :class="btnClass" 
        :type="htmlType">
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
            htmlType: {
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
            btnSize() {
                let sizes = ['small', 'large', 'mini']

                return ~sizes.indexOf(this.size) ? `ui-button--${this.size}` : ''
            },
            btnType() {
                let types = ['success', 'loading', 'info', 'warn', 'primary', 'danger']

                return ~types.indexOf(this.type)
                        ? this.plain ? `ui-button--plain-${this.type}` : `ui-button--${this.type}`
                        : ''
            },
            btnClass() {
                return ['ui-button', this.btnSize, this.btnType]
            }
        }
    }
</script>
