<template>
  <div>
    <h1>Products</h1>
      <div class="products-list">
        <form action=""></form>
        <input type="text" placeholder="Add Todo...">
        <input type="submit" value="Submit">
      </div>
      {{ allProducts }}
  </div>
</template>

<script>
// { "_id": "5d1ff799f374df8498415fc0", "productName": "orange", "price": 0.25, "description": "A juicy citrus that will enrich you with vitamin C!", "__v": 0 } ]
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Products',
  methods: {
    ...mapActions(['fetchProducts'])
  },
  computed: {
   ...mapGetters(['allProducts'])
  },
  created() {
    this.fetchProducts();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
