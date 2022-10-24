export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products
    },
    SET_BRANDS_TO_STATE: (state, brands) => {
        const includesBrands = {}
        for (const brand of brands) {
            for (const product of state.products) {
                if (product.brand === brand.id) {
                    includesBrands[brand.id] = brand
                }
            }
        }
        state.brands = Object.values(includesBrands)
        state.brands.unshift({title: "All brands"})
    },
    SET_CART: (state, product) => {
        if (state.cart.length) {
            let isProductExists = false
            state.cart.map((item) => {
                if (item.id === product.id) {
                    isProductExists = true
                    item.quantity++
                }
            })
            if (!isProductExists) {
                state.cart.push({...product, quantity: 1})
            }
        } else {
            state.cart.push({...product, quantity: 1})
        }
    },
    REMOVE_CART: (state, index) => {
        state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => {
        state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--
        }
    }
}