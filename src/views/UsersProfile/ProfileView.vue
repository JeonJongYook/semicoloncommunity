<template>
    <!-- <div class="profile">
        <h3><span class="material-icons">person</span>UserProfile</h3>
    </div>
    <div class="ProfileSettings">
        <h2></h2>
    </div> -->
    <div class="container">
    <header class="jumbotron">
      <h3>user name : {{content.username}}</h3>
      <h3>email : {{content.email}}</h3>
    </header>
  </div>
</template>

<style scoped>
.profile h3{
    text-align: center;
}
</style>

<script>
// import UserService from '../services/user-service'

export default {
  name: 'UserProfile',
  data() {
    return {
      content: ''
    }
  },
}
</script>