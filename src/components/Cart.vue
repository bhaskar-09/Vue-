<template>
  <div class="col-sm-3 cartbar">
    <ul class="list-group">
      <li class="list-group-item">
        <h1 class="text-center">Cart</h1>
      </li>
      <li class="list-group-item">
        <span class="item-name">Name</span>
        <span class="item-price float-right">Price</span>
      </li>
    </ul>
    <ul class="list-group">
      <hr>
        <li v-for="(item, index) in items" :key="index" class="list-group-item">
          <span class="item-name">{{item.title}} <a @click.prevent="removeItem(index)" href="#" class="">(Remove)</a></span>
          <span class="item-price float-right">${{item.price}}</span>
        </li>
      <hr>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="item-name">Total</span>
        <span class="item-price float-right">${{ totalPrice }}</span>
      </li>

      <li v-if="items.length > 0" class="list-group-item">
        <button @click="checkout" class="btn btn-block btn-success">Checkout</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getCart
    },
    totalPrice() {
      var total = 0
      this.items.forEach(item => {
        total += parseFloat(item.price)
      })
      return total.toFixed(2)
    }
  },
  methods: {
    removeItem(index) {
      this.$store.commit('removeItem', index)
    },
    checkout() {
      if(confirm("Are you sure you want to chekout?")){
        this.$store.commit('clearCart')
      }
    }
  }
}
</script>

<style>
.cartbar{
    position: fixed;
    right: 26px;
    height: 80%;
}
.cartbar ul:nth-child(2){
  overflow-y: auto;
  height: 60%;
}
</style>
