<template>
  <div class="nav">
    <div class="logo">
      <router-link class="logo__link" :to="{name: 'main'}">
        <img class="logo__img" src="../assets/images/astrio_logo.png" alt="logo-company">
      </router-link>
    </div>
    <div class="nav__cart">
      <router-link class="nav__cart-link" :to="{name: 'cart'}">
        <span
            v-if="CART.length > 0"
            class="nav__cart-notify">
          {{ CART.length }}
        </span>
        <!--        <img class="nav__cart-img" src="../assets/image/cart.svg" alt="logo-cart">-->
        <svg class="nav-cart__icon" enable-background="new 0 0 512 512" height="24"
             viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
                d="m337.034 420.796c.835.139 1.665.207 2.484.207 7.2 0 13.555-5.2 14.778-12.537l15-90c1.362-8.171-4.158-15.9-12.33-17.262-8.172-1.366-15.9 4.158-17.262 12.33l-15 90c-1.362 8.172 4.158 15.901 12.33 17.262z"/>
            <path
                d="m158.704 408.466c1.223 7.337 7.577 12.537 14.778 12.537.819 0 1.649-.067 2.484-.207 8.172-1.362 13.692-9.09 12.33-17.262l-15-90c-1.362-8.172-9.089-13.691-17.262-12.33-8.172 1.362-13.692 9.09-12.33 17.262z"/>
            <path
                d="m497 181h-52.791l-115.496-144.37c-5.174-6.467-14.613-7.518-21.083-2.342-6.469 5.175-7.518 14.614-2.342 21.083l100.503 125.629h-299.582l100.504-125.629c5.175-6.469 4.126-15.909-2.342-21.083-6.47-5.176-15.909-4.126-21.083 2.342l-115.497 144.37h-52.791c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h18.686l56.892 199.121c1.839 6.44 7.725 10.879 14.422 10.879h302c6.697 0 12.583-4.439 14.423-10.879l56.891-199.121h18.686c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15zm-101.314 270h-279.372l-51.428-180h382.229zm86.314-210c-51.385 0-403.32 0-452 0v-30h452z"/>
            <path
                d="m256 421c8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15s-15 6.716-15 15v90c0 8.285 6.716 15 15 15z"/>
          </g>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
}
</script>

<style lang="scss">

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1.5px solid #C2C1C1;

  &__cart-link {
    position: relative;
  }
}

.logo {
  display: flex;
  align-items: center;

  &__link {
    display: flex;
    align-items: center;
  }
}

.nav__cart-notify {
  position: absolute;
  top: -20px;
  left: 15px;
  padding: 0 1px;
  min-width: 15px;
  height: 15px;
  z-index: 2;
  text-align: center;
  color: #fff;
  border-radius: 15px;
  border: 1px solid red;
  font-size: 10px;
  line-height: 14px;
  background-color: red;
}

.nav-cart__icon {
  fill: #bcbcc6;
  transition: 0.3s;

  &:hover {
    fill: black;
  }
}

//.logo__img {
//    cursor: pointer;
//}
</style>