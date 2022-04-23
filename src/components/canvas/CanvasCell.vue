<template>
    <div class="canvas-cell"></div>
</template>

<script>

    export default {
        name: 'CanvasCell',
        props: {
            paintBrushColour: {
                type: String,
                validator(colour) {
                    return colour.length == 7; // e.g. '#FF00FF'
                },
                default() {
                    return '#FFFFFF'
                }
            },
            cellSize: {
                type: Number,
                default() {
                    return 20;
                }
            }
        }
    }
</script>

<style>
    .canvas-cell {
        border: solid 1px black;
        height: v-bind(cellSize + 'px');
        width: v-bind(cellSize + 'px');
    }
</style>
