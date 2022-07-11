<template>
    <div class="mx-0">
     <h3>
      <strong>{{ this.data._id }} ( {{ this.data.name }} ) 님 환영합니다</strong> <br />
    </h3>
  </div>
</template>

<script>

import userList from "@/assets/data/users.json";
const data = userList; 

export default {
  components: {},
  computed: {},
  data() {
    return {
      data
    };
  }
};
</script>