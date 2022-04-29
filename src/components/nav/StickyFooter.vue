<template>
    <div class="sticky-footer overlay">
        <div class="row">
            <h4>Brush Options</h4>
        </div>
        <div class="row">
            <div class="col-md-3 sticker-footer-item">
                <fieldset>
                    <legend>Brush Size</legend>
                    <div class="form-inline">
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
                    <div class="form-inline">
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
                <div class="form-inline">
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
