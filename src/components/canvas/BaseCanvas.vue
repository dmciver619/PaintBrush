<template>
    <div id="canvas" @click="paint" @mouseover="paint">
        <div v-for="row in numberOfRows" v-bind:key="row" class="canvas-row">
            <CanvasCell v-for="rowCell in numberOfCellsInRow" v-bind:key="rowCell" :cellSize="cellSize" :paintBrushColour="paintBrushColour"></CanvasCell>
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
            },
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
        computed: {
            brushSize() {
                switch (this.settings.cellSize) {
                    case 'small':
                        return 1;
                    case 'medium':
                        return 3;
                    default:
                        return 5;
                }
            },
            cellSize() {
                switch (this.settings.cellSize) {
                    case 'small':
                        return 5;
                    case 'medium':
                        return 10;
                    default:
                        return 20;
                }
            }
        },
        methods: {
            paint: function () {
                if (event.buttons == 1 || event.type == 'click') {
                    event.target.style.backgroundColor = this.paintBrushColour;
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
