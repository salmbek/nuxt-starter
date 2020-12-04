<template>
  
    

    <div id="main-content">
      <div class="top-c-link">
        <h2>My courses</h2>
        <a href="#" class="link">see my all courses →</a>
      </div>

      <div class="courses-slider slideshow-container">
        <a class="prev link" id="minusSlides">&#10094;</a>
        <a class="next link" id="plusSlides">&#10095;</a>


        <div class="slide-item mySlides fader">
          <div class="slide-img-box">
            <img src="~assets/images/pict.jpeg" alt="">
          </div>
          <div class="slide-about">
            <div class="slide-text">
              <small class="pro-link bg-red text-white">BESTSELLER</small>
              <a href="#" class="link p-0 slide-title">

                Cartoon-Style Character Design with Procreate
              </a>
              <p class="author">By Salim Studio</p>

            </div>
            <nuxt-link to="/afterCourse" class="btn gtc">
              go to course →
            </nuxt-link>
          </div>
        </div>
        <div class="slide-item mySlides fader">
          <div class="slide-img-box">
            <img src="~assets/images/teacher.jpg" alt="">
          </div>
          <div class="slide-about">
            <div class="slide-text">
              <small class="pro-link bg-red text-white">BESTSELLER</small>
              <a href="#" class="link p-0 slide-title">

                Cartoon-Style Character Design with Procreate
              </a>
              <p class="author">By Salim Studio</p>

            </div>
            <a href="../after/mycourses.html" class="btn gtc">
              go to course →
            </a>
          </div>
        </div>
        <div class="slide-item mySlides fader">
          <div class="slide-img-box">
            <img src="~assets/images/pict.jpeg" alt="">
          </div>
          <div class="slide-about">
            <div class="slide-text">
              <small class="pro-link bg-red text-white">BESTSELLER</small>
              <a href="#" class="link p-0 slide-title">

                Cartoon-Style Character Design with Procreate
              </a>
              <p class="author">By Salim Studio</p>

            </div>
            <a href="../after/mycourses.html" class="btn gtc">
              go to course →
            </a>
          </div>
        </div>

        <div style="text-align:center" class="dots">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </div>
      </div>


      <div class="section-2 courses" id="section2">
        <div class="courses-title mb-3 d-flex align-items-center">
          <h3>Recommended Courses</h3>
          <a href="../after/courses.html" class="ml-2 text-red">see more →</a>
        </div>
        <div class="courses-blog">

          <div class="card courses-item" style="width: 18rem">
            <a href="#" class="yt-link" data-toggle="modal" data-target="#courseModal">
              <i class="fa fa-play" aria-hidden="true"></i>

              <img class="card-img-top" src="~assets/images/262-original.jpg" alt="alt of pic" />
            </a>

            <div class="course-body card-body">
              <h5 class="card-title">
                Cartoon-Style Character Design with Procreate
              </h5>
              <div class="card-text">
                <p class="author">A course by Ed Vill</p>
                <p class="course-about">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <span class="seen">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  63
                </span>
                <span class="time">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  10/16/2020
                </span>
              </div>
              <br />
              <span class="discount">48% Disc. <strike>₽3,475</strike> </span>
              <br />
              <a href="../one/cart.html" class="course-price">
                <i class="fa fa-shopping-cart"></i> ₽ 1,800
              </a>
            </div>
            <a href="#" class="text-red listPlus">+ List</a>
          </div>
          <div class="card courses-item" style="width: 18rem">
            <a href="#" class="yt-link" data-toggle="modal" data-target="#courseModal">
              <i class="fa fa-play" aria-hidden="true"></i>

              <img class="card-img-top" src="~assets/images/262-original.jpg" alt="alt of pic" />
            </a>

            <div class="course-body card-body">
              <h5 class="card-title">
                Cartoon-Style Character Design with Procreate
              </h5>
              <div class="card-text">
                <p class="author">A course by Ed Vill</p>
                <p class="course-about">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <span class="seen">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  63
                </span>
                <span class="time">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  10/16/2020
                </span>
              </div>
              <br />
              <span class="discount">48% Disc. <strike>₽3,475</strike> </span>
              <br />
              <a href="../one/cart.html" class="course-price">
                <i class="fa fa-shopping-cart"></i> ₽ 1,800
              </a>
            </div>
            <a href="#" class="text-red listPlus">+ List</a>
          </div>
          <div class="card courses-item" style="width: 18rem">
            <a href="#" class="yt-link" data-toggle="modal" data-target="#courseModal">
              <i class="fa fa-play" aria-hidden="true"></i>

              <img class="card-img-top" src="~assets/images/262-original.jpg" alt="alt of pic" />
            </a>

            <div class="course-body card-body">
              <h5 class="card-title">
                Cartoon-Style Character Design with Procreate
              </h5>
              <div class="card-text">
                <p class="author">A course by Ed Vill</p>
                <p class="course-about">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <span class="seen">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  63
                </span>
                <span class="time">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  10/16/2020
                </span>
              </div>
              <br />
              <span class="discount">48% Disc. <strike>₽3,475</strike> </span>
              <br />
              <a href="../one/cart.html" class="course-price">
                <i class="fa fa-shopping-cart"></i> ₽ 1,800
              </a>
            </div>
            <a href="#" class="text-red listPlus">+ List</a>
          </div>
          <div class="card courses-item" style="width: 18rem">
            <a href="#" class="yt-link" data-toggle="modal" data-target="#courseModal">
              <i class="fa fa-play" aria-hidden="true"></i>

              <img class="card-img-top" src="~assets/images/262-original.jpg" alt="alt of pic" />
            </a>

            <div class="course-body card-body">
              <h5 class="card-title">
                Cartoon-Style Character Design with Procreate
              </h5>
              <div class="card-text">
                <p class="author">A course by Ed Vill</p>
                <p class="course-about">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <span class="seen">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  63
                </span>
                <span class="time">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  10/16/2020
                </span>
              </div>
              <br />
              <span class="discount">48% Disc. <strike>₽3,475</strike> </span>
              <br />
              <a href="../one/cart.html" class="course-price">
                <i class="fa fa-shopping-cart"></i> ₽ 1,800
              </a>
            </div>
            <a href="#" class="text-red listPlus">+ List</a>
          </div>
        </div>
        <a href="courses.html" id="more-courses" class="btn btn-primary text-light btn-lg">
          See more Domestika courses <i class="to-right">→</i>
        </a>
        <br>
      </div>
    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>


