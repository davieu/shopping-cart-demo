<template>
  <div>
    <!-- TOGGLE PROMOTIONS -->
    <h1>Activate Promotions</h1>
    <div class="promotions-div">
      {{ promotions[0].promotionFunc() }}
      <b-button v-b-toggle.collapse-1 variant="primary"
        >Promotions List:</b-button
      >
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <b-form @submit="onPromotionsSubmit">
            <b-form-group id="promotions-group">
              <p>Select the promotions you want cusomers to use</p>
              <b-form-checkbox-group
                v-model="promotionSubmitData"
                v-for="(promotion, index) in promotions"
                :key="index"
                id="promotions-checkboxes"
              >
                <b-form-checkbox checked :value="promotion.productName">
                  <b>{{ promotion.productName }}</b>
                  : {{ promotion.promotion }}
                </b-form-checkbox>
              </b-form-checkbox-group>
              <b-button
                class="promotions-submit-btn"
                type="submit"
                variant="success"
                >Submit</b-button
              >
            </b-form-group>
          </b-form>
        </b-card>
      </b-collapse>
    </div>
    <br />
    <hr />

    <!-- POST/ADD PRODUCT -->
    <h1>Add Product</h1>
    <div class="products-list">
      <b-form @submit="onPostSubmit">
        <input
          type="text"
          class="input-field"
          v-model="formData.productName"
          required
          placeholder="Product name..."
        />
        <br />
        <input
          type="number"
          step="0.01"
          class="input-field"
          v-model="formData.price"
          required
          placeholder="Price..."
        />
        <br />
        <input
          type="text"
          class="input-field"
          v-model="formData.description"
          required
          placeholder="Description..."
        />
        <br />
        <b-button type="submit" value="Submit" variant="success"
          >Submit</b-button
        >
        <div
          class="error-handler-div"
          :class="{ success: getRequestStatus, error: !getRequestStatus }"
        >
          <span class="err-symbol" v-if="getRequestStatus && addMSG">
            <b>&#10004;</b>
          </span>
          <span class="err-symbol" v-if="getRequestStatus === false && addMSG">
            <b>X </b>
          </span>
          <span v-if="addMSG">{{ successOrErrorHandlerForAddProd }}</span>
        </div>
      </b-form>
    </div>
    <br />
    <hr />

    <!-- DELETE PRODUCTS -->
    <h1>Delete Product</h1>
    <div class="products-list">
      <form @submit="OnDeleteSubmit">
        <input
          type="text"
          class="input-field"
          v-model="willDelete"
          required
          placeholder="Product name..."
        />
        <b-button type="submit" value="Submit" variant="success"
          >Submit</b-button
        >
        <div
          class="error-handler-div"
          :class="{
            success: getRequestStatus,
            error: !getRequestStatus
          }"
        >
          <span class="err-symbol" v-if="getRequestStatus && deleteMSG">
            <b>&#10004;</b>
          </span>
          <span
            class="err-symbol"
            v-if="getRequestStatus === false && deleteMSG"
          >
            <b>X </b>
          </span>
          <span v-if="deleteMSG">{{ successOrErrorHandlerForDelProd }}</span>
        </div>
      </form>
      <!-- 
        TESTING DELETE ON STATE
      <div v-for="(product, index) in allProducts" :key="product._id">
        <p>{{ index }}{{ product }}</p>
      </div> 
      -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "FormSubmit",
  data() {
    return {
      formData: {
        productName: "",
        price: "",
        description: ""
      },
      promotionSubmitData: [],
      willDelete: "",
      deleteMSG: false,
      addMSG: false
    };
  },
  methods: {
    ...mapActions([
      "addProduct",
      "addPromotionToProduct",
      "deleteProduct",
      "fetchProducts"
    ]),

    onPostSubmit(e) {
      // local state - for handling the err/success msgs
      this.deleteMSG = false;
      this.addMSG = true;
      e.preventDefault();
      // trim excess white space
      this.formData.productName = this.formData.productName.trim();
      this.formData.description = this.formData.description.trim();
      const payload = this.formData;
      this.addProduct(payload);
      // this.addMSG = false;
    },
    onPromotionsSubmit(e) {
      e.preventDefault();
      const payload = this.promotionSubmitData;
      this.addPromotionToProduct(payload);
    },
    OnDeleteSubmit(e) {
      // local state - for handling the err/success msgs
      this.addMSG = false;
      this.deleteMSG = true;
      e.preventDefault();
      // This is iterating through the products state with the allProducts getter
      // return that specific product object so I can get the product ID to send to the /api/delete/:id route
      let findProduct = this.allProducts.find(products => {
        return (
          products.productName.toLowerCase() === this.willDelete.toLowerCase()
        );
      });
      let payload = "";

      if (findProduct !== "") {
        payload = findProduct;
        console.log(payload);
        this.deleteProduct(payload);
      } else {
        this.deleteProduct(payload);
      }
    }
  },
  computed: {
    ...mapGetters(["getErrorMsg", "getRequestStatus", "allProducts"]),
    ...mapState(["promotions", "productPromotionsActivated"]),
    successOrErrorHandlerForAddProd() {
      if (this.getRequestStatus) {
        return "Product Added!";
      } else if (this.getRequestStatus == false) {
        return this.getErrorMsg;
      } else {
        return "";
      }
    },
    successOrErrorHandlerForDelProd() {
      if (this.getRequestStatus) {
        return "Product Deleted!";
      } else if (this.getRequestStatus == false) {
        return this.getErrorMsg;
      } else {
        return "";
      }
    }
  },
  mounted() {
    this.promotionSubmitData = this.productPromotionsActivated;
    this.fetchProducts();
  }
};
</script>

<style scoped>
.error-handler-div {
  margin-top: 15px;
}
.promotions-submit-btn {
  margin-top: 15px;
}
.success {
  text-align: center;
  font-size: 20px;
  background: #41b883;
  border-radius: 5px;
}
.err-symbol {
  font-weight: bold;
  color: red;
}
.error {
  text-align: center;
  font-size: 20px;
  background: #faafa5;
  border-radius: 5px;
}
.input-field {
  justify-content: center;
  width: 100%;
  padding: 10px;
  border: 1px solid #41b883;
  margin-bottom: 10px;
  outline: 0;
}
</style>
