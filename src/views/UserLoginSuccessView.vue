<template>
	<h1>{{id}}({{name}})님 환영합니다!</h1>
</template>

<script>
import userList from "../assets/data/users.json";

const data = userList; 

export default {
	components: {},
	computed: {},
	data() {
		return {
			data
		}
	}
}
</script>

<style>
</style>