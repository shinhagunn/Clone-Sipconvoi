<template>
  <div class="sipnam">
    <div class="products__list">
      <h2 class="products__list-title">Quần lót nam</h2>

      <div class="container">
        <div class="row">
          <div
            class="product__item col-l-3"
            v-for="product in dataProducts"
            v-bind:key="product.index"
          >
            <figure class="product__img">
              <img src="../assets/img/product5.jpg" />
              <button class="product__buynow">XEM NGAY</button>
            </figure>
            <a class="product__title">{{ product.name }}</a>
            <p class="product__price">{{ product.price }}đ</p>
            <p class="product__key">{{ product.key }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data";

export default {
  name: "compSipnam",
  data() {
    return {
      dataProducts: data
    };
  },
};
</script>

<style>
.products__list {
  padding: 25px 0px;
}

.products__list .row {
  justify-content: flex-start;
}

.products__list-title {
  font-size: 34px;
  font-weight: normal;
}

.product__item {
  margin-top: 40px;
  height: 354px;
}

.product__img img {
  width: 100%;
  height: 246px;
  object-fit: cover;
  object-position: top;
}

.product__title {
  display: inline-block;
  font-size: 16px;
  margin: 16px 0 8px 0;
}

.product__title:hover {
  color: #2c3e50;
  text-decoration: underline;
}

.product__price {
  padding-bottom: 4px;
  font-size: 22px;
  font-weight: bold;
}

.product__key {
  font-size: 12px;
  padding-bottom: 12px;
}

.product__img {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.product__img:hover .product__buynow {
  bottom: 0px;
}

/* 98px */
.product__buynow {
  position: absolute;
  transition: all 0.2s linear;
  left: 0;
  bottom: -38px;
  width: 100%;
  height: 38px;
  color: #fff;
  font-size: 16px;
  background-color: #668eca;
  border: 1px solid #668eca;
}
</style>