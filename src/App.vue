<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-white static-top">
    <div class="container-fluid">
      <a class="navbar-brand" @click="fnWelcome()" cursor="pointer">SemiColon</a>
    </div>
    <ul class="navbar-nav">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle">
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" @click="fnLogin()">로그인</a></li>
        <li><a class="dropdown-item" @click="fnRegister()">회원가입</a></li>
      </ul>
    </ul>
  </nav>
  <router-view/>
  <div class="div-footer">
    <footer class="footer"> 
      <p>&copy; CopyRight SemiColon</p>
    </footer>
  </div>
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
    fnLogin() {
      this.$router.push('/login')
    },
    fnRegister() {
      this.$router.push('/register')
    },
    fnPost() {
      this.$router.push('/userPost')
    },
    fnWelcome() {
      this.$router.push('/')
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
    },
  },
};
</script>

<style scoped>
  
@import url("https://fonts.googleapis.com/css2/family=Roboto:wght@300;400;500;700;900&");

#app {
  border-left:1px #D8D8D8 solid;
  border-right:1px #D8D8D8 solid; 
  position:relative; 
  transform: translateY(-100%);
  min-height: 100%;
  text-align:center;
  height: auto;
  padding-bottom: 49.7px;
}

body {
  -ms-user-select: none; 
  -moz-user-select: none; 
  -khtml-user-select: none; 
  -webkit-user-select: none;
  user-select: none;
}

.footer {
  height: 49.7px;
  background-color: #474747;
  color: white;
  position: relative;
  transform: translateY(1000%);
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

</style>
