<template>
  <div class="RegisterView">
    <h1>회원가입 페이지</h1>
    <br/>
  </div>
  <form class="userRegisterForm">
    <div>
      <label ref="memberEmail" for="userEmail">이메일 &nbsp;</label>
      <input v-on:keyup="setUserEmail" v-model="userEmail" id="userEmail" type="email" />
    </div>
    <br/>
    <div>
      <label ref="memberNickName" for="userNickName">닉네임 &nbsp;</label>
      <input v-on:keyup="setUserNickName" v-model="userNickName" id="userNickName" type="text" />
    </div>
    <br/>
    <div>
      <label ref="memberId" for="userId">아이디 &nbsp;</label>
      <input v-on:keyup="setUserID" v-model="userId" id="userId" type="text" />
    </div>
    <br/>
    <div>
      <label ref="memberPassword" for="userPassWord">비밀번호 &nbsp;</label>
      <input v-on:keyup="setUserPassWord" v-model="userPassword" id="userPassword" type="password" />
    </div>
  </form>
  <br/>
  <br/>
  <div class="ConfirmAccount">
    <span>계정이 있으시다면&nbsp;<router-link to="/login">로그인</router-link>하러가기</span>
  </div>
  <p class="buttons">
    <button @click.prevent="doSubmit" class="button blue" id="submitButton">회원가입</button>
    <button @click.prevent="doCancel" class="button">취소</button>
  </p>
</template>

<script>

export default {
	name: 'joinPage',
  data : function() {
		return {
			memberEmail : '',
			memberNickName : '',
			memberId : '',
			memberPassword : '',
			errorMessage : ''
		};
	},
  methods : {
		doSubmit() {
			// if (this.memberId == "") {
			// 	confirm(["아이디를 입력해주세요!"]);
			// 	this.$refs.memberIdInput.focus();
			// 	return;
			// } else if (this.memberPassword == "") {
			// 	confirm(["비밀번호를 입력해주세요!"]);
			// 	this.$refs.memberPasswordInput.focus();
			// 	return;
			// } else if (this.memberEmail == "") {
      //   confirm(["이메일을 입력해주세요!"]);
      //   this.$refs.memberEmailInput.focus();
      //   return;
      // } else if (this.memberNickName == "") {
      //   confirm(["닉네임을 입력해주세요!"]);
      //   this.$refs.memberNickNameInput.focus();
      //   return;
      // }
      // if (this.memberEmail == "") {
			// 	confirm(["이메일을 입력해주세요!"]);
			// 	this.$refs.memberEmailInput.focus();
			// } else if (this.memberNickName == "") {
			// 	confirm(["닉네임을 입력해주세요!"]);
			// 	this.$refs.memberNickNameInput.focus();
			// } else if (this.memberId == "") {
      //   confirm(["아이디를 입력해주세요!"]);
      //   this.$refs.memberIdInput.focus();
      // } else if (this.memberPassword == "") {
      //   alert("비밀번호를 입력해주세요!");
      //   this.$refs.memberPasswordInput.focus();
      // }else {
      //   confirm(["Error 404 : 관리자에게 문의해주세요."]);
      // }
		},
		doCancel() {
			// this.$router.push('../');
			this.$refs.memberEmailInput.value = '';
			this.$refs.memberNickNameInput.value = '';
			this.$refs.memberIdInput.value = '';
			this.$refs.memberPasswordInput.value = '';
			this.$refs.memberEmailInput.focus();
		},
		// IDshowError() {
		// 	const options = {title: '경고', size: 'sm'}
		// 	this.$dialogs.alert('아이디를 입력해주세요!', options)
		// 	.then(res => {
		// 		console.log(res)
		// 	});
		// }
	},
	mounted() {
		this.$refs.memberEmailInput.focus();
	}
};
</script>

<style scoped>
/* Google Fonts Import */

@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');

/* Import End */

/*.joinInput {width: 300px; height: 25px;}*/
/*.container-fluid {width: 50%;}*/

div .RegisterView {
  text-align: center;
}

div .userRegisterForm {
  text-align: center;
  font-family: 'Jua', sans-serif;
  border-radius: 30px;
  margin-top: 10px;
	padding: 0 20px;
	outline: none;
  font-size: 22px;
}

div .RegisterView h1{
  margin-top: 30px;
  font-family: 'Jua', sans-serif;
  text-align: center;
  font-size: 34px;
}

div .ConfirmAccount {
  font-family: 'Jua', sans-serif;
  text-align: center;
  font-size: 18px;
}

div #userEmail {
  text-align: center;
  border-radius: 30px;
}

div #userNickName {
  text-align: center;
  border-radius: 30px;
}

div #userId {
  text-align: center;
  border-radius: 30px;
}

div #userPassword {
  text-align: center;
  border-radius: 30px;
}

div #label[for="userEmail"]{
  position:absolute; 
  text-align: center;
  font-family: 'Dongle', sans-serif;
  margin-top: 10px;
	padding: 0 20px;
	outline: none;
  font-size: 20px;
}
div #label[for="userNickName"]{
  position:absolute; 
  text-align: center;
  font-family: 'Dongle', sans-serif;
  margin-top: 10px;
	padding: 0 20px;
	outline: none;
  font-size: 20px;
}
div #label[for="userId"]{
  position:absolute; 
  text-align: center;
  font-family: 'Dongle', sans-serif;
  margin-top: 10px;
	padding: 0 20px;
	outline: none;
  font-size: 20px;
}
div #label[for="userPassWord"]{
  position:absolute; 
  text-align: center;
  font-family: 'Dongle', sans-serif;
  margin-top: 10px;
	padding: 0 20px;
	outline: none;
  font-size: 20px;
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
	line-height:32px; 
	font-size: 1.2em;
	border: 0;
	/* border:1px solid #dfdfdf;  */
	background: #D3D3D3; 
	border-radius:40px;  
	margin-top: 20px; 
	width: 80%; 
	font-weight: bold; 
	outline: none;
}
.buttons > .button.blue { 
	color:#fff; 
	border-color:#0099d2 !important; 
	background:#0099d2 !important; 
	margin-top: 20px; 
	width: 80%; 
	font-weight: bold;
	border-radius:40px;
}

</style>