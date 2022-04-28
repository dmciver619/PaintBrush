import { defineStore } from 'pinia'

export const settingsStore = defineStore("counter", {
    state: () => ({
        brushSize: 'small',
        cellSize: 'large',
        brushShape: 'normal',
        brushColour: '#000000',
        numberOfCellsInRow: 50,
        numberOfRows: 20
    }),
    getters: {
        cellPixelSize: (state) => {
            debugger;
            switch(state.cellSize) {
                case 'small':
                    return 5;
                case 'medium':
                    return 10;
                default:
                    return 20;
            }
        }
    },
    actions: {
        setSetting: function (settingName, settingValue) {
            if (settingName == null || settingName.replace(' ', '') == '') {
                throw new Error('Setting name not given');
            }

            this[settingName] = settingValue;
        }
    }
})