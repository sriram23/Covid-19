<template>
  <div>
    <Ribbon fixed text="In production" color='#2c3e50' position='right-bottom'	/>
    <Navbar />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';
import Ribbon from 'vue-ribbon';

export default {
  name: 'App',
  components: {
    Navbar,
    Ribbon,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
