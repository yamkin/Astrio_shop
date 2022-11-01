import axios from 'axios';

export default {
  GET_PRODUCTS_FROM_API({ commit }) {
    return axios('http://localhost:8080/products', {
      method: 'GET',
    })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  },
  GET_BRANDS_FROM_API({ commit }) {
    return axios('http://localhost:8080/brands', {
      method: 'GET',
    })
      .then((brands) => {
        commit('SET_BRANDS_TO_STATE', brands.data);
        return brands;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  },
};
