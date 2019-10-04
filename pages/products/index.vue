<template>
  <section class="container">
    <nuxt-link :to="`/products`">back</nuxt-link>
    <h1>{{product.name}}</h1>
    <p>Price: {{product.price}}</p>
  </section>
</template>
&nbsp;
<script>
import { mapGetters } from 'vuex';
export default {
  fetch({ store, params }) {
    store.commit('products/SET_CURRENT', params.id);
  },
  computed: {
    ...mapGetters({
      product: 'products/current',
    }),
  },
};
</script>