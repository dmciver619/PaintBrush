<template>
    <div id="canvas">
        <div v-for="row in 3" v-bind:key="row" class="canvas-row">
            <CanvasCell v-for="rowCell in 4" v-bind:key="rowCell" :paintBrushColour="paintBrushColour"></CanvasCell>
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
            }
        },
        data() {
            return {
                numberRows: 5,
                numberCellsPerRow: 10
            }
        }
}
</script>

<style>
    .canvas-row {
        display: flex;
    }
</style>
