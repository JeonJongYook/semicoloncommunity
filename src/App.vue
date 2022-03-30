<template>
  <!-- <header> -->
		<!-- <div class="menuWrap">
			<ul class="menu">
				<nav><router-link to="/">홈</router-link>&nbsp;</nav>
				<nav><router-link to="/login">로그인</router-link>&nbsp;</nav>
				<nav><router-link to="/register">회원 가입</router-link>&nbsp;</nav>
			</ul>
		</div> -->
	<!-- </header> -->

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="http://localhost:8080">SemiColon</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/"><span class="material-icons">home</span>홈&nbsp;&nbsp;</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login">로그인&nbsp;&nbsp;</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register">회원가입</router-link>
          </li>
        </ul>
      </div>
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
  <!-- <footer>
    <br/>
		<p>&copy; CopyRight SemiColon</p>
	</footer> -->
</template>

<style scoped>  
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400&display=swap');


/* #app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
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

.material-icons {
  /* bottom: -30px; */
  position: relative;
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
</style>

<script>
</script>