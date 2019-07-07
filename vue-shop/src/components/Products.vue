<template>
  <div>      
      <!-- {{ allProducts }} -->
      
    <b-container>
            <b-row>
              <b-col cols="6" md="4" v-for="(product) in allProducts" :key="product._id">
                <b-card-group deck class="mb-3">
                <b-card :header="`${product.productName}`" class="text-center cards">
                  <p class="price">Price: {{ formatPrices(product.price) }}</p>
                  <hr>
                  <b-card-text>{{product.description}}</b-card-text>
                  <b-button variant="success" class="add-cart-btn">Add to Cart!</b-button>
                </b-card>
                </b-card-group>
              </b-col>
            </b-row>
    </b-container>
  </div>
</template>

<script>
// { "_id": "5d1ff799f374df8498415fc0", "productName": "orange", "price": 0.25, "description": "A juicy citrus that will enrich you with vitamin C!", "__v": 0 } ]
import { mapActions, mapGetters, mapState} from 'vuex';
export default {
  name: 'Products',
  methods: {
    ...mapActions(['fetchProducts']),
    formatPrices(prices) {
      // I used a try catch blocks because a bug keeps appearing when creating a new product. The err happens when a new product is added and the item has not loaded in but the function runs before the created product is loaded in. The functionality works but I stopped the err from initiating.
      try {
        // this formats the pricings and depending on where the decimal is. I converted number to string.
        let pricesToString = prices.toString()
        let returnPrice
        let indexOfDecimal = pricesToString.indexOf('.');
        if (indexOfDecimal == -1) {
          returnPrice = pricesToString + '.00' //1 >>> 1.00
        } else if (pricesToString[pricesToString.length - 2] == '.') {
          returnPrice = pricesToString + '0' //1.1 >>> 1.10
        } else {
          returnPrice = pricesToString // for prices that are already correctly formatted
        }
        return '$ ' + returnPrice //just adds a $ to the prices
      } catch(err) {}
    }
  },
  computed: {
    ...mapGetters(['allProducts']),
    ...mapState(['products'])
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

.price {
  text-align: right;
}

.card {
  border: 2px solid #41b883;
  border-radius: 8px;
  height: 275px;
}

.card-header {
  background: #41b883;
  border-radius: 10px;
  font-weight: bold;
}

.add-cart-btn {
  right:20px;
  bottom: 15px;
  position: absolute;
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
