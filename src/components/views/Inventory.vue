<template>
<div>
  <h1 class="text-center">Inventory</h1>
  <div v-if="!loading" class="row">
    <div v-for="(item, index) in items" :key="index" class="card" style="width: 13rem;">
      <router-link tag="div" :to="{ path: '/item/' + item.id }">
        <img class="card-img-top" :src="item.photo" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title text-center">{{ item.title }}</h5>
          <h5 class="card-title text-center">${{item.price}}</h5>
        </div>
      </router-link>
      <div class="card-footer">
        <button @click="addToCart(item)" class="btn btn-block btn-success" :disabled="cartKey.indexOf(item.id) !== -1">Add To Cart</button>
      </div>
    </div>
  </div>
  <h1 v-else>Loading...</h1>
</div>

</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      loading: true
    }
  },
  computed: {
    items() {
      return this.$store.getters.getInventory
    },
    cartKey() {
      return this.$store.getters.getCartKey
    }
  },
  mounted() {
    this.fetchInventory()
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('addToCart', item)
    },
    fetchInventory() {
      var self = this
      axios.get('http://localhost:3000/items').then(response => {
        self.$store.commit('setInventory', response.data)
        self.loading = false
      })
    }
  }
}
</script>

<style>

</style>
