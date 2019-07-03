<template>
    <div>
        <h2>Cart</h2>

          <ul class="list-group">
            <li class="list-group-item">
                <span class="item-name">Items</span>
                <span class="item-price float-right">Price</span>
            </li>
            <li v-for="(item, index) in items" :key="index" class="list-group-item">
                <span class="item-name">{{item.tittle}}</span>
                <span class="item-price float-right">$S{{item.price}}</span>
            </li>
            <li class="list-group-item">
                <span class="item-name">Total</span>
                <span class="item-price float-right">${{totalPrice}}</span>
            </li>
          </ul>

    </div>
</template>

<script>
export default {
    props: ["items"],
    computed:{
        totalPrice(){
            var total = 0;
            this.items.forEach(item => {
                total += parseFloat(item.price);
            })
            return total.toFixed(2);
        }
    }
}
</script>

<style>

</style>
