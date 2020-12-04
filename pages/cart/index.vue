
<template>
<div>
    <cartHeaderComponent/>
  <div class="cart-box "> 
            <div class="cart-body">
                <div class="cart-t">
                    <a href="#" class="text-red" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#loginModal">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        Checkout →
                    </a>
                </div>
                <div class="cart-items container-fluid">
                 
                 
                   <div class="cart-item">
                        <div class="img-box">
                            <img src="~assets/images/138-original.jpg" alt="">
                        </div>
                        <div class="cart-about">
                            <h5 class="item-name">Content Creation and Editing for Instagram Stories</h5>
                            <span class="author">A course by Mina Barrio</span>
                            <span class="discount">48% Disc. <strike>₽3,475</strike> </span>
                            <div class="lang">
                                <p>
                                    <i class="fa fa-volume-up" aria-hidden="true"></i>
                                    Spanish
                                                                    
                                    <i class="fa fa-cc" aria-hidden="true"></i>
                                        Spanish, Portuguese, Enlish, German
                                </p>
                                
    
                                </div>
                            </div>
                       
                        <div class="cart-price ">
                            <span>₽ 895</span>
                            <button type="button" class="close close-cart ml-1 mr-1">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
             
                <div class="cart-f">
                    <div class="cart-f-about">
                        <small>
                            ₽ 985 is equivalent to US$ 12.67 <br>
                            We will charge you in US$. You might notice a small difference in the amount, depending on your bank's commissions. The prices of Domestika products are subject to change. You can temporarily save your order in your cart, which will reflect each product's most recent price. The discount codes are not cumulative, nor do they apply together with other special promotions unless otherwise indicated. In the case of 2x1 promos, we will apply the discount towards the course with the lower price.
                        </small>
                        <div class="total">
                            <span>
                                Total ₽ 895
                            </span>
                        </div>
                    </div>
                    <div class="cart-ch">
                        <div class="cart-ch-box">
                            <ul>
                                <li><img src="~assets/images/visa.png" alt=""></li>
                                <li><img src="~assets/images/mastercard.png" alt=""></li>
                                <li><img src="~assets/images/uzcard.png" alt=""></li>
                                
                            </ul>
                            <a href="#" class="check-btn" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#loginModal">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                Checkout →
                            </a>
                        </div>
                    </div>
                    <div class="cart-f-f">
                        <a href="#">
                            <i class="fa fa-ticket" aria-hidden="true"></i>
                            Do you have discount code?
                        </a>
                    </div>
                </div>
            </div>
        </div> 
        </div>
</template>

<script>
import cartHeaderComponent from "@/components/cartHeaderComponent"
export default {
    components:{
        cartHeaderComponent
    }
}
</script>

<style scoped>


.cart-alert {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  background-color: #fff;
  padding: 20px;
  border-top: 1px solid #e0e0e0;
}
.info-icon{
  font-size: 130%;
  color: blue;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 50%;

}
.cart-link {
  background: none !important;
}

.cart-link {
  font-weight: 400 !important;
  white-space: nowrap;
}

.cart-link:hover i {
  color: red !important;
}
.navbar-brand:hover {
  color: red !important;
}
.cart-container{
    padding: 20px;
}
.cart-top{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.cart-top h4, a{
  white-space: nowrap;
  margin: 0;
}
.cont-link, .cart-t a{
    color: #848484 ;
    font-size: 90%;
}
.cont-link:hover{
    color: #f00 !important;
}
.cart-t a:hover{
    color: red !important;
    text-decoration: underline !important;
}
.cart-body{
  padding: 20px 20px 0;
}
.cart-t{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 20px 5px;
}

.cart-box {
    background-color: #fff;
    margin-top: 10px;
    padding:  0 20px;
}
.cart-items{
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #e0e0e0;

}
.cart-item{
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 10px;
    border-top: 1px solid #e0e0e0;

}
.img-box{
    width: 90px;
    height: 90px;
    position: relative;
    margin-right: 20px;
}
.img-box img{
    position: absolute;
    width: 100%;
    height: 100%;
}
.cart-about{
    width: 60%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}
.item-name{
    font-size: 90%;
}
.author{
    font-size: 80%;
}
.discount{
    margin: 10px 0;
    font-size: 75%;
    color: red;
}
.lang *{
    font-size: 85%;
}

.cart-price{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 10%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.cart-price span{
    white-space: nowrap;
}

.cart-f{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding: 20px 0 0;

}
.cart-f-about{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 10px;
}
.cart-f-about small{
  width: 70%;
  color: #848484
}
.cart-ch{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px ;
}
.cart-ch-box{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  width: 50%;
}
.cart-ch ul{
  width: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  list-style-type: none;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 0;
  margin: 0  20px 0 0 ;
}
.cart-ch li{
  border: 1px solid #e0e0e0;
  width: 35px;
  height: 25px;
  position: relative;
  border-radius: 1px;
  overflow: hidden;
}
.cart-ch img{
  position: absolute;
  width: 100%;
  height: 100%;
}

.check-btn{
  background-color: #f00;
  color: #fff;
  font-size: 120%;
  padding: 10px;
  border-radius: 2px;
  white-space: nowrap;
}

.check-btn:hover{
  color: #fff !important;
  background-color: #c00;
}
.cart-f-f{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 20px 0;
}
.cart-f-f a{
  color: red;
  font-size: 80%;
  margin: 10px 0;
}

</style>