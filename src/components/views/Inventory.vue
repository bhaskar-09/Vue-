<template>
    <div>
        <h2>Inventory</h2>

        <div v-for="(item, index) in items" :key="index"  class="card">
            <img :src="item.photo" class="card-img-top" alt="1">
            <div class="card-body">
                <h5 class="card-title">{{item.tittle}}</h5>
                <p class="card-text">{{item.content}}</p>
                <h5 class="card-title">${{item.price}}</h5>
                <a @click="addToCartItem(item)" class="btn btn-primary">Add To Cart</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            items : []
        }
    },
    methods:{
        addToCartItem(item){
            this.$emit('newItemAdd',item)
        },
        fetchData(){
            axios.get('http://localhost:3000/items').then(Response=>{
                
            })
        }
    }
}
</script>

<style>
.card{
  width: 250px;
  margin: 15px;
  display: inline-block;
}
.card-text{
    height: 200px;
}
</style>
