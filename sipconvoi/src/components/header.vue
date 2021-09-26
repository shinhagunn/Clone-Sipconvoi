<template>
    <header id="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="header__top-left">
                        <a class="header__top-support">
                            <i class="far fa-user"></i>
                            Hỗ trợ
                        </a>
                        <a class="header__top-system">
                            <i class="fas fa-search"></i>
                            Hệ thống cửa hàng
                        </a>
                    </div>
                    <figure class="header__top-logo">
                        <a href=""><img src="../assets/img/logo.png" alt="Logo"></a>
                    </figure>
                    <div class="header__top-right">
                        <a href="" class="header__top-find">
                            <i class="fas fa-search"></i>
                        </a>
                        <a href="" class="header__top-cart">
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <ul class="header__menu row">
                <li class="header__menu-item"><a href="#/sip-nam">Quần lót nam</a></li>
                <li class="header__menu-item"><a href="">Quần lót nữ</a></li>
                <li class="header__menu-item"><a href="">Quần lót trẻ em</a></li>
                <li class="header__menu-item"><a href="">Blog</a></li>
            </ul>  
        </div>

    </header>
</template>

<script>
export default {
    name: 'compHeader',
    data() {
        return {
        }
    },
    mounted() {
        var header = document.getElementById('header');
        var sticky = header.offsetTop;

        /* Bind the scroll Event */
        window.onscroll = function() {handleScrollHeader()};

        function handleScrollHeader() {
            if (window.pageYOffset > sticky) {
                // this.isSticky = true;
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');

            }
        }
    }
}
</script>

<style>
    /* ---------------------HEADER-------------- */
    #header{      
        background-color: #fff;
        z-index: 1;
    }

    .sticky{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;    
        box-shadow: 0 2px 10px 0.5px #000;
        margin-bottom: 128px;
    }

    .sticky + #home{
        padding-top: 128px;
    }

    .sticky + .sipnam{
        padding-top: 128px;
    }

    .header__top{
        border-bottom: 1px solid #ccc;
    }

    #header .row{
        justify-content: space-between;
    }

    .header__top-left{
        display: flex;
    }

    .header__top-logo img{
        height: 65px;
    }

    .header__top-right a{
        font-size: 16px;
    }

    .header__menu{
        margin: 0px auto;
        list-style-type: none;
    }

    .header__menu-item{
        padding: 12px;
    }

    .header__menu-item a{
        font-size: 16px;
        text-transform: uppercase;
        font-weight: bold;
        /* display: inline-block; */
    }
</style>