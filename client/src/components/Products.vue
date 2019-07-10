<template>
  <div>      
    <b-container>
      <!-- <div v-for="(pro,  index) in displayPromotions" :key="index">
        <p>{{pro.promotion}}</p>
      </div> -->
      <!-- MODAL BEGINS -->
      <div class="modal-div">
        <b-row>
          <b-col>
            <b-button v-if="productPromotionsActivated.length > 0" v-b-toggle.collapse-a.collapse-b variant="primary">Special Offers!</b-button>
          </b-col>
          <b-col>
            <b-button class="open-cart-btn" v-b-modal.modal-1 variant="primary">Shopping Cart: {{ getCartItemsLength }}</b-button>
          </b-col>
        </b-row>
        <b-collapse visible v-for="(promotion, index) in displayPromotionsActivated" :key="index" id="collapse-a" class="mt-2">
          <b-card class="special-offers-cards"><b>{{promotion.productName}}:</b> {{promotion.promotion}}!</b-card>
        </b-collapse>
        <!-- <b-collapse id="collapse-b" class="mt-2">
          <b-card class="special-offers-cards">3 for the price of 2 on oranges!</b-card>
        </b-collapse> -->

        <b-modal id="modal-1" size="sm" title="Cart">
          <div v-if="getCartItemsLength > 0">
            <div v-for="(item, index) in getShoppingCart" :key="index" >
            {{item.product.productName}}: <span class="product-count"> {{item.product.count}}</span>
            <div class="cart-btns"> 
              <button class="in-cart-del-btn" mb="1" @click="decrementCart(item.product.productName, item.product.price)"><b>-</b></button>
              <button class="in-cart-add-btn" @click="incrementCart(item.product.productName, item.product.price)"><b>+</b></button>
            </div>

            </div>
          </div>
          <div v-if="getCartItemsLength < 1">
            <p>Take a look around the Shop!</p>
          </div>
          
          <hr>
          <p>Sub Total: <span class="product-totals">{{ getSubTotal }}</span> </p> 
          <p>Tax: <span class="product-totals">{{ getTax }}</span> </p>  
          <p><b>Order Total:</b> <span class="product-totals"><b>{{ getOrderTotal }}</b></span></p>  
                <div slot="modal-footer" class="w-100">
        <p class="float-left"></p>
        <b-button
          variant="primary"
          class="float-right"
          @checkout="show=false"
        >
          Checkout
        </b-button>
  
      </div>
        </b-modal>
      </div>
      <!-- PRODUCTS BEGIN -->
      <b-row :class="{noPromotions: productPromotionsActivated.length < 1 }">
        <b-col  md="4" xs="12" v-for="(product) in allProducts" :key="product._id">
          <b-card-group deck class="mb-3">
          <b-card :header="`${product.productName}`" class="text-center cards">
            <span title="Promotion Available!" v-if="promotionIconOnCard(product.productName)">&#9889; </span>
            <span class="price">Price: {{ formatPrices(product.price) }} </span>
            <hr>
            <b-card-text>{{product.description}}</b-card-text>
            <b-button @click="incrementCart(product.productName, product.price, product._id)" variant="success" class="add-cart-btn">Add to Cart!</b-button>
          </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState} from 'vuex';
export default {
  name: 'Products',
  data() {
    return {
      cart: null,
      cartArrays: []
    }
  },
  methods: {
    ...mapActions(['fetchProducts', 'addProductToCart', 'removeProductFromCart']),
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
        return '$' + returnPrice //just adds a $ to the prices
      } catch(err) {}
    },
    incrementCart(productName, price, id) {
      let payload = {productName, price, id};
      this.addProductToCart(payload)
    },
    decrementCart(productName, price) {
      let payload = {productName, price};
      this.removeProductFromCart(payload)
    },
    promotionIconOnCard(name) {
      for (let i = 0; i < this.productPromotionsActivated.length; i++) {
        if (name == this.productPromotionsActivated[i]) {
          return true
        }
      }
    }
  },
  computed: {
    ...mapGetters(['allProducts', 'getSubTotal', 'getTax', 'getOrderTotal', 'getShoppingCart','getCartItemsLength',
    'displayPromotionsActivated']),
    ...mapState(['products', 'cartArray', 'typeOfProductCountInCart', 'productPromotionsActivated', 'promotions'])
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


.modal-content {
  p {
    margin: 0;
  }
  .product-totals {
    position: absolute;
    right: 35px;
  }
}

.open-cart-btn {
  position: absolute;
  right: 7%;
}

.modal-div {
  margin-bottom: 20px;
}

.cart-btns {
  display: inline;
  position: absolute;
  right: 35px;
}

.in-cart-del-btn {
  padding-right:8px;
  padding-left:8px;
  position: absolute;
  right: 70px;
  background: #faafa5
}

.in-cart-add-btn {
  padding-right:8px;
  padding-left:8px;
  background: #41b883;
}
.product-count {
  position: absolute;
  right: 72px;
}

.price {
  text-align: right;
}

.noPromotions {
  margin-top: 65px;
}

.card {
  border: 2px solid #41b883;
  border-radius: 8px;
  height: 275px;
}

.special-offers-cards {
  height: auto;
}


.card-header {
  background: #41b883;
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
