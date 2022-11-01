export default {
    BRANDS(state) {
        return state.brands
    },
    CART(state) {
        return state.cart
    },
    PRODUCTS(state) {
        return state.products = state.products.map((product) => {
            const brand = state.brands.find((b) => b.id === product.brand)
            return {...product, brandName: brand?.title || 'no brand'}
        })
    },
    // GET_ATTRIBUTES_COLOR(state) {
    //     return state.products.map((product) => product.configurable_options.map((color) => color.values))
    // },
    // GET_ATTRIBUTES_SIZE(state) {
    //
    // },

}