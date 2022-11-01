<template>
  <div class="catalog-card__sizes">
    <size-item
        v-for="item in size_data"
        :key="item.value_index"
        :size_item_data="item"
    />
  </div>
</template>

<script>
import SizeItem from "@/components/UI/SizeItem";
export default {
  name: "SizeAttributes",
  components: {SizeItem},
  props: {
    size_data: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss">

.catalog-card__sizes {
  display: grid;
  grid-template-columns: repeat(6,1fr);
  grid-gap: 4px;
  width: 100%;
  margin: 0 auto;
  max-width: 300px;
}

</style>