<template>
    <div class="mx-0">
     <h3>
      <strong>{{ this.data._id }} ( {{ this.data.name }} ) 님 환영합니다 / 남은 포인트 :  {{ this.data.point }}</strong> <br />
    </h3>
  </div>
</template>

<script>

import UserInfoJSON from "@/assets/UserInfo/Admin.json";
const data = UserInfoJSON;

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