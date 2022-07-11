<template>
    <div class="wrapper">
        <div class="card">
            <header>
                <h3>게시글 제목</h3>
            </header>
            <img src="https://i.imgur.com/foGeRFx.gifv" alt="이미지가 존재하지 않습니다.">
            <p>게시글 설명</p>
        </div>
        <div class="card">
            <header>
                <h3>게시글 제목</h3>
            </header>
            <img src="https://i.imgur.com/foGeRFx.gifv" alt="이미지가 존재하지 않습니다.">
            <p>게시글 설명</p>
        </div>
        <div class="card">
            <header>
                <h3>게시글 제목</h3>
            </header>
            <img src="https://i.imgur.com/foGeRFx.gifv" alt="이미지가 존재하지 않습니다.">
            <p>게시글 설명</p>
        </div>
        <div class="card">
            <header>
                <h3>게시글 제목</h3>
            </header>
            <img src="https://i.imgur.com/foGeRFx.gifv" alt="이미지가 존재하지 않습니다.">
            <p>게시글 설명</p>
        </div>
        <div class="card">
            <header>
                <h3>게시글 제목</h3>
            </header>
            <img src="https://i.imgur.com/foGeRFx.gifv" alt="이미지가 존재하지 않습니다.">
            <p>게시글 설명</p>
        </div>
        <div class="card">
            <header>
                <h3>게시글 제목</h3>
            </header>
            <img src="https://i.imgur.com/foGeRFx.gifv" alt="이미지가 존재하지 않습니다.">
            <p>게시글 설명</p>
        </div>
        <div class="card">
            <header>
                <h3>게시글 제목</h3>
            </header>
            <img src="https://i.imgur.com/foGeRFx.gifv" alt="이미지가 존재하지 않습니다.">
            <p>게시글 설명</p>
        </div>
        <div class="card">
            <header>
                <h3>게시글 제목</h3>
            </header>
            <img src="https://i.imgur.com/foGeRFx.gifv" alt="이미지가 존재하지 않습니다.">
            <p>게시글 설명</p>
        </div>
    </div>
</template>
<style scoped>


* {
    box-sizing: border-box;
    margin-top: 30px;
}

.card > img {
    width: auto;
    height: auto;
    max-width: 100%;
    overflow: hidden;
}

body {
    background-color: #eee; 
    font-size: 16px;
}

.wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
    justify-items: stretch;
    grid-gap: 30rem;
}

.card {
    background-color: #fff;
    box-shadow: 0px 1px 5px #222;
    border-radius: 1%;
}

.card > header {
    font-size: 1.5rem;
    padding: 0.5rem;
}

.card > p {
    padding: 0.5rem;
    line-height: 1.6em;
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