<template lang="ko">
	<div class="black-bg" v-show="is_show">
		<div class="white-bg">
			<h4>안녕</h4>
			<p>상세페이지 내용</p>
			<button @click="handle_toggle" type="button">모달창 닫기</button>
		</div>
	</div>
	<div class="login">
		<h1>SemiColon</h1>
		<br/>
		<form class="LoginForm">
			<p>
				<label for="memberIdInput" pattern="^(?=.*\d)(?=.*[a-z]).{5,15}">ID</label>&nbsp;
				<input type="text" id="memberIdInput" class="input_text" ref="memberIdInput" v-model.trim="memberId" placeholder="아이디를 입력하세요." />
			</p>
			<p>
				<label for="memberPasswordInput" pattern="^(?=.*\d)(?=.*[a-z]).{8,15}">PW</label>
				<input type="password" id="memberPasswordInput" class="input_text" ref="memberPasswordInput" v-model.trim="memberPassword" placeholder="패스워드를 입력하세요." />
			</p>
			<div class="login_etc">
                <div class="checkbox">
                <input type="checkbox" name="SaveSession" id="SaveSession"> 정보를 저장할까요?
                </div>
				<br />
                <div class="forgot_account">
                <a @click="fnFindId"> 아이디 </a> 혹은 <a @click="fnFindPw"> 비밀번호를 </a>잊으셨나요?
				</div>
            </div>
			<br />
			<div class="SubmitAccount">
				<span>만약 계정이 없다면, <router-link to="/register">회원가입</router-link>을 먼저 진행해주세요!</span>
			</div>
			<p class="buttons">
				<!-- <button @click.prevent="doLogin" class="button blue" id="loginButton">로그인</button> -->
				<button @click.prevent="checkExistData" @keyup.enter="submit" class="button blue" name="loginButton" id="loginButton">로그인</button>
				<button @click.prevent="doCancel" class="button">취소</button>
			</p>
		</form>
	</div>

</template>

<script>

export default {
	name: 'LoginForm',
	data : function() {
		return {
			TotalModalStatus: false,	// 모든 modal 상태 저장
			LoginModalStatus: false,	//  로그인 버튼 클릭 시
			CancelModalStatus: false,	//  취소 버튼 클릭 시
			IdModalStatus: false,		// Id 입력 요구 Modal
			PwModalStatus: false,		// Pw 입력 요구 Modal
			is_show: false,
			memberId : '',
			memberPassword : '',
			errorMessage : '',
		};
	},
	methods : {
        checkAll() {
            if (!this.checkUserId(this.$refs.memberIdInput.value)) {
                return false;
            } else if (!this.checkPassword(this.$refs.memberIdInput.value, this.$refs.memberPasswordInput.value)) {
                return false;
            } else {
                return true;
            }
        },
        checkExistData() {
            if (this.memberId == "") {
				alert("아이디를 입력해주세요!");
				this.$refs.memberIdInput.focus();
				return true;

            } else if (this.memberPassword == "") {
				alert("비밀번호를 입력해주세요!");
				this.$refs.memberPasswordInput.focus();
				return true;
            } else if (this.memberId == "admin1234" && this.memberPassword == "admin1234!") {
                alert(this.memberId + "님 환영합니다.");
                return true;
            } 
            return false;
        },
        checkUserId(id) {
            if(!this.checkExistData(id, "아이디를"))
            return false;

            var idRegExp = /^[a-zA-z0-9]{8,16}$/;
            if(!idRegExp.text(id)) {
                alert("아이디는 영문 대소문자와 숫자 8~16자리로 입력해야 합니다.");
                this.$refs.memberIdInput.value == "";
                this.$refs.memberIdInput.value.focus();
                return false;
            }
            return true;
        },
        checkPassword(id, password1) {
            if (!this.checkExistData(password1, "비밀번호를"))
            return false;

            var password1RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
            if (!password1RegExp.test(password1)) {
                alert("비밀번호는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!");
                this.$refs.memberPasswordInput.value = "";
                this.$refs.memberPasswordInput.focus();
                return false;
            }

            if (id == password1) {
                alert("아이디와 비밀번호는 같을 수 없습니다!");
                this.$refs.memberPasswordInput.value = "";
                this.$refs.memberPasswordInput.focus();
                return false;
            }
            return true;
        },
		doLogin() {
			if (this.memberId == "") {
				alert("아이디를 입력해주세요!");
				this.$refs.memberIdInput.focus();
				return true;
			} else if (this.memberPassword == "") {
				alert("비밀번호를 입력해주세요!");
				this.$refs.memberPasswordInput.focus();
				return true;
                
            } else if (this.memberId == "admin1234" && this.memberPassword == "admin1234!") {
                alert(this.memberId + "님 환영합니다.");
                return true;
            }
            return false;
		},
		doCancel() {
			this.$refs.memberIdInput.value = '';
			this.$refs.memberPasswordInput.value = '';
			this.$refs.memberIdInput.focus();
		},
		fnFindId() {
			// this.$refs.memberIdInput && this.memberPasswordInput.trim();
			this.$router.push('/findId')
		},
		fnFindPw() {
			// this.$refs.memberIdInput && this.memberPasswordInput.trim();
			this.$router.push('/findPw')
		},
	},
	mounted() {
		this.$refs.memberIdInput.focus();
	}
};
</script>

