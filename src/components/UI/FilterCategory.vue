<template>
  <h3 class="catalog-filter__category-title">Brands</h3>
  <div class="catalog-filter__category-list">
    <a
        v-for="brand in brands"
        :key="brand.id"
        @click="selectBrand(brand)"
        class="catalog-filter__category-item">
      {{ brand.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: "FilterCategory",
  props: {
    brands: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    selectBrand(brand) {
      this.$emit('selectBrand', brand)
    }
  }
}
</script>

<style lang="scss">

.catalog-filter__category-list {

}

.catalog-filter__category-item {
  cursor: pointer;
  transition: .3s;

  &:hover {
    color: #56bdc5
  }
}

</style>