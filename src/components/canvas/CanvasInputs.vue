<template>
    <div class="canvas-input">
        <label for="canvasColourPicker">Paint Colour</label>
        <input v-model="paintBrushColour" v-on:change="colourUpdated" style="margin-right:35px;" type="color" />


        <label>Canvas Dimensions</label>
        <input v-model="numberOfCellsInRow" type="number" />
        x
        <input v-model="numberOfRows" type="number" />
    </div>
</template>

<script>

export default {
    name: 'CanvasInputs',
    data() {
        return {
            paintBrushColour: '#FFFFFF',
            numberOfCellsInRow: 4,
            numberOfRows: 5
        }
    },
    methods: {
        colourUpdated: function () {
            this.$emit("paintBrushColourChanged", this.paintBrushColour);
        }
    }
}
</script>

<style>
    .canvas-cell {
        border: solid 1px black;
        height: 20px;
        width: 20px;
    }
</style>
