<template>
    <CanvasInputs @paintBrushColourChanged="setColour($event)" @dimensionsChanged="setCanvasDimensions($event)"></CanvasInputs>
    <div class="canvas center">
        <BaseCanvas :settings="settings" :paintBrushColour="paintBrushColour" :numberOfCellsInRow="numberOfCellsInRow" :numberOfRows="numberOfRows"></BaseCanvas>
    </div>
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
        props: {
            settings: {
                type: Object,
                default() {
                    return {
                        brushSize: 'small',
                        cellSize: 'large'
                    }
                }
            }
        },
        data() {
            return {
                paintBrushColour: '#000000',
                numberOfCellsInRow: 50,
                numberOfRows: 20
            }
        },
        methods: {
            setColour: function (colour) {
                this.paintBrushColour = colour;
            },
            setCanvasDimensions: function (dimensions) {
                this.numberOfCellsInRow = dimensions.numberOfCellsInRow;
                this.numberOfRows = dimensions.numberOfRows;
            }
        }
    }
</script>

<style>
    .center {
        display: flex;
        justify-content:center;
    }
    .canvas {
        margin: 10px;
    }
</style>