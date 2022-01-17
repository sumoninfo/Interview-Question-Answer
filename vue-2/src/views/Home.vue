<template>
  <div class="home">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
    <hr>
    <h3>VueJS Directive </h3>
    <div v-changestyle="{color:'red'}">VueJS Directive</div>
    <div id="hook-arguments-example" v-demo:foo.a.b="'message'"></div>
    <hr>
    <h3>VueJS Filters </h3>
    {{ message | capitalize }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld   from '@/components/HelloWorld.vue'
import ProductList  from "@/components/ProductList";
import ShoppingCart from "@/components/ShoppingCart";

export default {
  name      : 'Home',
  components: {
    ShoppingCart,
    ProductList,
    HelloWorld
  },
  data      : () => ({
    message: 'hello world!'
  })
}
</script>
