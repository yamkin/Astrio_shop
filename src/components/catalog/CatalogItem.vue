<template>
  <div class="catalog-card">
    <router-link
        class="catalog-card__img"
        to=""
    >
      <img
          :src=" require('../../assets' + product_data.image) "
          alt="img"
      >
    </router-link>
    <router-link
        class="catalog-card__title"
        to=""
    >
      {{ product_data.title }}
    </router-link>
    <div class="catalog-card__brand">
      {{ product_data.brandName }}
    </div>
    <div class="catalog-card__price-row">
      <router-link
          to=""
          class="catalog-card__price"
      >
        <b>
          {{ product_data.regular_price.value }}
          <span>
            {{ product_data.regular_price.currency }}
          </span>
        </b>
      </router-link>
      <router-link
          class="catalog-card__cart"
          to="">
        <!--        <img src="../assets/image/card-cart.svg" alt="card-cart-icon">-->
        <all-icons @click="addToCart" name="cardСartIcon"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import AllIcons from "@/components/UI/AllIcons";
export default {
  name: "CatalogItem",
  components: {
    AllIcons
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
    brand_data: {
      type: Object,
      default() {
        return {};
      },
    },

  },
  data() {
    return {
      mutationProducts: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  },

}
</script>

<style lang="scss">
.catalog-card {
  display: grid;
  background: #fff;
  padding: 20px;
  transition: .3s;

  &:hover {
    box-shadow: 0 10px 10px 0 rgba(98, 62, 99, 0.1);
  }

  &__img {
    display: block;
    width: 100%;
    position: relative;
    padding-top: 100%;
    margin-bottom: 19px;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      object-fit: contain;
      object-position: center;
    }
  }

  &__title {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    //min-height: 30px;
    display: -webkit-box;
    white-space: normal;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    margin-bottom: 5px;
  }

  &__brand {
    margin-bottom: 15px;
  }

  &__price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__price {
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: left;
    color: #000;

    b span {
      font-size: 17px;
    }
  }

  &__cart {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      fill: #bcbcc6;
      transition: 0.3s;
    }

    &:hover {
      svg {
        fill: black;
      }
    }
  }
}

@media screen and (max-width: 991px) {
  .catalog-card {
    padding: 10px 9px 13px;
  }

  .catalog-card__img {
    margin-bottom: 5px;
  }
}

@media screen and (max-width: 580px) {
  .catalog-card__title {
    margin-bottom: 13px;
  }

  .catalog-card__price {
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: left;
  }
}

</style>