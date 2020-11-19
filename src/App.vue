<template>
  <div id="app">
    <b-navbar class="navbar" toggleable="lg" variant="warning">
    <b-navbar-brand to= "/">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Left aligned nav items -->
      <b-navbar-nav>
        <b-nav-item to="/test">Test</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!--end navbar-->

  <router-view class="text-break"></router-view>
   
  </div>
</template>

<script>
//Imports

//Exports
export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #190838 !important;
}
.navbar{
  margin-bottom: 60px;
  color:#190838 !important;
}
.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus{
  color: #190838 !important;
}
</style>
