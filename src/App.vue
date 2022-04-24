<template>
    <SideBar :settings="settings" @settingsChanged="settings = $event" ref="sideBar"></SideBar>
    <h1>Paint Brush App</h1>
    <Canvas :settings="settings"></Canvas>
</template>

<script>
    import Canvas from './components/canvas/Canvas.vue'
    import SideBar from './components/nav/SideBar.vue'

    export default {
        name: 'App',
        components: {
            Canvas,
            SideBar
        },
        data() {
            return {
                settings: {
                    brushSize: 'small',
                    brushShape: 'normal',
                    cellSize: 'large'
                }
            }
        }
    }
</script>

<style scoped>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

</style>
