<template>
  <a href="" class="catalog-card__size">
    <span> {{ size_item_data.label }}</span>
  </a>
</template>

<script>
export default {
  name: "SizeItem",
  props: {
    size_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">

.catalog-card__size {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 2px solid transparent;
  transition: .3s;
}

</style>