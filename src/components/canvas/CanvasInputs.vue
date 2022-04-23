<template>
    <div class="canvas-input">
        <label for="canvasColourPicker">Paint Colour</label>
        <input v-model="paintBrushColour" v-on:change="colourUpdated" style="margin-right:35px;" type="color" />


        <label>Canvas Dimensions</label>
        <input v-model="numberOfCellsInRow" v-on:change="dimensionsUpdated" type="number" />
        x
        <input v-model="numberOfRows" v-on:change="dimensionsUpdated" type="number" />
    </div>
</template>

<script>

export default {
    name: 'CanvasInputs',
    data() {
        return {
            paintBrushColour: '#000000',
            numberOfCellsInRow: 50,
            numberOfRows: 20
        }
    },
    methods: {
        colourUpdated: function () {
            this.$emit("paintBrushColourChanged", this.paintBrushColour);
        },
        dimensionsUpdated: function () {
            this.$emit("dimensionsChanged", { numberOfCellsInRow: this.numberOfCellsInRow, numberOfRows: this.numberOfRows });
        }
    }
}
</script>

<style>

</style>
