<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light"> -->
  <!-- <nav class="navbar navbar-white bg-white navbar-expand-sm"> -->
  <!-- <nav class="navbar navbar-dark bg-dark"> -->
    <!-- <div class="container-fluid">
      <img src="https://i.imgur.com/oIlJHTO.png" alt="" width="100" height="60" class="d-inline-block align-text-top">
      <a class="navbar-brand" @click="fnMain" cursor="pointer">SemiColon</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a> -->
            <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle">
            </a> -->
            <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" @click="fnLogin">로그인</a></li>
              <li><a class="dropdown-item" @click="fnRegister">회원가입</a></li>
            </ul> -->
          <!-- </li>
        </ul>
      </div> -->
      <!-- <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul> -->
    <!-- </div> -->
  <!-- </nav> -->
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" @click="fnMain()">Semicolon</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Semicolon</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <!-- <li class="nav-item">
              <a class="nav-link active" aria-current="page" @onclick="fnProfileEdit()">프로필</a>
            </li> -->
            <!-- <li class="nav-item">
              <a class="nav-link" @click="fnLogin()">로그인</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="fnRegister()">회원가입</a>
            </li> -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                프로필
              </a>
              <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                <li><a class="dropdown-item" @click="fnCheck()">프로필</a></li>
                <li><a class="dropdown-item" @click="fnCheck()">설정</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a v-if="this.LoginStatus==false" class="dropdown-item" @click="fnCheck()">로그인</a></li>
                <li><a v-if="this.LoginStatus==true" class="dropdown-item" @click="fnCheck()">로그아웃</a></li>
              </ul>
            </li>
          </ul>
          <!-- 검색창 관련 코드 -->
          <!-- <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
  <div class="div-footer"></div>
    <footer class="footer">
      <p>&copy; CopyRight SemiColon</p>
    </footer>
</template>
<script>

export default {
  data() {
    return {
      LoginStatus: false,
      RegisterStatus: false,
    }
  },
  methods: {
    fnDashboard() {
      this.$router.push('/login/success/dashboard')
    },
    fnProfileEdit() {
      this.$router.push('/login/success/profileEdit')
    },
    // fnLogin() {
    //   this.$router.push('/login')
    // },
    // fnLogout() {
      //   this.$router.push('/logout')
    // },
    // fnRegister() {
    //   this.$router.push('/register')
    // },
    fnMain() {
      this.$router.push('/main')
    },
    fnWelcome() {
      this.$router.push('/welcome')
    },
    fnWarn() {
      alert("로그인 시 이용가능합니다.")
    },
    fnCheck() {
      if (this.LoginStatus == false) {
        alert("로그인 페이지로 이동합니다.");
        this.LoginStatus == true;
        console.log("status 변경");
        this.$router.push('/login');
        console.log("login페이지로 변경");
      }
      else if (this.RegisterStatus == false) {
        alert("회원가입 페이지로 이동합니다.");
        this.RegisterStatus == true;
        console.log("status 변경");
        this.$router.push('/register');
        console.log("register페이지로 변경");
      }
      else if (this.LoginStatus == true) {
        alert("환영합니다");
      }
      else {
        alert("관리자에게 문의해주세요");
      }
    }
  }
}
</script>

<style scoped>  

#app {
  margin: auto; 
  width:750px; 
  min-height:100%; 
  padding-top:71px;
  border-left:1px #D8D8D8 solid; 
  border-right:1px #D8D8D8 solid; 
  position:relative; 
  text-align:center;
}

body {
  padding: auto; 
  margin: auto; 
  -ms-user-select: none; 
  -moz-user-select: none; 
  -khtml-user-select: none; 
  -webkit-user-select: none;
  user-select: none;
}

.footer {
  background-color: #474747;
  color: white;
  margin: 0 auto;
  margin-top: 300px;
}

.navbar-nav {
  position: relative !important;
}

.dropdown .dropdown-menu .dropdown-item:hover {
  color: black !important;
  background-color: white !important;

}

#navbarNavDropdown {
  margin-left: auto !important;
  margin-top: auto !important;
  margin-bottom: auto !important;
  margin-right: auto !important;
}

/* .offcanvas-body {
  color: #000 !important;
  background-color: rgba(0,0,0,0.24) !important;
} */
/* 부트스트랩 관련 디자인 코드 */

/* END */

</style>
