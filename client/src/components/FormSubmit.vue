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
    <b-button v-b-toggle.collapse-2 class="m-1" variant="primary"
      >Toggle All Products</b-button
    >
    <b-collapse visible id="collapse-2">
      <b-form-select id="my-list-id" :select-size="7" v-model="willDelete">
        <option></option>
        <option
          v-for="(product, index) in getArrayOfProductNames"
          :key="index"
          >{{ product }}</option
        >
      </b-form-select>
    </b-collapse>
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
    </div>
    <br />
    <hr />

    <!-- UPDATE PRODUCTS -->
    <!-- Update title/drop down for products -->
    <h1>Update Product</h1>
    <br />
    <h5>Select Product to Update</h5>
    <b-button v-b-toggle.collapse-3 class="m-1" variant="primary"
      >Toggle All Products</b-button
    >
    <b-collapse visible id="collapse-3">
      <b-form-select
        id="my-list-id"
        :select-size="7"
        v-model="updateThisProduct"
      >
        <option></option>
        <option
          v-for="(product, index) in getArrayOfProductNames"
          :key="index"
          >{{ product }}</option
        >
      </b-form-select>
    </b-collapse>
    <br />
    <!-- The Update Form -->
    <h4 v-if="updateThisProduct">
      <b>{{ updateThisProduct }}</b>
    </h4>

    <div class="products-list">
      <b-form @submit="onUpdateSubmit">
        <input
          type="text"
          class="input-field"
          v-model="formDataUpdate.productName"
          placeholder="Change product name to..."
        />
        <br />
        <p v-if="updateThisProduct">
          Current Price: <b>{{ prodDetails.price }}</b>
        </p>
        <input
          type="number"
          step="0.01"
          class="input-field"
          v-model="formDataUpdate.price"
          placeholder="Change price to..."
        />
        <br />
        <p v-if="updateThisProduct">
          Current Description: <b>{{ prodDetails.description }}</b>
        </p>
        <input
          type="text"
          class="input-field"
          v-model="formDataUpdate.description"
          placeholder="Change description to..."
        />
        <br />
        <b-button
          type="submit"
          value="Submit"
          variant="success"
          v-if="updateThisProduct"
          >Submit</b-button
        >
        <div
          class="error-handler-div"
          :class="{ success: getRequestStatus, error: !getRequestStatus }"
        >
          <span class="err-symbol" v-if="getRequestStatus && updateMSG">
            <b>&#10004;</b>
          </span>
          <span
            class="err-symbol"
            v-if="getRequestStatus === false && updateMSG"
          >
            <b>X </b>
          </span>
          <span v-if="updateMSG">{{ successOrErrorHandlerForUpdateProd }}</span>
        </div>
      </b-form>
    </div>
  </div>

  <!-- 
    // TESTING STATE - shows the whole state so you can check what changed
      <div v-for="(product, index) in allProducts" :key="product._id">
        <p>{{ index }}{{ product }}</p>
      </div> 
  -->
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
      formDataUpdate: {
        productName: "",
        price: "",
        description: ""
      },
      promotionSubmitData: [],
      willDelete: "",
      deleteMSG: false,
      addMSG: false,
      updateMSG: false,
      updateThisProduct: ""
    };
  },
  methods: {
    ...mapActions([
      "addProduct",
      "addPromotionToProduct",
      "deleteProduct",
      "updateProduct",
      "fetchProducts"
    ]),

    onPostSubmit(e) {
      // local state - for handling the err/success msgs
      this.deleteMSG = false;
      this.updateMSG = false;
      this.addMSG = true;
      e.preventDefault();
      // trim excess white space
      this.formData.productName = this.formData.productName.trim();
      this.formData.description = this.formData.description.trim();
      const payload = this.formData;
      this.addProduct(payload);
      console.log(payload);
      // this.addMSG = false;
    },
    onPromotionsSubmit(e) {
      e.preventDefault();
      const payload = this.promotionSubmitData;
      this.addPromotionToProduct(payload);
    },
    OnDeleteSubmit(e) {
      // Needed this to reset the state for the item to be updated. If the item to be updated is deleted it
      // would cause a bug so on delete it resets the item to be deleted to empty.
      this.updateThisProduct = "";
      // local state - for handling the err/success msgs
      this.updateMSG = false;
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

      // if product found then delete
      if (findProduct !== "") {
        payload = findProduct;
        console.log(payload);
        this.deleteProduct(payload);
        // if not found then send empty payload and the action.js function will error handle
      } else {
        this.deleteProduct(payload);
      }
    },

    onUpdateSubmit(e) {
      this.deleteMSG = false;
      this.updateMSG = true;
      this.addMSG = false;
      e.preventDefault();

      let productDetails = this.allProducts.find(prod => {
        return prod.productName === this.updateThisProduct;
      });
      let payload = { product: {}, id: productDetails._id };

      if (
        // Will not allow for the same name to be sent in as the same productName
        this.formDataUpdate.productName &&
        this.formDataUpdate.productName.toLowerCase() !==
          this.updateThisProduct.toLowerCase()
      ) {
        payload.product.productName = this.formDataUpdate.productName;
      }
      if (this.formDataUpdate.price) {
        payload.product.price = this.formDataUpdate.price;
      }
      if (this.formDataUpdate.description) {
        payload.product.description = this.formDataUpdate.description;
      }

      // this will be sent to the action/mutation if their is data in payload.product object
      if (Object.keys(payload.product).length !== 0) {
        this.updateProduct(payload);
      }
    }
  },
  computed: {
    ...mapGetters([
      "getErrorMsg",
      "getRequestStatus",
      "allProducts",
      "getArrayOfProductNames"
    ]),
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
    },
    successOrErrorHandlerForUpdateProd() {
      if (this.getRequestStatus) {
        return "Product Updated!";
      } else if (this.getRequestStatus == false) {
        return this.getErrorMsg;
      } else {
        return "";
      }
    },
    prodDetails() {
      let details = "";
      if (this.updateThisProduct) {
        details = this.allProducts.find(prod => {
          return (
            prod.productName.toLowerCase() ===
            this.updateThisProduct.toLowerCase()
          );
        });
      }

      return details;
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
