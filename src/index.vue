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
                let cls = ['ui-button'],
                    types = ['success', 'loading', 'info', 'warn', 'primary', 'danger'],
                    sizes = ['small', 'large', 'mini'],
                    {type, size} = this

                if(types.indexOf(type) > -1){
                    cls.push(this.plain
                        ? `ui-button--plain-${type}`
                        : `ui-button--${type}`
                    )
                }
                if(size && sizes.indexOf(size) > -1){
                    cls.push(`ui-button--${size}`)
                }
                return cls
            }
        },
        methods: {}
    }
</script>
