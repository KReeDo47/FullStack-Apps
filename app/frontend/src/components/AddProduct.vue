<template> <!-- создание шаблона -->
  <div>
    <div class="field">
      <label class="label">Product Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="productName" 
        />
      </div> <!-- v-model="productName" - связывания данных с элементами форм input. нужно указать начальное значение в data на стороне js -->
    </div>

    <div class="field">
      <label class="label">Price</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="productPrice"
        />
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="saveProduct">SAVE</button>
    </div>
  </div>
</template>

<script>

// Axios — клиентская библиотека HTTP, которая позволяет отправлять запросы (реквесты) к заданной конечной точке. 
import axios from "axios";

// начальное значение в data на стороне js
export default {
  data() { 
    return {
      productName: "",
      productPrice: "",
    };
  },

  // Async означает «асинхронный». Этот термин можно рассматривать как атрибут метода, показывающий, что сам метод выполняет асинхронную работу. 
  // Await — это ключевое слово, которое будет использоваться для вызова асинхронных методов. 
  methods: {
    // создать новый продукт
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/products", {
          product_name: this.productName,
          product_price: this.productPrice,
        });
        (this.productname = ""), (this.productPrice = ""); // зачистка полей
        this.$router.push("/"); // переходит в роутер, потом в индекс
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
