export const storage = {
  state: {
    inventory: [],
    cart: [],
    cartKey: []
  },
  getters: {
    getInventory(state) {
      return state.inventory
    },
    getCart(state) {
      return state.cart.reverse()
    },
    getCartKey(state) {
      return state.cartKey.reverse()
    }
  },
  mutations: {
    setInventory(state, payload) {
      state.inventory = payload
    },
    addToCart(state, payload) {
      state.cart.push(payload)
      state.cartKey.push(payload.id)
    },
    removeItem(state, payload) {
      state.cart.splice(payload, 1)
      state.cartKey.splice(payload, 1)
    },
    clearCart(state) {
      state.cart = []
      state.cartKey = []
    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit('addToCart', payload)
    }
  }
}