body{
  background-color: #f2f2f2   ;
}

.link{
  color: #212529;
}
.link:hover{
  color: red !important;
}

#main-content{
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  position: relative;
}

.top-c-link{
  padding: 40px 0px;
  width: 90%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 10px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; 
}
.top-c-link h2{
white-space: nowrap;
}

.top-c-link a{
  margin-left: 10px;
  color: #212529;
  white-space: nowrap;
}

.courses-slider{
  width: 90%;
  background-color: white;
  padding: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.slide-item{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: relative;
}

.slide-img-box{
  width: 320px;
  height: 200px;
  position: relative;
  margin-right: 30px;
}

.slide-img-box img{
  position: absolute;
  width: 100%;
  height: 100%;
}

.slide-about{
  width: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  height: 100%;
}
.gtc{
  background-color: #00b2bd;
  border-color: #00b2bd;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  color: #fff;
}
.gtc:hover{
  color: #fff !important;
  background-color: #008e97;
  border-color: #00828a;
}

.slide-text{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width: 100%;
}
.slide-text *{
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
.slide-text a{
  font-size: 150%;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 8px 11px;
  margin-top: -22px;
  color: white;
  font-weight: 200;
  font-size: 140%;
  -webkit-transition: 0.6s ease;
  -o-transition: 0.6s ease;
  transition: 0.6s ease;
  border-radius: 50% ;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  
}


.slideshow-container {
  position: relative;
  margin-bottom: 35px;
}
.next {
  right: -2.2%;
}
.prev {
  left: -2.2%;
}
.dots{
    position: absolute;
    bottom: -14%;
    left: 50%;
    -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
            transform: translateX(-50%);
    display: none;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  -webkit-transition: background-color 0.6s ease;
  -o-transition: background-color 0.6s ease;
  transition: background-color 0.6s ease;
}
.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fader {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
    


/* courses  */


.section-2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: #f2f2f2;
  width: 90%;
  margin-top: 30px;
}
.courses-title {
  justify-self: flex-start;
  -ms-flex-item-align: start;
      align-self: flex-start;
}
.courses-title p {
  color: #848484;
  font-size: 120%;
}
.courses-blog {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.courses-item {
  margin-bottom: 30px;
  min-width: 20%;
}
.yt-link {
  position: relative;
}
.yt-link:hover i {
  color: red;
}
.yt-link i {
  color: #fef1ee;
  font-size: 250%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}
.course-body .card-title {
  font-size: 110%;
  font-weight: 300;
}
.course-body .author {
  font-size: 90% !important;
  margin-bottom: 0 !important;
}
.course-body .course-about {
  font-size: 80% !important;
  margin: 0 !important;
  color: #848484;
}
.course-body .seen,
.time {
  margin: 0 !important;
  font-size: 80% !important;

  color: #848484;
}
.discount {
  color: Red;
  font-size: 80%;
}
.course-price {
  line-height: 1.2;
  border-radius: 0.125rem;
  color: #fff;
  fill: #fff;
  padding: 7px 14px;
  cursor: pointer;
  background-color: #00b2bd;
  border-color: #00b2bd;
  display: inline-block;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  -webkit-transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;
  -o-transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;
}

.course-body .course-price:hover {
  color: #fff !important;
  background-color: #008e97;
}

.listPlus {
  position: absolute;
  bottom: -8.5%;
  left: 1%;
  display: none;
  padding: 10px;
}
.courses-item:hover .listPlus {
  display: inline-block;
}
.listPlus:hover {
  display: inline-block;

  text-decoration: underline;
  color: red;
}



@media (max-width:768px){

  #add{
      display: none;
  }

  .slide-item, .courses-slider{
      padding: 0;
  }

  .gtc{
      padding: 4px 8px;
  }

  .slide-img-box{
      width: 200px;
      height: 100px;
      margin: 0 10px;
  }
  .slide-about{
      padding: 15px 10px;
  }
  .slide-text a{
      font-size: 110%;
  }
  .dots{
      display: block;
  }
  .prev, .next{
      display: none;
  }
  .section-2 {
      padding: 10px 0;
  }
.courses-blog {
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
  }

  .course-price:not(.follow) {
      width: 100%;
      margin-right: auto;
      margin-left: auto;
    }


  .courses-title p {
    font-size: 90%;
    text-align: center;
  }
  .courses-title h3 {
    text-align: center;
  }


}


@media (max-width: 400px){
  .slide-item{
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      position: relative;
  }
  .slide-img-box{
      height: 300px;
      margin: 0;
  }

  .slide-img-box, .slide-about{
      width: 100%
  }

  .courses-item {
      min-width: 90%;
    }
}


.link{
    color: black;
    text-decoration: none !important;
}







</style>