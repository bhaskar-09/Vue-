<template>
  <div id="app">
    <Navbar></Navbar>
     <div class="container-fluid">
      <div class="row">
        <div class="col-sm-9">           
          <Inventory @newItemAdd="addToCart" :items="items"></Inventory>
        </div>        
        <div class="col-sm-3"> 
          <Cart :items="carts"></Cart>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import Inventory from "./components/Inventory"
import Cart from "./components/Cart"
import data from "./data"
export default {
  components: {
    Navbar,
    Inventory,
    Cart
  },
  data(){
    return{
      items : [],
      carts : []
    }
  },
  mounted(){
    this.items = data;
  },
  methods: {
    addToCart(item){
      this.carts.push(item);
    }
  }
}
</script>

<style>

.container-fluid{
  padding-top: 20px;
}
</style>
