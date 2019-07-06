    <template>
      <div>
        <h1>Add Product</h1>
        <div class="products-list">
          <form @submit="onSubmit">
            <input type="text" class="test" v-model="formData.productName" required placeholder="Product name...">
            <br/>
            <input type="text" v-model="formData.price" required placeholder="Price...">
            <br/>
            <input type="text" v-model="formData.description" required placeholder="Description...">
            <br/>
            <input type="submit" value="Submit">
          </form>
        </div>
      </div>

    </template>
    
    <script>
    import { mapActions, mapGetters } from 'vuex';
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
          // const { productName, price, description } = this.formData
                const payload = this.formData
                // const payload = {
                //    product:
                //     {productName, 
                //     price,
                //     description}
                //   }
                            this.addProduct(payload)
        }
      }
    }
    </script>
    
    <style scoped>
      /* form {
        display: flex;
      } */

      input[type="text"] {
        justify-content: center;
        width: 100%;
        padding: 10px;
        border: 1px solid #41b883;
        margin-bottom: 10px;
        outline: 0;
      }

      input[type="submit"] {
        background: #41b883;
        color: #fff;
        border: 10px #41b883 solid;
        cursor: pointer;
      }
    </style>
    
    
