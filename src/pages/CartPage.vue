<template>
  <section class="cart">
    <div class="container">
      <div class="cart__container">
        <div class="cart__wrapper">
          <div class="order-cart">
            <ul
                v-if="CART.length"
                class="order-cart__product product-cart"
            >
              <cart-item
                  v-for="(item, index) in CART"
                  :key="item.id"
                  :cart_data_item="item"
                  @deleteFromCart="deleteFromCart(index)"
                  @increment="increment(index)"
                  @decrement="decrement(index)"
              />

            </ul>
            <div
                v-else
                class="product-cart__empty"
            >
              <h2 class="product-cart__empty-title">Your cart is empty</h2>
              <div class="product-cart__empty-img">
                <img src="../assets/images/shopping-cart.svg" alt="shopping-cart">
              </div>
              <p class="product-cart__empty-text">To place an order, go to the catalog page.</p>
              <router-link :to="{name: 'main'}">
                <button class="button button--big product-cart__item-button">
                  To catalog
                </button>
              </router-link>

            </div>
          </div>
          <div class="total-price-cart">
            <div class="total-price-cart__top">
            <h2 class="total-price-cart__title">
              Total price:
            </h2>
            <span class="total-price-cart__count">{{ cartTotalCost }} <span>USD</span></span>
            </div>
            <div class="total-price-cart__bottom">
            <button class="button button--big total-price-cart__button">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CartItem from "@/components/cart/CartItem";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "CartPage",
  components: {
    CartItem
  },
  computed: {
    ...mapGetters([
      'CART',
    ]),
    cartTotalCost() {
      let result = []
      if (this.CART.length !== 0) {
        for (let item of this.CART) {
          result.push(item.regular_price.value * item.quantity)
        }
        result = result.reduce((sum, el) => sum + el, 0)
      } else result = 0
      return result.toFixed(2)
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
  }
}
</script>

<style lang="scss">

.cart {
  padding: 20px 0;
}

.cart__title {
  align-self: end;
  margin: 0 0 20px;
  font-size: 44px;
  color: #000;
  font-weight: 400;
  line-height: 1.2;
}

.order-cart {
  display: grid;
}

.order-cart__product {
  margin: 0 0 10px;
}

.product-cart__empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
}

.product-cart {
  display: grid;
  grid-row-gap: 10px;
  padding: 0;
  list-style: none;
}

.total-price-cart {
  position: sticky;
  top: 56px;
  z-index: 1;
  display: none;
  display: -ms-grid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  background: #fff;

  &__top {
    display: flex;
    justify-content: space-between;
    margin: 0 0 20px;

    .total-price-cart__title {
      order: -1;
      margin: 0 0 20px;
      color: #000;
      font-weight: 400;
      font-size: 24px;
      line-height: 1.2;
    }

    .total-price-cart__count {
      order: 1;
      margin: 0 0 20px;
      color: #000;
      font-weight: 600;
      font-size: 44px;
    }
  }

  &__button {
    order: 2;
  }
}

.total-price-cart__bottom {
  display: flex;
  justify-content: flex-end;
}

.total-price-cart__button {
  max-width: 250px;
}

.button--big {
  height: 60px;
  padding: 10px 30px;
  border-radius: 30px;
}

.button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  border: none;
  background-color: #56bdc5;
  color: #fff;
  -webkit-transition: .2s;
  transition: .2s;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(86, 189, 197, 0.16);
  }

}

@media (min-width: 1280px) {
  .cart__container {
    display: grid;
    grid-template-columns: max-content minmax(max-content, 1fr);
    grid-column-gap: 20px;
  }
  .cart__wrapper {
    display: grid;
    grid-template-columns: minmax(320px, 1fr) minmax(280px, 380px);
    grid-column: 1/-1;
    grid-column-gap: 10px;
    align-items: start;
  }

  .total-price-cart__top {
    display: block;
  }

  .total-price-cart__button {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .product-cart__empty {
    .product-cart__empty-title {
      text-align: center;
    }
    .product-cart__empty-img img {
      display: flex;
      margin: auto;
      max-width: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media (max-width: 500px) {
  .total-price-cart__top .total-price-cart__title, .total-price-cart__top .total-price-cart__count {
    font-size: 18px;
  }
  .total-price-cart__bottom {
    display: flex;
    justify-content: center;
  }
}

</style>