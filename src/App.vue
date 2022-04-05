<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand" href="http://localhost:8080">SemiColon</a>
      <div class="profile">
        <h3><a href="http://localhost:8080/login/success/profile"><span class="material-icons md-36" onclick="GoUserProfile()">account_circle</span></a></h3>
      </div>
      <!-- <div class="navbar-nav ml-auto" v-if="currentUser">
        <li class="nav-item">
          <a href="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{currentUser.username}}
          </a>
        </li>
        <li class="nav-item">
          <a href class="nav-link" @click="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div> -->
    </nav>
  <!-- <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost:8080">SemiColon</a> -->
        <!-- <notifications /> -->
        
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
        <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0"> -->
        <!--   <button @click="onClick()" variant="primary" text="FF" class="align-baseline"></button> Button Text Avatar -->
          <!-- <li class="nav-item">
            <router-link to="/">홈&nbsp;&nbsp;</router-link> 
          </li> -->
          <!-- <li class="nav-item">
            <router-link to="/login"><span class="material-icons">login</span>로그인&nbsp;&nbsp;</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register"><span class="material-icons">how_to_reg</span>회원가입</router-link>
          </li> -->
        <!-- </ul> -->
        <!-- </div> -->
      <!-- </div>
    </nav>
  </header> -->
  <router-view/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <footer class="mt-5 py-5 bg-dark text-white">
		<p>&copy; CopyRight SemiColon</p>
  </footer>
</template>

<style scoped>  
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&display=swap');

#app {
  margin:0 auto; 
  width:750px; 
  min-height:100%; 
  padding-top:71px;
  border-left:1px #D8D8D8 solid; 
  border-right:1px #D8D8D8 solid; 
  position:relative; 
  text-align:center;
}

body {
  padding:0; 
  margin:0; 
  -ms-user-select: none; 
  -moz-user-select: none; 
  -khtml-user-select: none; 
  -webkit-user-select: none;
  user-select: none;
}

@media(max-width:750px){
  #app{ 
    width:100%; 
    border-left:0; 
    border-right:0; 
  }
}
	
/* footer{border-top:1px solid #35495e; text-align:center; font-size:16px; color:#41b883; margin:100px 0 0 0;} */
footer p{
  text-align:center; 
  font-size:18px; 
  /* margin:100px 0 0 0; */
}
/* navbar */
.navbar-collapse {
  text-align:center; 
  position:relative; 
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-family: 'Black Han Sans', sans-serif; */
  font-family: 'Dongle', sans-serif;
}

.navbar-collapse::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 4px;
  background: #f1c40f;
  transition: all .5s ease-out;
}

.navbar-collapse::hover::after {
  width: 100%;
}

.navbar-dark .navbar-brand {
  font-family: 'Dela Gothic One', cursive;
  margin-left: 10px;
  /* font-family: 'IBM Plex Sans KR', sans-serif; */
}

.navbar-dark .navbar-brand::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 4px;
  background: #f1c40f;
  transition: all .5s ease-out;
}

.navbar-dark .navbar-brand::hover::after {
  width: 100%;
}

div .profile h3{
  text-align: center;
  margin-left: 1160px;
  color: white;
  flex: 0 1 auto;
  margin-top: 5px;
}

/* 
nav div a{
  text-align:center; 
  position:relative; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Black Han Sans', sans-serif;
  /* top: 0; */
  /* left: 0; */
  /* right: 0; 
} */
/* header ul.menu:after{display:block; clear:both; content:'';}
/* header ul.menu:after{display:flex; clear:both; content:'';position:relative;justify-content: space-between; align-items: center;} */
/* header ul.menu{position:absolute; top:20px; right:1000px;} */
/* header ul.menu{position:relative; top:20px; right:1000px;display: flex;justify-content: space-between;align-items: center;} */
/* header ul.menu nav{
  float: left; 
  padding: 15px 20px; 
  list-style:none; 
  font-family: 'Black Han Sans', sans-serif;
  font-size: 22px;
  box-sizing: border-box
}  */

a{
  text-decoration:none; 
  color: white;
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
    url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
    url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

/* Rules for sizing the icon. */
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

/* Rules for using icons as black on a light background. */
.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

/* Rules for using icons as white on a dark background. */
.material-icons.md-light { color: rgba(255, 255, 255, 1); }
.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

/* .navbar-expand-lg .navbar-collapse {
  position: absolute;
  top: 0;
  right: 10px;
  padding: 20px;
} */
/* .b-list-group b-list-item {
  position: absolute;
  top: 0;
  right: 10px;
  /* padding: 20px;
} */
</style>
