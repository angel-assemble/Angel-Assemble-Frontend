<template>
  <div id="app">
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">GUDOME</h5>
          <br>
          <span class="text-muted"><router-link tag="p" to="/" ><a style="color:gray">HOME</a></router-link></span>
          <span class="text-muted"><router-link tag="p" to="/profile"><a style="color:gray">Profile</a></router-link></span>
          <span class="text-muted"><router-link tag="p" to="/protected" ><a style="color:gray">My Page</a></router-link></span>
          <span class="text-muted"> <router-link tag="p" to="/auth" v-if="!signedIn"><a style="color:gray">Sign Up / Sign In</a></router-link></span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
    <h5 class="home-title">GUDOME</h5>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.top {
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: -0.3px;
  color: #212121;
}

.score {
  color: #467B0A;
  padding-top: 15px;
  padding-bottom: 8px;

}

.main {
  font-family: SDGothicNeoa-gBd;
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: -0.3px;
  color: #212121;
}

.list-group-item{
  border-left-width: 0px;
  border-right-width: 0px;
  padding-left: 44px;
}

.guide-title {
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.77;
  letter-spacing: -0.2px;
  color: #ee400d;
}

.home-title {
  font-size: 50px;
  padding-top: 50px;
  padding-bottom: 50px;

}
</style>
