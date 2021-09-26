<template>
    <footer id="footer">
        <div class="footer__top">
            <div class="container">
                <div class="row">
                    <figure class="footer__logo">
                        <a href="#"><img src="../assets/img/logo.png" alt="logo" ></a>
                    </figure>
                    <div class="footer__comp">
                        <h3 class="footer__list-title">Hỗ trợ</h3>
                        <ul class="footer__list">
                            <li class="footer__item"><a href="">Trạng thái đơn hàng</a></li>
                            <li class="footer__item"><a href="">Hướng dẫn chọn size</a></li>
                            <li class="footer__item"><a href="">Hướng dẫn đặt hàng</a></li>
                            <li class="footer__item"><a href="">Câu hỏi thường gặp</a></li>
                        </ul>
                    </div>
                    <div class="footer__comp">
                        <h3 class="footer__list-title">Giới thiệu</h3>
                        <ul class="footer__list">
                            <li class="footer__item"><a href="">Trạng thái đơn hàng</a></li>
                            <li class="footer__item"><a href="">Hướng dẫn chọn size</a></li>
                            <li class="footer__item"><a href="">Hệ thống cửa hàng</a></li>
                            <li class="footer__item"><a href="">Blog</a></li>
                        </ul>
                    </div>
                    <div class="footer__comp">
                        <h3 class="footer__list-title">Chính sách bán hàng</h3>
                        <ul class="footer__list">
                            <li class="footer__item"><a href="">Chính sách đổi trả</a></li>
                            <li class="footer__item"><a href="">Chính sách vận chuyển</a></li>
                            <li class="footer__item"><a href="">Chính sách thanh toán</a></li>
                            <li class="footer__item"><a href="">Chính sách bảo mật</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__end">
            <p class="footer__end-text">© 2021 <a href="">SipConVoi.</a> All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'compFooter',
        data() {
            return {

            }
        }
}
</script>
    
<style>
    /* ---------------------FOOTER-------------- */
    #footer .row{
        justify-content: space-between;
    }
    
    .footer__top{
        padding-bottom: 20px;
        background-color: #f2f2f2;
        border-bottom: 2px solid #40a9ff;
    }

    .footer__logo img{
        height: 57px;
    }

    .footer__list-title{
        margin-bottom: 20px;
        padding-top: 20px;
        font-size: 18px;
        text-align: left;
        text-transform: uppercase;
    }

    .footer__list{
        list-style-type: none;
    }

    .footer__item{
        padding: 6px 0px;
        text-align: left;
    }

    .footer__end{
        margin-top: 2px;
        padding: 4px;
        font-size: 15px;
    }

    .footer__end-text a{
        margin: 0;
        color: #40a9ff;
        font-size: 15px;
        line-height: 30px;
    }
</style>