<template>
	<div class="RegisterView">
		<h1>SemiColon</h1>
		<br/>
		<form class="Register">
			<p>
				<label for="memberEmailInput">이메일</label>
				<input type="text" id="memberEmailInput" class="input_text" ref="memberEmailInput" v-model.trim="memberEmail" placeholder="사용하실 이메일을 입력하세요." />
			</p>
			<p>
				<label for="memberNicknameInput">닉네임</label>
				<input type="text" id="memberNicknameInput" class="input_text" ref="memberNicknameInput" v-model.trim="memberNickname" placeholder="사용하실 닉네임을 입력하세요." />
			</p>
			<p>
				<label for="memberIdInput">아이디</label>&nbsp;
				<input type="text" id="memberIdInput" class="input_text" ref="memberIdInput" v-model.trim="memberId" placeholder="사용하실 아이디를 입력하세요." />
			</p>
			<p>
				<label for="memberPasswordInput">비밀번호</label>
				<input type="password" id="memberPasswordInput" class="input_text" ref="memberPasswordInput" v-model.trim="memberPassword" placeholder="사용하실 비밀번호를 입력하세요." />
			</p>
			<div class="submit_etc">
        <div class="checkbox">
          <input type="checkbox" name="SessionSave" id="SessionSave"> 정보를 저장할까요?
        </div>
        <div class="forgot_account">
          <a @click="fnFindId" class="findId">아이디</a> 혹은 <a @click="fnFindPW" class="findPw">비밀번호</a>를 잊으셨나요?
				</div>
      </div>
			<div class="SubmitAccount">
				<span>만약 계정이 있다면, <router-link to="/login">로그인</router-link>을 먼저 진행해주세요!</span>
			</div>
			<p class="buttons">
				<button @click.prevent="checkAll()" class="button blue" name="SubmitButton" id="SubmitButton">가입하기</button>
				<button @click.prevent="doCancel()" class="button" name="cancelButton" id="cancelButton">취소</button>
			</p>
		</form>
	</div>
</template>

<script>
import userList from "@/assets/data/users.json";
const data = userList;

export default {
	name: 'LoginForm',
	data : function() {
		return {
			memberEmail : '',
			memberNickname : '',
			memberId : '',
			memberPassword : '',
			errorMessage : '',
			data: data,
		}
	},
	methods : {
		doCancel() {
			document.getElementById("memberIdInput").value = null;
			document.getElementById("memberPasswordInput").value = null;
			document.getElementById("memberNicknameInput").value = null;
			document.getElementById("memberEmailInput").value = null;
			document.getElementById("memberEmailInput").focus();
		}
	},
	mounted() {
		document.getElementById("memberEmailInput").focus();
		// this.$refs.memberEmailInput.focus();
	}
};
</script>

<style scoped>
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
/* Import End */

div .RegisterView {
  background-color: white;
}

.RegisterView {
	width: 800px;
	margin: 20px auto;
}

.RegisterView h1 {
	text-align: center;
	font-family: 'Black Han Sans', sans-serif;
}

.Register {
	margin: auto;
	text-align: left;
}

.Register p > label {
	display: inline-block;
	font-size: 24px;
	padding-right: 16px;
	align-items: center;
	font-family: 'Black Han Sans', sans-serif;
}

.Register p > .input_text {
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

.Register p > .input_text:focus {
	font-size: 180%;
}

.buttons {
	position:relative;
	height:32px;
	margin-top:20px;
	text-align: center;
}

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

.submit_etc {
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

.submit_etc .checkbox {
  font-size: 18px;
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

.SubmitAccount span {
  font-size: 18px;
}

.forgot_account .findId {
	font-size: 18px;
}

.forgot_account .findPw {
	font-size: 18px;
}
</style>
