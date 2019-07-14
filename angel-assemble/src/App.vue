<template>
    <!-- <div class="pos-f-t">
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
    </div> -->
    <!-- here -->
    <div id="app" class="wrapper" style="display: flex;">
      <nav id="sidebar">
        <div class="sidebar-header">
          <h3><i class="fas fa-bars"></i> GUDOME</h3>
        </div>
        <ul class="list-unstyled components">
          <li>
            <router-link tag="p" to="/"><a class="nav-link" href="#"><i class="fas fa-home"></i> HOME</a></router-link>
          </li>
          <li>
            <router-link tag="p" to="/profile"><a class="nav-link" href="#"><i class="fas fa-portrait"></i> Profile</a></router-link>
          </li>
          <li>
            <router-link tag="p" to="/protected"><a class="nav-link" href="#"><i class="fas fa-user"></i> My Page</a></router-link>
          </li>
          <li>
            <router-link tag="p" to="/auth" v-if="!signedIn"><a class="nav-link" href="#"><i class="fas fa-hand-point-right"></i> Sign Up / Sign In</a></router-link>
          </li>
        </ul>
      </nav>
      <div id="content" class="container">
        <h5 class="home-title">GUDOME</h5>
        <router-view/>
      </div>
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

/*
    ADDITIONAL DEMO STYLE, NOT IMPORTANT TO MAKE THINGS WORK BUT TO MAKE IT A BIT NICER :)
*/
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";


body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

#sidebar {
    /* don't forget to add all the previously mentioned styles here too */
    background: #00B0F0;
    color: #fff;
    transition: all 0.3s;
    position: fixed;
    min-height: 100vh;
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #00B0F0;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}
#sidebar ul li a:hover {
    color: #00B0F0;
    background: #fff;
}

#sidebar ul li.active > a, a[aria-expanded="true"] {
    color: #fff;
    background: #00B0F0;
}
ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #00B0F0;
}
</style>
