<template>
    <span class="close-btn" @click="click">&times;</span>
</template>

<script>
    export default {
        name: 'CloseButton',
        props: {
            fontSize: {
                type: String,
                default: '35'
            }
        },
        methods: {
            click: function () {
                this.$emit('clicked');
            }
        }
    }
</script>

<style>
    .close-btn {
        font-size: v-bind(fontSize + 'pt');
        color: black;
        cursor: pointer;
    }
</style>
