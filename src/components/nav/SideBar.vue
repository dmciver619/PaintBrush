<template>
    <div v-click-outside="closeSideBar">
        <div id="sideNavToggle" class="sideBarToggleWrap">
            <span class="sideBarToggle" @click="toggle">&#9776;</span>
        </div>
        <div id="sideNav" class="sidenav">
            <CloseButton class="close-btn" @clicked="closeSideBar"></CloseButton>
            <div class="contentWrapper">
                <br />
                <fieldset>
                    <legend>Paint Cell Size</legend>
                    <div class="row">
                        <div>
                            <input v-model="cellSize" @change="changeSetting" id="smallCell" type="radio" name="cellSize" value="small" />
                            <label for="smallCell">Small</label>
                        </div>
                        <div>
                            <input v-model="cellSize" @change="changeSetting" id="mediumCell" type="radio" name="cellSize" value="medium" />
                            <label for="mediumCell">Medium</label>
                        </div>
                        <div>
                            <input v-model="cellSize" @change="changeSetting" id="mediumCell" type="radio" name="cellSize" value="large" />
                            <label for="mediumCell">Large</label>
                        </div>
                    </div>
                </fieldset>
                <br />

                <div>
                    <label>Canvas Dimensions</label>
                    <div style="display:flex; justify-content:space-between;">
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

<style scoped>
    .close-btn {
        position:fixed;
        float: right;
        position: relative;
        top: -15px;
        right:5px;
    }

    .contentWrapper {
        width: 100%;
        padding: 30px 10px 10px 10px;
    }


    .sideBarToggle {
        font-size: 30px;
        color: antiquewhite;
        cursor: pointer;
        display: flex;
    }

    .sideBarToggleWrap {
        display: flex;
        justify-content: center;
        background-color: saddlebrown;
        border-radius: 0 5px 5px 0;
        width: 40px;
        height: 40px;
        transition: 0.5s;
    }


    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: saddlebrown;
        overflow-x: hidden;
        transition: 0.5s;
        white-space: nowrap;

    }

    .sidebar-option {
        cursor: pointer;
    }

    .row {
        overflow-x: hidden;
        white-space:nowrap;
        width: 250px;
        margin-left: auto;
    }

    .row > input[type="number"] {
        padding: 0;
    }

    input {
        max-width: 80px;
    }

    input[type="number"] {
        width: 60px;
    }

    span {
        margin: auto;
    }

    input[type="radio"] {
        margin: 0 10px;
    }
</style>
