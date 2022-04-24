import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.directive("click-outside", {
    mounted(el, binding) {
        if (typeof binding.value !== 'function') {
            throw new Error('Value is not a function');
        }
        el.clickOutsideEvent = (event) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value();
            }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
    },
});

app.use(createPinia());

app.mount('#app');