<style scoped>
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
/* Import End */

body {
	margin: 0
}

div {
	box-sizing: border-box;
}

.black-bg {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	padding: 20px;
}

.white-bg {
	width: 100%;
	background: white;
	border-radius: 8px;
	padding: 20px;
}

div .login { background-color: white; }

.login { 
	width: 800px; 
	margin: 20px auto;
}
.login h1 { 
	text-align: center; 
	font-family: 'Black Han Sans', sans-serif; 
}
.LoginForm { 
	margin: auto; 
	text-align: left;
}
.LoginForm p > label { 
	display: inline-block; 
	font-size: 24px; 
	padding-right: 16px;
	align-items: center; 
	font-family: 'Black Han Sans', sans-serif; 
}
.LoginForm p > .input_text { 
	width: 100%;
	height: 50px;
	text-align: center;
	font-family: 'Jua', sans-serif;
	border-radius: 30px;
	margin-top: 10px;
	outline: none;
	font-size: 22px;
	align-items: center;
}

.LoginForm p > .input_text:focus { 
	font-size: 160%;
}

.buttons { 
	position:relative; 
	height:32px; 
	margin-top:20px; 
	text-align: center;
}
/* .buttons > .button { overflow:visible; cursor:pointer; min-width:125px; height:32px; margin:0 2px; padding:0 15px; line-height:32px; font-size:14px; border:1px solid #dfdfdf; background:#fff; border-radius:10px;  margin-top: 20px; width: 80%; font-weight: bold; } */
.buttons > .button { 
	overflow: visible; 
	cursor: pointer; 
	min-width:125px; 
	height: 40px;
	margin:0 2px; 
	padding:0 15px; 
	line-height: 32px; 
	font-size: 1.2em;
	border: 0;
	/* border:1px solid #dfdfdf;  */
	background: #D3D3D3; 
	border-radius: 40px;  
	margin-top: 20px;
	margin-left: 10px;
	width: 80%; 
	font-weight: bold; 
	outline: none;
}

.buttons > .button.blue { 
	color:#fff; 
	border-color:#0099d2 !important; 
	background:#0099d2 !important; 
	margin-top: 20px; 
	align-items: center;
	width: 80%; 
	font-weight: bold;
	border-radius: 40px;
}

.login_etc {
  padding: 12px;
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  text-align: center;
  margin-left: 10px;
}

div .SubmitAccount {
	padding: 12px;
	width: 100%;
	font-size: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	text-align: center;
	margin-left: 10px;
}
</style>
