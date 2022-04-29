<template>
    <div id="canvas" @click="paint" @mouseover="paint" draggable="false" ondragstart="return false;" ondrop="return false;">
        <div v-for="row in settings.numberOfRows" :key="row" class="canvas-row">
            <CanvasCell :id="row + '-' + rowCell" v-for="rowCell in settings.numberOfCellsInRow" :key="rowCell"></CanvasCell>
        </div>
    </div>
</template>

<script>
    import { settingsStore } from '../stores/settingsStore';
    import CanvasCell from './CanvasCell'

    export default {
        name: 'BaseCanvas',
        components: {
            CanvasCell
        },
        setup() {
            const settings = settingsStore();

            return {
                settings
            }
        },
        data() {
            return {
                numberOfCellsInRow: this.settings.numberOfCellsInRow,
                numberOfRows: this.settings.numberOfRows
            }
        },
        computed: {
            brushSize() {
                switch (this.settings.brushSize) {
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
                if (!this.paintRequestIsValid(event)) {
                    return;
                }

                var centreCell = event.target;
                this.paintCell(centreCell);

                // Paint neighbouring cells for larger brush size
                var brushDiameter = this.brushSize - 1;
                if (brushDiameter == 0) {
                    return;
                }

                var canvas = document.getElementById('canvas');
                var brushRadius = brushDiameter / 2;
                if (this.settings.brushShape === 'normal') {
                    this.paintRadius(centreCell, canvas, brushRadius);
                }
                else if (this.settings.brushShape === 'square') {
                    this.paintRectangle(canvas, brushRadius, brushRadius, centreCell);
                }
            },
            paintCell: function (cellToPaint) {
                if (cellToPaint) {
                    cellToPaint.style.backgroundColor = this.settings.brushColour;
                }
            },
            paintRadius: function (centreCell, canvas, radius) {
                // Coords of centreCell (-1 to take into account index starting at 0)
                var centreCellXId = parseInt(centreCell.id.split('-')[1]) -1;
                var centreCellYId = parseInt(centreCell.id.split('-')[0]) - 1;

                for (let i = 0; i <= radius; i++) {
                    // Get cell ids
                    var upCellYId = centreCellYId - i;
                    var rightCellXId = centreCellXId + i;
                    var downCellYId = centreCellYId + i;
                    var leftCellXId = centreCellXId - i;

                    // Get cells
                    var upCell = this.getCellByIndex(canvas, centreCellXId, upCellYId);
                    var rightCell = this.getCellByIndex(canvas, rightCellXId, centreCellYId);
                    var downCell = this.getCellByIndex(canvas, centreCellXId, downCellYId);
                    var leftCell = this.getCellByIndex(canvas, leftCellXId, centreCellYId);

                    // Paint cells
                    this.paintCell(upCell);
                    this.paintCell(rightCell);
                    this.paintCell(downCell);
                    this.paintCell(leftCell);
                }
            },
            paintRectangle: function (canvas, length, height, topLeftCell) {
                // Coords of top left cell (-1 to take into account index starting at 0)
                var cellXId = parseInt(topLeftCell.id.split('-')[1]) - 1 - (length/2);
                var cellYId = parseInt(topLeftCell.id.split('-')[0]) - 1 - (height/2);

                // Find max x and max y indexes
                var maxYId = cellYId + height;

                // Paint rectangle
                for (let y = cellYId; y <= maxYId; y++) {
                    var cell = this.getCellByIndex(canvas, cellXId, y);
                    this.paintHorizontalLine(canvas, cell, length);
                }
            },
            paintHorizontalLine: function (canvas, firstCell, length) {
                // Get line starting point
                var firstCellXId = parseInt(firstCell.id.split('-')[1]) - 1;
                var firstCellYId = parseInt(firstCell.id.split('-')[0]) - 1;

                var endingXId = firstCellXId + length;

                for (let i = firstCellXId; i <= endingXId; i++) {
                    var cell = this.getCellByIndex(canvas, i, firstCellYId);
                    this.paintCell(cell);
                }
            },
            paintRequestIsValid: function (event) {
                // If mouse1 is not already down or is clicking cell, return
                if (event.buttons != 1 && event.type != 'click') {
                    return false;
                }

                if (event.target.id == 'canvas' || event.target.classList.contains('canvas-row')) {
                    return false;
                }

                return true;
            },
            getCellByIndex: function (canvas, xIndex, yIndex) {
                // Validate get request
                var xIndexIsValid = xIndex >= 0 && xIndex < this.settings.numberOfCellsInRow;
                var yIndexIsValid = yIndex >= 0 && yIndex < this.settings.numberOfRows;
                if (!xIndexIsValid || !yIndexIsValid) {
                    return;
                }

                var rows = canvas.children;
                return rows.item(yIndex).children.item(xIndex);
            }
        }
    }
</script>
