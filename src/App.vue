<template>
    <SideBar :settings="settings" @settingsChanged="settings = $event" ref="sideBar"></SideBar>
    <Canvas></Canvas>
    <StickyFooter></StickyFooter>
</template>

<script>
    import Canvas from './components/canvas/Canvas.vue'
    import SideBar from './components/nav/SideBar.vue'
    import StickyFooter from './components/nav/StickyFooter.vue'

    export default {
        name: 'App',
        components: {
            Canvas,
            SideBar,
            StickyFooter
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

<style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

</style>
