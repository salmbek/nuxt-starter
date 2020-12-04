<template>
    <div id="main">
        <headerComponent/>
        <br> 
    <div class="page_names col-12 p-3">
      <div>
        <a href="../../index.html" class="text-red homeLink"><i class="fa fa-home" aria-hidden="true"></i></a>
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
        <a href="#" class="currentLink">Courses</a>
      </div>
    </div>

    <!-- ============start of main contents ============ -->
    <div class="container-fluid main_content">
      <div class="filter-container">
        <form action="#" class="selects">
          <select class="js-courses-facets form-control">
            <option value="#">
              Courses
            </option>
            <option value="#">
              Course Bundles
            </option>
            <option value="#">
              Domestika Basics
            </option>
            <option value="#">
              New courses
            </option>
            <option value="#">
              Top rated
            </option>
            <option value="#">
              Popular courses
            </option>
            <option value="#">
              Open Courses
            </option>
            <option disabled="" value="">
              —
            </option>
            <option value="#">
              Gift ideas
            </option>
            <option value="#">
              Gift cards
            </option>
            <option disabled="" value="">
              —
            </option>
            <option selected="" value="#">
              Illustration courses
            </option>
            <option value="#">
              Photography &amp; Video courses
            </option>
            <option value="#">
              Marketing &amp; Business courses
            </option>
            <option value="#">
              Design courses
            </option>
            <option value="#">
              Craft courses
            </option>
            <option value="#">
              3D &amp; Animation courses
            </option>
            <option value="#">
              Architecture &amp; Spaces courses
            </option>
            <option value="#">
              Calligraphy &amp; Typography courses
            </option>
            <option value="#">
              Technology courses
            </option>
          </select>
        </form>
        <ul>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses Bundles</a></li>
          <li><a href="#">New Courses</a></li>
          <li><a href="#">Domestika
              <span class="pro-link bg-red text-white">new</span>
            </a>
          </li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses <span class="pro-link bg-red text-white">new</span></a></li>

        </ul>
        <ul>
          <li class="title-list">
            <h3>CATEGORIES</h3>
          </li>
          <br>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>

        </ul>
        <ul>
          <li class="title-list">
            <h3>CATEGORIES</h3>
          </li>
          <br>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>

        </ul>
        <ul>
          <li class="title-list">
            <h3>CATEGORIES</h3>
          </li>
          <br>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Courses</a></li>

        </ul>
      </div>

      <div class="courses-container">
        <div class="main-title container-fluid">
          <h2>Online courses for creative professionals</h2>
        </div>
        <div class="active dropdown sortings">
          <a class="dropdown-toggle" data-toggle="dropdown" id="sorting-course-dropdown" href="javascript:void(0);"
            aria-expanded="false"><span class="dropdown-toggle__prefix d-md-none">Sort by:</span>
            Popular
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <ul>
              <li class="active dropdown-item">
                <a data-track-category="ecommerce" data-track-action="sort" data-track-href=" "
                  data-track-label="popular" href="#">Popular</a>
              </li>
              <li class="dropdown-item">
                <a data-track-category="ecommerce" data-track-action="sort" data-track-href=" "
                  data-track-label="recent" href="#">New</a>
              </li>
              <li class="dropdown-item">
                <a data-track-category="ecommerce" data-track-action="sort" data-track-href=" "
                  data-track-label="highest_rated" href="#">Best rated</a>
              </li>
              <li class="dropdown-item">
                <a data-track-category="ecommerce" data-track-action="sort" data-track-href=" "
                  data-track-label="bestseller" href="#">Best Seller</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="courses-box courses">
          <div class="courses-title">
            <h3>Features</h3>
          </div>
          <div class="courses-blog">

            <div class="card courses-item">
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
                               <br />
                <a href="../one/cart.html" class="course-price">
                  <i class="fa fa-shopping-cart"></i> ₽ 1,800
                </a>
              </div>
              
            </div>

            <div class="card courses-item">
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
                
                <br />
                <a href="../one/cart.html" class="course-price">
                  <i class="fa fa-shopping-cart"></i> ₽ 1,800
                </a>
              </div>
              
            </div>

            <div class="card courses-item">
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
                
                <br />
                <a href="../one/cart.html" class="course-price">
                  <i class="fa fa-shopping-cart"></i> ₽ 1,800
                </a>
              </div>
              
            </div>
          </div>
        </div>

        <div class="courses-box courses">
          <div class="courses-title">
            <h3><a href="#">Online Illustrion courses</a></h3>
          </div>
          <div class="courses-blog">

            <div class="card courses-item">
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
                  <br />
                <a href="../one/cart.html" class="course-price">
                  <i class="fa fa-shopping-cart"></i> ₽ 1,800
                </a>
              </div>
              
            </div>

            <div class="card courses-item">
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
                           <br />
                <a href="../one/cart.html" class="course-price">
                  <i class="fa fa-shopping-cart"></i> ₽ 1,800
                </a>
              </div>
              
            </div>

            <div class="card courses-item">
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
                
                <br />
                <a href="../one/cart.html" class="course-price">
                  <i class="fa fa-shopping-cart"></i> ₽ 1,800
                </a>
              </div>
              
            </div>
          </div>
        </div>
        <button id="more-courses" class="btn btn-primary btn-lg">
          See more Domestika courses <i class="to-right">→</i>
        </button>
      </div>
    </div>
    <footerComponent/>
    </div>
