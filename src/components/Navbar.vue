<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">My Store</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
            <router-link :to="{path:'/'}" class="nav-link" >Home</router-link>
            </li>
            <li class="nav-item">
            <router-link :to="{path:'/'}" class="nav-link" >Features</router-link>
            </li>
            <li class="nav-item">
            <router-link :to="{path:'/ProductDetails/1'}" class="nav-link">Pricing</router-link>
            </li>
        </ul>
         <div class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" @keyup="search()" v-model="keyword" type="search" placeholder="Search" aria-label="Search">
        </div>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            keyword : ""
        }
    },
    methods:{
        search(){
            this.$emit('search',this.keyword)
        }
    }
}
</script>

<style>

</style>
