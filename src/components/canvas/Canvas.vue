<template>
    <h1 class="center">Paint Brush App</h1>
    <div class="canvas center">
        <BaseCanvas></BaseCanvas>
    </div>
</template>

<script>
    import BaseCanvas from './BaseCanvas'

    export default {
        name: 'Canvas',
        components: {
            BaseCanvas
        }
    }
</script>