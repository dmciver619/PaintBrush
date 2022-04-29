<template>
    <div v-click-outside="closeSideBar">
        <div id="sideNavToggle" class="side-bar-toggle-wrap">
            <span class="side-bar-toggle" @click="toggle">&#9776;</span>
        </div>
        <div id="sideNav" class="side-bar">
            <CloseButton class="close-btn" @clicked="closeSideBar"></CloseButton>
            <div class="side-bar-content">
                <br />
                <fieldset>
                    <legend>Paint Cell Size</legend>
                    <div class="form">
                        <div>
                            <input v-model="cellSize" @change="changeSetting" id="smallCell" type="radio" name="cellSize" value="small" />
                            <label for="smallCell">Small</label>
                        </div>
                        <div>
                            <input v-model="cellSize" @change="changeSetting" id="mediumCell" type="radio" name="cellSize" value="medium" />
                            <label for="mediumCell">Medium</label>
                        </div>
                        <div>
                            <input v-model="cellSize" @change="changeSetting" id="largeCell" type="radio" name="cellSize" value="large" />
                            <label for="largeCell">Large</label>
                        </div>
                    </div>
                </fieldset>
                <br />

                <div>
                    <label>Canvas Dimensions</label>
                    <div class="form-inline">
                        <label>
                            X-axis
                            <input v-model="numberOfCellsInRow" @change="changeIntSetting" name="numberOfCellsInRow" type="number" />
                        </label>
                        <label>
                            Y-axis
                            <input v-model="numberOfRows" @change="changeIntSetting" name="numberOfRows" type="number" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { settingsStore } from '../stores/settingsStore'

    import CloseButton from '../common/CloseButton'

    export default {
        name: 'SideBar',
        components: {
            CloseButton
        },
        setup() {
            const settings = settingsStore();

            return {
                settings
            }
        },
        data() {
            return {
                isOpen: false,
                cellSize: this.settings.cellSize,
                brushSize: this.settings.brushSize,
                brushShape: this.settings.brushShape,
                numberOfCellsInRow: this.settings.numberOfCellsInRow,
                numberOfRows: this.settings.numberOfRows
            }
        },
        methods: {
            toggle: function () {
                this.isOpen
                    ? this.closeSideBar()
                    : this.openSideBar();
            },
            closeSideBar: function () {
                this.isOpen = false;
                document.getElementById("sideNav").style.width = "0";
                document.getElementById("sideNavToggle").style.transform = "translateX(0)";
            },
            openSideBar: function () {
                this.isOpen = true;
                document.getElementById("sideNav").style.width = "250px";
                document.getElementById("sideNavToggle").style.transform = "translateX(250px)";
            },
            changeSetting: function () {
                this.settings.setSetting(event.currentTarget.name, event.currentTarget.value);
            },
            changeIntSetting: function () {
                this.settings.setSetting(event.currentTarget.name, parseInt(event.currentTarget.value));
            }
        }
    }
</script>