import {createStore} from 'vuex'
import apiRequests from "@/store/actions/apiRequests";
import commonActions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'

const actions = {...commonActions, ...apiRequests}

export default createStore({
    state: {
        products: [],
        brands: [],
        cart: []
    },
    mutations,
    actions,
    getters
})