<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
          <p>제목 1</p>
        <div class="card">
          <img src="https://i.imgur.com/oIlJHTO.png" alt="" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">제목 2</h5>
            <p class="card-text">설명</p>
            <a href="#" class="btn btn-primary">더보기</a>
          </div>
        </div>
      </div>
      <div class="col-4">
        <p>제목 1</p>
        <div class="card">
          <img src="https://i.imgur.com/oIlJHTO.png" alt="" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">제목 2</h5>
            <p class="card-text">설명</p>
            <a href="#" class="btn btn-primary">더보기</a>
          </div>
        </div>
      </div>
      <div class="col-4">
        <p>제목 1</p>
        <div class="card">
          <img src="https://i.imgur.com/oIlJHTO.png" alt="" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">제목 2</h5>
            <p class="card-text">설명</p>
            <a href="#" class="btn btn-primary">더보기</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

p {
  margin: 20px 0px;
}

</style>
<script>
export default {
    methods: {
        moveToBoard1() {
            window.location.href = '/board/1/?page=1'	// 페이지 이동시 params로 게시판 구분, query로 페이지 구분
        },
        moveToBoard2() {
            window.location.href = '/board/2/?page=1'
        },
        moveToBoard3() {
            window.location.href = '/board/3/?page=1'
        }
    },
};
</script>