<template>
    <BaseCanvas :paintBrushColour="paintBrushColour"></BaseCanvas>
    <CanvasInputs @paintBrushColourChanged="setColour($event)"></CanvasInputs>
</template>

<script>
    import BaseCanvas from './BaseCanvas'
    import CanvasInputs from './CanvasInputs'

    export default {
        name: 'Canvas',
        components: {
            BaseCanvas,
            CanvasInputs
        },
        data() {
            return {
                paintBrushColour: '#FFFFFF'
            }
        },
        methods: {
            setColour: function (colour) {
                this.paintBrushColour = colour;
            }
        }
    }
</script>

