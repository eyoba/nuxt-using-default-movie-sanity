<template>
  <header id="app-header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-auto mr-auto">
          <router-link to="/">
            <img class="img-fluid logo" src="@/assets/nsdlogo.png" />
          </router-link>
        </div>

        <div class="col-auto" right>
          <b-nav>
           <nuxt-link to="/movies"  class="nav-link nav-link-custom">movies</nuxt-link>
            <nuxt-link to="/people"  class="nav-link nav-link-custom">people</nuxt-link>
          </b-nav>
        </div>
      </div>
    </div>
  </header>


</template>

<style lang="scss">

  #app-header {
    background-color: #3a5a8a;
  .title {
    color: white;
    font-size: larger;
    font-weight: bold;
  }
  .logo {
    max-width: 100%;
    height: 86px;
    min-height: 86px;
    max-height: 86px;
    padding-top: 15px;
    padding-bottom: 15px;

    cursor: pointer;
  }
  .nav-link-custom {
    color: #fff !important;
  }
  #header-nav {
  .nav-item {
  .nav-link {
    color: #fff !important;
  }
  }
  }
  }


</style>
