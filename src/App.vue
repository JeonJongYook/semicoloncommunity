<template>
  <!-- <nav class="navbar navbar-expand navbar-dark bg-dark"> -->
      <!-- <a class="navbar-brand" href="http://localhost:8080">SemiColon</a> -->
      <!-- <header class="tc pv4 pv5-ns"> -->
        <!-- <img src="http://tachyons.io/img/logo.jpg" class="br-100 pa1 ba b--black-10 h3 w3" alt="avatar"><h4>Admin</h4> -->
        <!-- <h1 class="f5 f4-ns fw6 mid-gray">Jasper Whitehouse</h1> -->
        <!-- <h2 class="f6 gray fw2 ttu tracked">Los Angeles</h2> -->
      <!-- </header> -->
      <!-- <nav class="mb-4 navbar navbar-expand-lg navbar-dark cyan">
        <a class="navbar-brand font-bold" href="http://localhost:8080">SemiColon</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSuapportedContent-4">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:8080/login/success/setting"><i class="fa fa-gear"></i> 설정 </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i> 내 프로필 </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
                  <a class="dropdown-item" href="#">계정</a>
                  <a class="dropdown-item" href="http://localhost:8080/login">로그인</a>
                </div>
            </li>
          </ul>
        </div>
      </nav> -->
      <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
      <a class="navbar-brand" href="http:///192.168.101.2:8080/">
        SemiColon
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-list-4">
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle">
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="http://192.168.101.2:8080/login/success/dashboard">대시보드</a>
              <a class="dropdown-item" href="http://192.168.101.2:8080/login/success/profileedit">프로필 수정</a>
              <a class="dropdown-item" href="http://192.168.101.2:8080/login">로그인</a>
            </div>
          </li>   
        </ul>
      </div>
    </nav>

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
  /* margin-left: 10px; */
  font-size: 24px;
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

.ba {
  border-style: solid;
  border-width: 1px;
}

.b--black-10 {
  border-color: rgba(0, 0, 0, .1);
}

.br-100 {
  border-radius: 100%;
}

.fw2 {
  font-weight: 200;
}

.fw6 {
  font-weight: 600;
}

.h3 {
  height: 4rem;
  margin-left: 100px;
}

.tracked {
  letter-spacing: .1em;
}

.w3 {
  width: 4rem;
}

.mid-gray {
  color: #555;
}

.gray {
  color: #777;
}

.pa1 {
  padding: .25rem;
}
/* 
.pv4 {
  padding-top: 2rem;
  padding-bottom: 2rem;
} */

.tc {
    text-align: center;
}

.ttu {
    text-transform: uppercase;
}

.f5 {
    font-size: 1rem;
}

.f6 {
    font-size: .875rem;
}

@media screen and (min-width: 30em) {
    .pv5-ns {
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin-left: 1000px;
    }

    .f4-ns {
      font-size: 1.25rem;
    }
}

.hm-gradient {
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}

.navbar .dropdown-menu a:hover {
color: #616161 !important;
}

.darken-grey-text {
color: #2E2E2E;
}

.cyan {
  background-color: black !important; 
}

.navbar-expand-lg .navbar-nav .dropdown-menu {
  font-size: 26px important;
}

.bg-custom-1 {
  background-color: #85144b;
}

.bg-custom-2 {
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
}

</style>
