<template>
  <div class="catalog-card__calors">
    <color-item
        v-for="item in colors_data"
        :key="item.value_index"
        :color_item_data="item"
    />
  </div>
</template>

<script>
import ColorItem from "@/components/UI/ColorItem";
export default {
  name: "ColorsAttributes",
  components: {ColorItem},
  props: {
    colors_data: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss">

.catalog-card__calors {
  display: grid;
  grid-template-columns: repeat(6,1fr);
  grid-gap: 4px;
  width: 100%;
  margin: 0 auto;
  max-width: 300px;
}

</style>