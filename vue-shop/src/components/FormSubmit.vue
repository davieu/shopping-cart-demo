<template>
  <div>
    <h1>Add Product</h1>
    <div class="products-list">
      <form @submit="onSubmit">
        <input type="text" class="input-field" v-model="formData.productName" required placeholder="Product name...">
        <br/>
        <input type="number" step="0.01" class="input-field" v-model="formData.price" required placeholder="Price...">
        <br/>
        <input type="text" class="input-field" v-model="formData.description" required placeholder="Description...">
        <br/>
        <b-button type="submit" value="Submit" variant="success">Submit</b-button>
        <div class="error-handler-div" :class="{'success': getRequestStatus, 'error': !getRequestStatus}">
          <span class="err-symbol" v-if="getRequestStatus"><b>&#10004;</b></span>
          <span class="err-symbol" v-if="getRequestStatus === false"><b> X </b></span>
          <span> {{successOrErrorHandler}}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  name: 'FormSubmit',
  data() {
    return {
      formData: {
        productName: '',
        price: '',
        description: ''
      }
    }
  },
  methods: {
    ...mapActions(['addProduct']),
    
    onSubmit(e) {
      e.preventDefault();
      const payload = this.formData
      this.addProduct(payload)
    }
  },
  computed: {
    ...mapGetters(['getErrorMsg', 'getRequestStatus']),
    successOrErrorHandler() {
      if (this.getRequestStatus) {
        return "Product Added!"
      } else if (this.getRequestStatus == false) {
        return this.getErrorMsg
      } else {
        return ''
      }
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

  .error-handler-div {
    margin-top: 15px;
  }

  .success {
    text-align: center;
    font-size:20px;
    background: #41b883;
    border-radius: 5px;
  }

  .err-symbol {
    font-weight: bold;
    color: red;
  }
  .error {
    text-align: center;
    font-size:20px;
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
    
    
