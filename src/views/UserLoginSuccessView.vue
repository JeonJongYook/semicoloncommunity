<template>
	<h1>{{id}}({{name}})님 환영합니다!</h1>
</template>

<script>
import UserInfoJSON from "@/assets/UserInfo/Admin.json"; 
const data = UserInfoJSON; 
const name = data.name;
const id = data.id;
const pw = data.password;

export default {
	components: {},
	computed: {},
	data() {
		return {
			data,
			id,
			name,
			pw
		}
	}
}
</script>

<style>
</style>