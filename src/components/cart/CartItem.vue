<template>
  <li class="product-cart__item">
    <div class="product-cart__add">
      <div class="product-cart__wrapper">
        <div>
        <router-link :to="{}">
          <h2 class="product-cart__title">{{ cart_data_item.title }}</h2>
        </router-link>
        <p class="product-cart__brand-name">
          {{ cart_data_item.brandName }}
        </p>
        </div>
        <p class="product-cart__price">
          <b>
            {{ cart_data_item.regular_price.value }}
            <span>
              {{ cart_data_item.regular_price.currency }}
            </span>
          </b>
        </p>
      </div>
      <div class="product-cart__image-wrap">
        <router-link :to="{}">
          <img :src=" require('../../assets' + cart_data_item.image) " alt="img">
        </router-link>
      </div>
      <div class="count product-cart__count">
        <div class="count__field">
          <span class="count__input">{{ cart_data_item.quantity }}</span>
        </div>
        <div class="count__buttons">
          <button
              @click="decrementItem"
              class="count__button count__button-minus"
              :class="{'button__disabled':cart_data_item.quantity === 1}"
              type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" width="20px" height="20px">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"/>
            </svg>
          </button>
          <button
              @click="incrementItem"
              class="count__button count__button-plus"
              type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" width="20px" height="20px">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="product-cart__total">
        <p class="product-cart__total-price">
          <b>
            {{ totalPrice }}
            <span>
              {{ cart_data_item.regular_price.currency }}
            </span>
            <span>
                        x
                      </span>
            <span class="product-cart__value">
                        {{ cart_data_item.quantity }}
                      </span>
          </b>
        </p>
      </div>
      <button
          @click="deleteFromCart"
          class="product-cart__remove-button"
      >

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             width="24px" height="24px">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
        </svg>
      </button>
    </div>
  </li>
</template>

<script>
// import BrandTitle from "@/components/UI/BrandTitle";
export default {
  name: "CartItem",
  components: {
    // BrandTitle
  },
  props: {
    cart_data_item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    totalPrice() {
      let total = 0
      total = this.cart_data_item.quantity * this.cart_data_item.regular_price.value
      return total.toFixed(2)
    },
  },
  methods: {
    decrementItem() {
      this.$emit('decrement')
    },
    incrementItem() {
      this.$emit('increment')
    },
    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  },
}
</script>

<style lang="scss">

.product-cart__item {
  background-color: #fff;
}

.product-cart__add {
  position: relative;
  display: grid;
  grid-template-areas: "image wrapper count total remove";
  grid-template-columns: 100px minmax(100px, 450px) 1fr max-content max-content;
  grid-column-gap: 20px;
  align-items: center;
  min-height: 180px;
  padding: 40px;
}

.product-cart__wrapper {
  display: grid;
  grid-area: wrapper;
  grid-template-areas: "title price";
  grid-template-columns: max-content 1fr;
  .product-cart__title {
    margin: 0 0 5px;
    color: #000;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.2;
    cursor: pointer;
  }

  .product-cart__brand-name {
    margin: 0 0 5px;
  }

  //.product-cart__subtitle {
  //  margin: 0 0 10px;
  //}

  .product-cart__price {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 10px;
    align-items: center;
    justify-content: end;
    //margin: 0 0 20px;
    color: #bcbcc6;
    font-size: 18px;

    b {
      color: #000;
      font-weight: 600;
    }
  }
}

.product-cart__image-wrap {
  display: grid;
  grid-area: image;
  max-width: 100px;

  img {
    max-width: 100%;
    height: auto;
    border: none;
    cursor: pointer;
  }
}

.count {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 28px 1fr 28px;
  grid-template-columns: 28px 1fr 28px;
  width: 100px;
  background-color: #f1f1f6;
}

.product-cart__count {
  -ms-grid-row: 1;
  -ms-grid-column: 5;
  grid-area: count;
  -ms-grid-column-align: end;
  justify-self: end;
  margin-right: 20px;

  .count__field {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2/3;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    .count__input {
      width: 100%;
      padding: 10px 0 11px;
      border: none;
      background: transparent;
      color: #000;
      font-size: 16px;
      line-height: 1.25;
      text-align: center;
    }
  }

  .count__buttons {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 28px 28px;
    grid-template-columns: 28px 28px;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
    -ms-grid-column: 1;
    -ms-grid-column-span: 3;
    grid-column: 1/4;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    .count__button {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      padding: 0;
      border: none;
      background: transparent;
      color: #000000;
      -webkit-transition: .2s;
      transition: .2s;
    }
  }
}

.product-cart__total {
  display: grid;
  grid-area: total;
  justify-content: center;
  font-size: 18px;
}

.product-cart__remove-button {
  grid-area: remove;
  width: 24px;
  height: 24px;
  margin: 0 -3px 0 0;
  padding: 0;
  border: none;
  background: transparent;
  color: #bcbcc6;
  -webkit-transition: .2s;
  transition: .2s;

  &:hover {
    color: #000000;
  }
}

@media (max-width: 640px) {
  .product-cart__add {
    grid-template-areas:
        "image wrapper wrapper"
        "image count remove";
    grid-template-columns: max-content 1fr max-content;
    align-items: start;
    min-height: 140px;
    padding: 20px;
  }

  .product-cart__wrapper {
    display: grid;
    grid-area: wrapper;
    grid-template-areas: "title"
                         "price";
    grid-template-columns: max-content;
  }

  .product-cart__count {
    margin: 0;
    justify-self: start;
  }

  .product-cart__total {
    display: none;
  }

  .product-cart__remove-button {
    align-self: center;
    justify-self: end;
  }
}
</style>