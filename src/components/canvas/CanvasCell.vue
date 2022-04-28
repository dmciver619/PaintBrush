<template>
    <div class="canvas-cell"></div>
</template>

<script>
    import { settingsStore } from "../stores/settingsStore";


    export default {
        name: 'CanvasCell',
        setup() {
            const settings = settingsStore()

            return {
                settings
            }
        },
        data() {
            return {
                cellSize: this.settings.cellSize
            }
        },
        computed: {
            cellPixelSize() {
                switch (this.settings.cellSize) {
                    case 'small':
                        return 5;
                    case 'medium':
                        return 10;
                    default:
                        return 20;
                }
            }
        }
    }
</script>

<style>
    .canvas-cell {
        border: solid 1px black;
        height: v-bind(cellPixelSize + 'px');
        width: v-bind(cellPixelSize + 'px');
        touch-action: none;
    }
</style>
