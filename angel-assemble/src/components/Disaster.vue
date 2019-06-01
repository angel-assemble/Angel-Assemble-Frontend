<template>
  <div>
    <div class="container">
      <div class="main">
        <p class="top text-left" style="font-weight:bold">주변에 산불경보가 있습니다.</p>
        <p class="top text-left" style="font-weight:bold">2차 피해 예방을 위한</p>
        <p class="top text-left" style="font-weight:bold">가이드를 알려드립니다.</p>
      </div>
      <br>
      <img src="./../assets/forest.jpg" class="img-fluid rounded" alt="Responsive image">
      <br>
      <!-- list -->
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1 score">1 순위</h5>
          </div>
          <p class="mb-1 text-left" style="font-weight:bold">불씨가 집, 창고 등 시설물로 옮겨 붙지</p>
          <p class="mb-1 text-left" style="font-weight:bold">못하도록 집 주위에 물을 뿌립니다.</p>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1 score">2 순위</h5>
          </div>
          <p class="mb-1 text-left" style="font-weight:bold">문과 창문을 닫고 폭발성과 인화성이 높은</p>
          <p class="mb-1 text-left" style="font-weight:bold">가스통, 휘발성 가연물질 등은 제거합니다.</p>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1 score">3 순위</h5>
          </div>
          <p class="mb-1 text-left" style="font-weight:bold">필요한 물품만 챙겨</p>
          <p class="mb-1 text-left" style="font-weight:bold">대피소로 이동합니다.</p>
        </a>
      </div>
      <!--btn-->
      <button type="button" class="btn btn-outline-success btn-block" style="margin-top: 30px; margin-bottom: 30px; padding-top: 15px; padding-bottom: 15px;">공유하기</button>
      <div class="guide">
        <p class="guide-title">자연재해 피난 가이드</p>
      </div>

    </div>
    
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.top {
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: -0.3px;
  color: #212121;
}

.score {
  color: #467B0A;
  padding-top: 15px;
  padding-bottom: 8px;

}

.main {
  font-family: SDGothicNeoa-gBd;
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: -0.3px;
  color: #212121;
}

.list-group-item{
  border-left-width: 0px;
  border-right-width: 0px;
  padding-left: 44px;
}

.guide-title {
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.77;
  letter-spacing: -0.2px;
  color: #ee400d;
}
</style>
