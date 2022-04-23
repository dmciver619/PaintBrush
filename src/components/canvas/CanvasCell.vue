<template>
    <div class="canvas-cell" :style="{ background: colour }" @mouseover="paint()" v-on:click="paint()"></div>
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
        },
        data() {
            return {
                colour: '#FFFFFF'
            }
        },
        methods: {
            paint: function () {
                if (event.buttons == 1 || event.type == 'click') {
                    this.colour = this.paintBrushColour
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