</template>

<script>
import headerComponent from "@/components/headerComponent"
import footerComponent from "@/components/footerComponent"

export default {
    components: {
        headerComponent,
        footerComponent
    }
}
</script>

<style scoped>

#main {
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  -o-transition: transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
  background-color: #F2F2F2;
  position: relative;

}
.page_names{
    background-color:#F2F2F2;
    border-bottom: 1px solid #e0e0e0; 
    display: -webkit-box; 
    display: -ms-flexbox; 
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.page_names a{
    color: #161616;
    font-size: 90%;
}
.page_names .homeLink{
    font-size: 120%;
}
.homeLink + i{
    font-size: 75%;
    color: #848484
}

/* - ----- main content  - ---- -*/
.main_content{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background-color: #F2F2F2;
    position: relative;
}
.filter-container{
    width: 25%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 40px 10px 20px 50px;

}
.filter-container *{
    color: #161616
} 
.filter-container ul{
    list-style-type: none;
}
.filter-container a{
    padding: 5px;
    margin: 5px;
}
.filter-container a:hover{
  color: #f00 !important;
}
.title-list h3{
    font-size: 90% !important;
    border-bottom: 1px solid #e0e0e0;
    padding: 4px;
}

.courses-container{
    width: 75%;
    position: relative;
    padding-bottom: 150px;
   
}

.courses-box {
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
    background-color: #F2F2F2;
    padding: 20px 50px;
  }
  .courses-title {
    justify-self: flex-start;
    -ms-flex-item-align: start;
        align-self: flex-start;
  }
  .courses-title h3{
    font-size: 140% !important;
    margin-bottom: 25px;

  }
  .courses-title a{
      color: #161616
  }
  .courses-title a:hover{
    color: red !important;
}
  .courses-title p {
    color: #848484;
    font-size: 120%;
  }
  .courses-blog {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    width: 100%;
    padding: 0 10px;
  }
  .courses-item {
    margin-bottom: 5px;    
    width: 30%;
    
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
  .sortings, .selects{
    display: none;
  }
  .sortings ul{
    list-style-type: none;
  }
  .sortings a{
    color: #161616
  }
  .sortings a:hover{
    color: Red !important;
  }
  .sortings a.active{
    color: #fff !important;
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
  
  #more-courses {
    background-color: #f02d00;
    border-color: #f02d00;
    white-space: nowrap;
    position: absolute;
    left: 50%;
    margin: 50px 0; 
    -webkit-transform: translateX(-50%); 
        -ms-transform: translateX(-50%); 
            transform: translateX(-50%);
  }
  #more-courses:hover {
    background-color: #ca2600;
    border-color: #bd2300;
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
  .main-title{
    padding: 2px 80px;
  }
  .main-title h2{
    border-bottom: 1px solid #e0e0e0;
    padding: 20px 0;
  }





/* -------------media queries----------- */
@media (max-height: 690px) {

  .section-1 {
    height: 95vh !important;
  }
}
@media (min-width: 768px) and (max-width: 1220px) {

  .section-1 {
    height: 55vh !important;
  }
}

@media (max-width: 1006px) {
  
  .community-section .courses-blog {
    padding: 10px;
  }
  
  .navbar-expand-lg {
    -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
            justify-content: space-between !important;
  }

  
}
@media (max-width: 768px) {
  .section-1 {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .course-price:not(.follow) {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  
  .courses-container{
    padding-bottom: 100px;

  }
  .sortings, .selects{
    display: block;
  }
  #more-courses {
    font-size: 100% !important;
  }
  .main_content{
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .filter-container{
    width: 100%;
    padding-left: 0;
  }
  .filter-container ul{
    display: none;
  }
  .courses-container{
    width: 100%;
  }

  .main-title h2{
    font-size: 150%;
  }

  .community-section .courses-item {
    min-width: 40%;
    margin: 5px 20px;
  }
  .intro-bg {
    position: relative;
    background-position: right;
    background-size: cover;
  }

  .courses-box {
    padding: 10px 0;
  }
  .intro-box {
    background-color: #161616;
    width: 100%;
    margin-left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .intro-content {
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
    padding: 20px;
  }
  .intro-content h1 {
    font-size: 150%;
    color: #fff;
  }
  .intro-content p {
    font-size: 100%;
    color: #fff;
    width: 100%;
  }
  .intro-actions a {
    width: 100%;
  }
  .intro-actions a:nth-child(1) {
    background-color: transparent !important;
    border: 1px solid #fff;
    margin-bottom: 5px;
    color: #fff !important;
  }

  .courses-blog {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .courses-title p {
    font-size: 90%;
    text-align: center;
  }
  .courses-title h3 {
    text-align: center;
  }
  .courses-item {
    min-width: 95%;
  }

  
}


@media (max-width: 350px) {

  .courses-item {
    min-width: 95%;
  }
  .community-section .courses-item {
    min-width: 70%;
    margin: 5px 20px;
  }
}

</style>