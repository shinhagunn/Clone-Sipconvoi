<template>
  <div id="app">
    <comp-header/>
    <router-view/>
    <comp-footer/>
  </div>
</template>

<script>
import compHeader from './components/header.vue'
import compFooter from './components/footer.vue'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    compHeader,
    compFooter
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  /* ------------------COMMON------------ */
  .container{
    width: 1080px;
    margin: 0px auto;
  }

  .row{
    margin: 0px -8px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .container + .container{
    margin-top: 16px;
  }

  .col-l-6{
    width: 50%;
    padding: 0 8px;
  }

  .col-l-4{
    width: calc(100% / 3);
    padding: 0px 8px;
  }
  
  .col-l-3{
    width: calc(100% / 4);
    padding: 0px 8px;
  }

  a{
      text-decoration: none;
      color: #000;
      margin-right: 14px;
      font-size: 15px;
  }

  a:hover{
      cursor: pointer;
      color: #40a9ff;
      transition: all 0.2s;

  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
