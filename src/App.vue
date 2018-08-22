<template>
  <div class="container nebulas-smart-contracts-lint">

    <Editor></Editor>


  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import EslintEditor from "vue-eslint-editor"
import Editor from './components/Editor.vue'

export default {
  name: 'app',
  data(){
      return {
          // linter: null,
          // config: {},
          // code: '===='
      }
  },
  components: {
    // HelloWorld, EslintEditor,
    Editor
  },
  async mounted() {
      // const { default: Linter } = await import("eslint4b")
      // this.linter = new Linter()
  },
}
</script>

<style lang="scss">



html,body{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.nebulas-smart-contracts-lint{
  background-color: gray;
  width: 100%;
  min-width: 600px;
  height: 100%;
}
#app {
  height: 100%;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
