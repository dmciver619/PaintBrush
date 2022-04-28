<template>
    <div class="sticky-footer">
        <div class="row">
            <h4>Brush Options</h4>
        </div>
        <div class="row">
            <div class="col-md-3 sticker-footer-item">
                <fieldset>
                    <legend>Brush Size</legend>
                    <div class="form">
                        <div class="form-group">
                            <input v-model="brushSize" @change="changeSetting" id="smallBrush" type="radio" name="brushSize" value="small" />
                            <label for="smallBrush">
                                <p>Small</p>
                            </label>
                        </div>

                        <div class="form-group">
                            <input v-model="brushSize" @change="changeSetting" id="mediumBrush" type="radio" name="brushSize" value="medium" />
                            <label for="mediumBrush">
                                <p>Medium</p>
                            </label>
                        </div>

                        <div class="form-group">
                            <input v-model="brushSize" @change="changeSetting" id="largeBrush" type="radio" name="brushSize" value="large" />
                            <label for="largeBrush">
                                <p>Large</p>
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="col-md-3 sticker-footer-item">
                <fieldset>
                    <legend>Brush Shape</legend>
                    <div class="form">
                        <div class="form-group">
                            <input v-model="brushShape" @change="changeSetting" id="normalBrush" type="radio" name="brushShape" value="normal" />
                            <label for="normalBrush">
                                <p>Normal</p>
                            </label>
                        </div>

                        <div class="form-group">
                            <input v-model="brushShape" @change="changeSetting" id="squareBrush" type="radio" name="brushShape" value="square" />
                            <label for="squareBrush">
                                <p>Square</p>
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="col-md-3 sticker-footer-item">
                <h3>Brush Colour</h3>
                <div class="form">
                    <div class="form-group">
                        <label for="canvasColourPicker">Paint Colour</label>
                        <input v-model="brushColour" name="brushColour" @change="changeSetting" type="color" />
                    </div>
                </div>
            </div>
            <div class="col-md-3 sticker-footer-item">
                <h3>Test</h3>
            </div>
        </div>

    </div>
</template>

<script>
    import { settingsStore } from '../stores/settingsStore'

    export default {
        name: 'StickyFooter',
        setup() {
            const settings = settingsStore();

            return {
                settings
            }
        },
        data() {
            return {
                brushColour: this.settings.brushColour,
                brushSize: this.settings.brushSize,
                brushShape: this.settings.brushShape
            }
        },
        methods: {
            changeSetting: function () {
                this.settings.setSetting(event.currentTarget.name, event.currentTarget.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sticky-footer {
        position: sticky;
        bottom: 0;
        height: 150px;
        width: 75%;
        background-color: saddlebrown;
        color:antiquewhite;
        margin: auto;
        padding: 10px;
        border-radius: 5px;
    }

    .sticker-footer-item {
        border-right: 1px solid antiquewhite;

        &:last-of-type {
            border-right: none;
        }
    }

    .square {
        border: black 1px solid;
        height: 30px;
        width: 30px;
        background-color: v-bind(brushColour)
    }

    .square-sm {
        @extend .square;

        height: 15px;
        width: 15px;
    }
    .square-md {
        @extend .square;

        height: 23px;
        width: 23px;
    }
    .square-lg {
        @extend .square;
    }

    .form {
        display: flex;
        justify-content: space-evenly;
    }

    .radio-card {
        height: 60px;
        width: 75px;
        position: relative;
    }

    .card.form-group {
        width: 75px;
    }

    input[name="brushColour"] {
        margin-left: 10px;
    }

</style>
