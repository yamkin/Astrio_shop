<template>
  <div class="nav">
    <div class="logo">
      <router-link
          class="logo__link"
          :to="{name: 'main'}"
      >
        <img
            class="logo__img"
            src="../assets/images/astrio_logo.png"
            alt="logo-company"
        >
      </router-link>
    </div>
    <div class="nav__cart">
      <router-link
          class="nav__cart-link"
          :to="{name: 'cart'}"
      >
        <span
            v-if="CART.length > 0"
            class="nav__cart-notify"
        >
          {{ totalQuantityProductsInCart }}
        </span>
        <all-icons class="nav-cart__icon" name="cartIcon"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import AllIcons from "@/components/UI/AllIcons";


export default {
  name: "NavBar",
  components: {AllIcons},
  computed: {
    ...mapGetters([
      'CART'
    ]),
    totalQuantityProductsInCart() {
      let quantity = 0
      if (this.CART.length) {
        for(let i = 0; i < this.CART.length; i++) {
          quantity += this.CART[i].quantity
        }
      }
      return quantity
    }
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
</style>