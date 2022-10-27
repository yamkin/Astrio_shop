<template>
  <section class="catalog-section">
    <div class="container">
      <h1 class="catalog-section__title">
        Сatalog
      </h1>
      <div class="catalog-content">

        <div class="catalog-content__aside">
          <div class="catalog-filter">
            <div class="catalog-filter__category">
              <filter-category
                  :brands="BRANDS"
                  @selectBrand="selectBrand"
              />
            </div>
          </div>
        </div>

        <div class="catalog-content__products">
          <div class="catalog-content__products-list">
            <catalog-item
                v-for="product in filteredProducts"
                :key="product.id"
                :product_data="product"
                :brand_data="BRANDS"
                @addToCart="addToCart"
            />
          </div>
        </div>
        <div>
          <div
              v-for="product in PRODUCTS"
              :key="product.id"
          >
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import CatalogItem from "@/components/catalog/CatalogItem";
import FilterCategory from "@/components/UI/FilterCategory";

import {mapActions, mapGetters} from 'vuex'

export default {
  name: "MainPage",
  components: {
    CatalogItem,
    FilterCategory,
  },
  data() {
    return {
      sortedProducts: [],
      fullProducts: []
    }
  },
  computed: {
    ...mapGetters([
      'BRANDS',
      'PRODUCTS',
    ]),

    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    },
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'GET_BRANDS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    selectBrand(brand) {
      this.sortedProducts = []
      let vm = this
      this.PRODUCTS.map((item) => {
        if (item.brand === brand.id) {
          vm.sortedProducts.push(item)
        }
      })
    },

  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    this.GET_BRANDS_FROM_API()
  }
}
</script>

<style lang="scss">

.catalog-section__title {
  margin: 0 0 20px;
  color: #000;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  font-size: 44px;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
}

.catalog-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 50px;
}

.catalog-content__aside {
  width: 100%;
  max-width: 380px;
  margin-right: 10px;
}

.catalog-filter {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.catalog-filter__category {
  height: 100%;
  padding: 35px 55px;
  background: white;
  color: #000000;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
}

.catalog-filter__category-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.catalog-content__products {
  width: 100%;
}

.catalog-content__products-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

@media screen and (max-width: 1440px) {
  .catalog-content__products-list {
    grid-template-columns: repeat(3,1fr);
  }
}


@media screen and (max-width: 1199px) {
  .catalog-content__aside {
    max-width: 320px;
  }

  .catalog-content__products-list {
    grid-template-columns: repeat(2,1fr);
  }
}


@media screen and (max-width: 991px) {

  .catalog-section__title {
    font-size: 36px;
    padding-left: 10px;
    margin-bottom: 11px;
  }

  .catalog-content {
    display: block;
  }

  .catalog-content__aside {
    max-width: 100%;
  }

  .catalog-filter__category-list {
    display: flex;
    flex-direction: row;
  }

  .catalog-filter__category-item {
    padding: 0;
    margin-right: 10px;

  }

  .catalog-filter__category {
    padding: 20px;
    margin-bottom: 10px;
  }
}
</style>