<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Products />
  </div>
</template>

<script>
// @ is an alias to /src
import Products from "@/components/Products.vue";
export default {
  name: "home",
  components: {
    Products
  }
};
</script>