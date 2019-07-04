<template>
  <div id="app">
    <Navbar @search="search"></Navbar>
    <router-view></router-view>
     <div class="container-fluid">
      <div class="row">
        <div class="col-sm-9">           
          <Inventory @newItemAdd="addToCart" :items="items"></Inventory>
        </div>        
        <div class="col-sm-3"> 
          <Cart @removeItem="removeItemCart" :items="carts"></Cart>
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
    search(keyword){
      if(keyword.length>0){
        this.items =  data.filter(
          item => {          
              return item.tittle.toLowerCase().indexOf(keyword.toLowerCase()) !== -1          
          }
        )
      }else{
        this.items =  data
      }      
    },
    addToCart(item){
      this.carts.push(item);
    },
    removeItemCart(index){
      this.carts.splice(index,1);
    }
  }
}
</script>

<style>

.container-fluid{
  padding-top: 20px;
}
</style>
