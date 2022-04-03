<template>
    <div id="canvas">
        <div v-for="row in numberOfRows" v-bind:key="row" class="canvas-row">
            <CanvasCell v-for="rowCell in numberOfCellsInRow" v-bind:key="rowCell" :paintBrushColour="paintBrushColour"></CanvasCell>
        </div>
    </div>
</template>

<script>
    import CanvasCell from './CanvasCell'

    export default {
        name: 'BaseCanvas',
        components: {
            CanvasCell
        },
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
            numberOfCellsInRow: {
                type: Number,
                validator(numberOfCellsInRow) {
                    return numberOfCellsInRow > 0;
                },
                default() {
                    return 50;
                }
            },
            numberOfRows: {
                type: Number,
                validator(numberOfRows) {
                    return numberOfRows > 0;
                },
                default() {
                    return 20;
                }
            }
        }
}
</script>

<style>
    .canvas-row {
        display: flex;
    }
</style>
