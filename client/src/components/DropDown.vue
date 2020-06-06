<template>
  <div>
    <b-form-input list="my-list-id"></b-form-input>

    <datalist id="my-list-id">
      <option>Manual Option</option>
      <option v-for="size in sizes">{{ size }}</option>
    </datalist>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "DropDown",
  data() {
    return {
      sizes: ["Small", "Medium", "Large", "Extra Large"]
    };
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
