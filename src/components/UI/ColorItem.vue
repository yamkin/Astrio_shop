<template>
  <a href="" class="catalog-card__color">
    <span :style="{backgroundColor: color_item_data.value}"></span>
  </a>
</template>

<script>
export default {
  name: "ColorItem",
  props: {
    color_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">

.catalog-card__color {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 2px solid transparent;
  transition: .3s;
  //transition-property: border-color;
}

.catalog-card__color span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 20px;
  height: 20px;
  border: 2px solid #E5E5E5;
  border-radius: 50%;
}
</style>