<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__container container">
        <nav-bar/>
      </div>
    </header>
    <main class="main">
      <div class="app">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </main>
    <footer class="footer">
      <div class="footer__container container">
        <div class="footer__info">
          <p>ASTRIO - интернет-магазин модных товаров</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style lang="scss">

.wrapper {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 1023px) {
    .wrapper {
      overflow-x: hidden;
    }
  }
}

.header {
  padding: 10px 0 36px;
}

.main {
  flex: 1;
}

.footer__info {
  margin: 0 auto;
  padding: 10px 0;
}

.footer__info > p {
  margin: 0;
  text-align: center;
}
</style>
