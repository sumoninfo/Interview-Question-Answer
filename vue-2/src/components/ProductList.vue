<template>
  <ul>
    <li
        v-for="product in products"
        :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button
          :disabled="!product.inventory"
          @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapState({
      products: state => state.products.all
    }),
  },

  /*computed: mapState({
    products: state => state.products.all
  }),*/
  /* methods : mapActions('cart', [
     'addProductToCart'
   ]),*/
  methods: {
    addProductToCart(products) {
      this.$store.dispatch('cart/addProductToCart', products)
    }
  },

  created() {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>