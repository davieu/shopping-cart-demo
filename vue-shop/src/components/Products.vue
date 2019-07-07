<template>
  <div>      
      <!-- {{ allProducts }} -->
      
    <b-container>
            <b-row>
              <b-col cols="4" v-for="(product) in allProducts" :key="product._id">
                <b-card-group deck class="mb-3">
                <b-card border-variant="light" :header="product.productName" class="text-center" >
                  <b-card-text>{{product.description}}</b-card-text>
                  <b-button>Add to Cart!</b-button>
                </b-card>
                </b-card-group>
              </b-col>
            </b-row>
    </b-container>
     
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
body {
  font-family: "Franklin Gothic Medium", "Ariel Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0
}

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
