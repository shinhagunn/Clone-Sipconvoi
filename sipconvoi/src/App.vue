<template>
  <div id="app">
    <comp-header/>
    <!-- <router-view/> -->
    <comp-sipnam v-bind:dataProducts="dataProducts"/>
    <comp-footer/>
  </div>
</template>

<script>
import compHeader from './components/header.vue'
import compFooter from './components/footer.vue'
import compHome from './components/home.vue'
import compSipnam from './components/sipnam.vue'
export default {
  name: 'App',
  data() {
    return {
      dataProducts: [
        {
          id: 1,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 2,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 3,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 4,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 5,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 6,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 7,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 8,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 9,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 10,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 11,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 12,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 13,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 14,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 15,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 16,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 17,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 18,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 19,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 20,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 21,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 22,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 23,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 24,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 25,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 26,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 27,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 28,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 29,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        },
        {
          id: 30,
          name: 'Quần sịp con voi cao cấp',
          key: 'S-KI1',
          price: 60000,
          description: 'Đây là một siêu phẩm hiếm có khó tìm với phong cách thần Voi rừng của châu phi mặc nó bạn sẽ làm cho vợ mình phải chết mê',
          imgUrl: '../assets/img/product5.jpg'
        }
      ]
    }
  },
  components: {
    compHeader,
    compFooter,
    compHome,
    compSipnam
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  /* ------------------COMMON------------ */
  .container{
    width: 1080px;
    margin: 0px auto;
  }

  .row{
    margin: 0px -8px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .container + .container{
    margin-top: 16px;
  }

  .col-l-6{
    width: 50%;
    padding: 0 8px;
  }

  .col-l-4{
    width: calc(100% / 3);
    padding: 0px 8px;
  }
  
  .col-l-3{
    width: calc(100% / 4);
    padding: 0px 8px;
  }

  a{
      text-decoration: none;
      color: #000;
      margin-right: 14px;
      font-size: 15px;
  }

  a:hover{
      cursor: pointer;
      color: #40a9ff;
      transition: all 0.2s;

  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
