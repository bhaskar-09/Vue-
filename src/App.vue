<template>
  <div id="app">

    <navbar></navbar>

    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
        <div class="col-sm-3 testing">
          <cart :items="cart"></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import data from './data.js'

export default {
  components: {
    Navbar,
    Cart
  },
  data() {
    return {
      items: [],
      cart: [],
      tittle : ""
    }
  },
  mounted() {
    this.items = data
  },
  methods: {


  }
}
</script>

<style>
.container {
  padding-top: 10px;
}
.card {
  margin: 2px;
}
</style>
