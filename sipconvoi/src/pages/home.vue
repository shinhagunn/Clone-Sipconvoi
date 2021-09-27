<template>
  <section id="home">
    <figure class="home__banner">
      <img src="../assets/img/banner.jpg" alt="banner" />
    </figure>

    <div class="home__Images">
      <div class="container">
        <div class="row">
          <figure class="col-l-6">
            <img src="../assets/img/imageleft_1.png" alt="Ảnh 1" />
            <img src="../assets/img/imageleft_2.png" alt="Ảnh 2" />
          </figure>
          <figure class="col-l-6">
            <img src="../assets/img/imageright.png" alt="Ảnh 3" />
          </figure>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <figure class="col-l-4">
            <img src="../assets/img/image4.png" alt="Ảnh 4" />
          </figure>
          <figure class="col-l-4">
            <img src="../assets/img/image5.png" alt="Ảnh 5" />
          </figure>
          <figure class="col-l-4">
            <img src="../assets/img/image6.png" alt="Ảnh 6" />
          </figure>
        </div>
      </div>
    </div>

    <div class="home__products">
      <div class="products__list">
        <h2 class="products__list-title">Sản phẩm mới</h2>

        <div class="container">
          <div class="row">
            <sipnam
              v-for="(product, index) in dataProducts"
              :key="index"
              :product="product"
            />
          </div>
        </div>
      </div>

      <div class="products__list">
        <h2 class="products__list-title">Sản phẩm bán chạy</h2>

        <div class="container">
          <div class="row">
            <sipnam
              v-for="(product, index) in dataProducts"
              :key="index"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="home__register">
      <div class="container">
        <div class="row">
          <figure class="home__register-img">
            <img src="../assets/img/home_register.jpg" alt="Image minh hoa" />
          </figure>
          <div class="resiter__content">
            <h3 class="register__title">Đăng ký nhận ưu đãi</h3>
            <p class="register__text">
              Đăng ký Email của bạn để nhận thông tin ưu đãi từ sipconvoi
            </p>
            <form action="" class="register__form">
              <input
                type="email"
                class="register__input-email"
                placeholder="Nhập Email của bạn"
              />
              <input type="submit" class="register__input-sub" value="->" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sipnam from "../components/sipnam.vue";
import data from "../data";

export default {
  components: {
    sipnam,
  },
  name: "compHome",
  data() {
    return {
      dataProducts: data,
      methods: {
        showBuyNow(e) {
          console.log(e);
        },
      },
    };
  },
};
</script>

<style>
/* ---------------------HOME-------------- */
#home {
  /* padding-top: 128px; */
}

.home__banner img {
  max-width: 100%;
}

.home__Images {
  padding: 50px 0px;
}

.home__Images img {
  max-width: 100%;
  display: block;
}

.home__products {
  background-color: #f2f2f2;
}

.products__list {
  padding: 25px 0px;
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

.home__register .row {
  padding: 50px 50px;
  justify-content: flex-start;
}

.resiter__content {
  flex: 1;
  padding-left: 50px;
}

.register__title {
  margin-bottom: 12px;
  text-align: left;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: normal;
}

.register__text {
  text-align: left;
  margin-bottom: 24px;
}

.register__form {
  display: flex;
  align-items: center;
}

.register__input-email {
  flex: 1;
  padding: 0px 20px;
  height: 48px;
  border: 1px solid #ddd;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  outline: none;
  font-size: 16px;
  transition: all 0.3s;
}

.register__input-email:focus {
  border-color: #1890ff;
}

.register__input-sub {
  width: 50px;
  height: 48px;
  border: 1px solid #333;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #333;
  color: #fff;
}

.register__input-sub:hover {
  cursor: pointer;
}
</style>