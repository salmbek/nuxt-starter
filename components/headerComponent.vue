<template>
  <header>
        <div id="search-drop">
    <div id="s-not-found">
      <h3>We have not found any courses for “sadsada”</h3>
    </div>
      <div id="s-result-text">
        <p>Here you have also some courses that may interest you:</p>
      </div>

      <div id="s-result">
        <div class="s-item">
          <a href="#">
            <div class="s-item-img">
              <img src="~assets/images/pict.jpeg" alt="">
            </div>
            <div class="s-item-text">
              <h5>introduction a Adobe Photoshop</h5>
              <small class="author">A courses by Salim Studio</small>
            </div>
          </a>
        </div>
        <div class="s-item">
          <a href="#">
            <div class="s-item-img">
              <img src="~assets/images/pict.jpeg" alt="">
            </div>
            <div class="s-item-text">
              <h5>introduction a Adobe Photoshop</h5>
              <small class="author">A courses by Salim Studio</small>
            </div>
          </a>
        </div>  <div class="s-item">
          <a href="#">
            <div class="s-item-img">
              <img src="~assets/images/pict.jpeg" alt="">
            </div>
            <div class="s-item-text">
              <h5>introduction a Adobe Photoshop</h5>
              <small class="author">A courses by Salim Studio</small>
            </div>
          </a>
        </div>  <div class="s-item">
          <a href="#">
            <div class="s-item-img">
              <img src="~assets/images/pict.jpeg" alt="">
            </div>
            <div class="s-item-text">
              <h5>introduction a Adobe Photoshop</h5>
              <small class="author">A courses by Salim Studio</small>
            </div>
          </a>
        </div>
      </div>
  </div>
  <nav id="scrollNav" class="navbar navbar-expand-lg navbar-dark justify-content-center">
    <div class="col-lg-11 col-md-12 d-flex justify-content-between pl-3 pr-3">
      <div class="d-flex justify-content-center align-items-center">
        <button id="burger" class="d-none">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <nuxt-link class="navbar-brand" to="/"> Haysam</nuxt-link>
      </div>
  
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item courses-list">
          <nuxt-link class="nav-link courses-dropdown" to="/courses">
            Courses <i class="fa fa-chevron-down"></i>
          </nuxt-link>
          <div class="courses-drop">
            <ul class="categories1 drop-item">
              <li><nuxt-link to="/courses">All courses →</nuxt-link></li>
              <li><a href="#">Photography & Video</a></li>
              <li><a href="#">Marketing & Business</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Craft</a></li>
              <li><a href="#">Architecture & Spaces</a></li>
              <li><a href="#">Calligraphy & Typography</a></li>
              <li><a href="#">Technology</a></li>
            </ul>
            <ul class="categories2 drop-item">
              <li><nuxt-link to="/">Course Bundles</nuxt-link></li>
              <li><nuxt-link to="/">Domestika Basics <span class="pro-link bg-primary">new</span> </nuxt-link></li>
              <li><nuxt-link to="/">New courses</nuxt-link></li>
              <li><nuxt-link to="/">Top rated</nuxt-link></li>
              <li><nuxt-link to="/">Popular courses</nuxt-link></li>
              <li><nuxt-link to="/">Open Courses <span class="pro-link bg-red">pro</span></nuxt-link></li>
              <li><nuxt-link to="/">Gift ideas</nuxt-link></li>
              <li><nuxt-link to="/">Gift cards</nuxt-link></li>
  
            </ul>
            <div id="course-drop-blog">
              <a href="#">
                <img src="~assets/images/262-original.jpg" alt="">
              </a>
            </div>
          </div>
        </li>
  
        <li class="nav-item">
          <a class="nav-link" href="#">Projects </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/afterLogin">test</a>
        </li>
  
        <li class="nav-item more-item marges-opciones-left dropdown">
          <a href="#" class="nav-link" id="more" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="true">
            <i class="fa fa-ellipsis-h"></i>
          </a>
          <div class="dropdown-menu" style="left: -110%; z-index: 9" aria-labelledby="more">
            <a class="dropdown-item" href="#">Contact</a>
            <a class="dropdown-item" href="#">Help</a>
          </div>
         
        </li>
      </ul>
  
  
  
      <div id="nav-search" class="form-inline  nav-search my-2 my-lg-0" style="flex-direction: row-reverse !important">
        <button id="s-btn-close" class="btn mr-4">
          &times;
        </button>

        <input class="form-control search mr-sm-2" type="text" placeholder="Search" id="search-inp"/>
        <button class="btn-search form-control">
          <i class="fa fa-search"></i>
        </button>
      </div>

      <div id="olmosh" class="d-none justify-content-center align-items-center">
        <button id="search-m-btn" class="btn d-none text-light search_btn cart my-2 my-sm-0">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
  
        <a href="/cart" class="btn text-light cart my-2 my-sm-0">
          <i class="fa fa-shopping-cart"></i>
        </a>
        <button data-toggle="modal" data-target="#loginModal" class="btn text-light login my-2 my-sm-0">Login</button>
        <button class="btn bg-red text-light reg my-20 my-sm-0" data-toggle="modal" data-target="#signUp">
          Sign up
        </button>
      </div>
      <div id="olmoshdi" class="d-flex justify-content-center align-items-center">
        <button id="search-m-btn" class="btn d-none text-light search_btn cart my-2 my-sm-0">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>

        <a href="../one/cart.html" class="btn btn-lg text-light cart my-2 my-sm-0">
          <i class="fa fa-shopping-cart"></i>
        </a>

        <button id="profile-btn" class="btn btn-lg text-light profile-btn my-2 my-sm-0">
          <img src="~assets/images/teacher.jpg" class="profile-img" alt="">
          <span id="profile-bg"></span>
          <div class="n-dropdown" id="profile-dropdown">
            <ul>
              <li>
                <nuxt-link to="/afterDropdown">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  View profile
                </nuxt-link>
              </li>
              <li>
                <a href="../after/mycourses.html">
                  <i class="fa fa-bookmark" aria-hidden="true"></i>
                  My courses
                </a>
              </li>
              <hr>
             
              <li>
                <a href="#">
                  <i class="fa fa-cog" aria-hidden="true"></i>
                  Account settings
                </a>
              </li>            
              <hr>
              <li>
                <a href="#">
                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  </nav>
  <br>
  <div class="closeNav" id="closer-sidenav"></div>
  <div id="mySidenav" class="sidenav">
    <a id="openCoursesSide" class="side-courses sidenav-link" href="javascript:void(0)">
      <span>Courses</span>
      <i class="fa fa-chevron-right"></i>
    </a>
    <a class="sidenav-link" href="#">Projects </a>
    <a class="sidenav-link" href="/afterLogin">Login page </a>
    <a class="sidenav-link" href="#">Help </a>
    <a class="sidenav-link" href="#">Forums </a>
    <a class="sidenav-link" href="#">Contact </a>
    <button data-toggle="modal" data-target="#loginModal"
      class="btn text-light side-login my-2 my-sm-0 closeNav">Login</button>
    <br>
    <button class="btn bg-red text-light side-reg my-2 my-sm-0 closeNav" data-toggle="modal"
      data-target="#signUp">
      Sign up
    </button>
    <div id="courses_sidenav" class="sidenav courses_sidenav">
      <div class="side-back">
        <button class="btn text-light" id="closeCourses">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <h3>Courses</h3>
      </div>
      <hr />
      <nuxt-link class="sidenav-link" to="/courses">All Courses </nuxt-link>
      <nuxt-link class="sidenav-link" to="/courses">Illustrion </nuxt-link>
      <nuxt-link class="sidenav-link" to="/courses">Photography & Video </nuxt-link>
      <nuxt-link class="sidenav-link" to="/courses">Marketing & Business </nuxt-link>
      <nuxt-link class="sidenav-link" to="/courses">Design </nuxt-link>
      <nuxt-link to="/courses">Craft</nuxt-link>
      <nuxt-link class="sidenav-link" to="/courses">3D Animation </nuxt-link>
      <nuxt-link to="/courses">Architecture & Spaces</nuxt-link>
      <nuxt-link class="sidenav-link" to="/courses">Technology </nuxt-link>
    </div>
  </div>
  <div class="modal fade" id="courseModal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
    aria-hidden="true">
    <div class="modal-dialog col-12 " role="document">
      <div class="modal-content col-12 ">
        <div class="modal-header">
          <!-- <h5 class="modal-title">Modal title</h5> -->
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <iframe src="https://www.youtube.com/embed/JxS5E-kZc2s" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>

          </div>
        </div>
        <div class="modal-footer">
          <ul class="about">
            <li><a href="#">
                Time Management Techniques for Creators and Creatives
              </a></li>
            <li class="plan">
              <p>
                Achieve your goals by planning and improving your productivity through practical and visual tools
              </p> <span class="author">A course by Michael Rodrigez</span>
            </li>
            <li>
              <p class="aboutCourse">
                If you want to be in control of your day-to-day life and increase your productivity, business mentor
                Mònica Rodríguez is the right person to help you on your mission. A specialist in working with creative
                professionals, she teaches you the keys to...
              </p>
              <a href="#" class="more-course">More info <i class="fa fa-arrow-right" aria-hidden="true"></i></a>

            </li>
          </ul>

          <ul class="desc">
            <li><a href="#" class="course-price">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                BUY ₽ 985
              </a>
              <span class="discount">48% Disc. <strike>₽3,475</strike> </span>
            </li>
            <li>
              <i class="fa fa-clock-o" aria-hidden="true"></i>
              This offer ends in - 22:22:22
            </li>

            <li>
              <i class="fa fa-star-o fa-fw"></i>
              Level: <span class="pro-link bg-warning">BEGINNER</span>
            </li>
            <li>
              <i class="fa fa-user" aria-hidden="true"></i>
              9123 students
            </li>
            <li>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              98% positive reviews (2.6k)
            </li>
            <li>
              <i class="fa fa-smile-o"></i>
              Online at your own place
            </li>

            <li>
              <i class="fa fa-volume-up" aria-hidden="true"></i>
              Audio Portuguese
            </li>
            <li>
              <i class="fa fa-cc" aria-hidden="true"></i>
              Available from 19, 2020
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body col-12">
          <div class="modal-box col-12">


            <div class="reg-title">

              <a href="#" class="btn btn-primary col-12 my-4 fc-btn btn-lg">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                Sign in with Facebook
              </a>
              <a href="#" class="btn btn-primary  col-12 apple-btn btn-lg">
                <i class="fa fa-apple" aria-hidden="true"></i>
                Sign in with Apple
              </a>
            </div>

            <form action="#" id="regForm">
              <div class="form-group">
                <label for="email">or login with your email</label>
                <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                  placeholder="Your new account email">
              </div>
              <div class="form-group">
                <label for="password"></label>
                <input type="password" class="form-control" name="password" id="password" placeholder="Your Password">
              </div>

              <button type="submit" class="btn bg-red text-light">Sign up</button>
              <br>
              <small style="color: #848484">
                By clicking "Create an account" I am confirming I am 16 or older and I accept the
                <a href="#">Terms of Use</a>,the
                <a href="#">Privacy Policy</a>, the
                <a href="#">Cookies Policy</a>,
                and agree to receive news and promotions.
              </small>
            </form>
            <div class="modal-footer">
              <p>Need an account? <a data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#signUp"
                  href="#" class="text-red">Sign Up</a></p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
   <div class="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-leftImg"></div>

        <div class="modal-body">
          <div class="modal-box">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

            <div class="reg-title">
              <h1>Domestika</h1>
              <p>Learn from the best professionals and be a part of the largest online community for creative people</p>
              <a href="#" class="btn btn-primary col-12 fc-btn btn-lg">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                Register with Facebook
              </a>
            </div>
            <form action="#" id="regForm">
              <div class="form-group">
                <label for="email">or sign up with your email</label>
                <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                  placeholder="Your new account email">
              </div>
              <div class="form-group">
                <label for="password"></label>
                <input type="password" class="form-control" name="password" id="password" placeholder="Your Password">
              </div>

              <button type="submit" class="btn bg-red text-light">Sign up</button>
              <br>
              <small style="color: #848484">
                By clicking "Create an account" I am confirming I am 16 or older and I accept the
                <a href="#">Terms of Use</a>,the
                <a href="#">Privacy Policy</a>, the
                <a href="#">Cookies Policy</a>,
                and agree to receive news and promotions.
              </small>
            </form>
            <div class="modal-footer">
              <p>already registered in? <a href="#" data-dismiss="modal" aria-label="Close" data-toggle="modal"
                  data-target="#loginModal" class="text-red">Login</a></p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {


}

</script>

<style>


#site-footer,
#site-header {
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none;
}

.text-red {
  color: red !important;
}

.bg-red {
  background-color: red !important;
}
.bg-red:hover{
  background-color: #ca2600 !important;
}
a,
button {
  background: none;
}
a:hover {
  text-decoration: none !important;
  color: unset !important;
}
body,
html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box !important;
          box-sizing: border-box !important;
}


button:focus {
  outline: none !important;
  -webkit-box-shadow: unset !important;
          box-shadow: unset !important;
}
a:focus {
  outline: none !important;
  -webkit-box-shadow: unset !important;
          box-shadow: unset !important;
}
input:focus {
  outline: none !important;
  -webkit-box-shadow: unset !important;
          box-shadow: unset !important;
}
.link{
  color: #161616;
}
.link:hover{
  color: red !important ;
}
.navbar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  background-color: #161616;
  -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
  z-index: 999;
  width: 100%;
  -webkit-transition: position 0.8s, top 0.8s;
  -o-transition: position 0.8s, top 0.8s;
  transition: position 0.8s, top 0.8s;
  position: fixed;
  top: 0;
}

nav * {
  color: #fff;
}

.navbar-brand {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 150% !important;
}
.navbar-nav {
  width: 25%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
}
.nav-link {
  color: #fff !important;
  font-weight: 600;
  white-space: nowrap;
  font-size: 0.9375rem !important;
  padding: 0.8rem 1rem;
}
.more-item,
.more-item i {
  font-size: 1.5rem !important;
  padding: 0 !important;
}
.more-item .dropdown-menu{
  background-color: #161616;
}
.more-item .dropdown-menu .dropdown-item:hover{
  background-color: red;
  color: #fff !important;
}
.more-item .dropdown-menu .dropdown-item:focus{
  background-color: white;
  color: #000 !important;
}
.more-item .dropdown-item{
  color: #fff;
}

.courses-dropdown:hover + .courses-drop {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}
.courses-drop:hover {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}
.courses-drop {
  display: none !important;
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  background-color: #161616;
  width: 100%;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  padding: 10px 20px 25px;
}
.drop-item {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.drop-item li {
  padding: 0;
  margin: 0;
  margin: 5px 0;
}

.categories1 a {
  font-size: 140%;
  color: #Fff ;
}
.drop-item a{
  color: #Fff !important;

}
.drop-item a:hover {
  color: red !important;
}
#course-drop-blog {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-item-align: center;
      align-self: center;
}
#course-drop-blog img {
  width: 500px;
  height: 300px;
}
.nav-link:hover,
.navbar-brand:hover {
  color: red !important;
}

.courses-dropdown{
  padding: 15px 0 !important; 
}
.nav-link:hover i,
.nav-link span {
  color: red !important;
}
.nav-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.pro-link {
  border-radius: 5px;
  padding: 1px 2px !important;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.3);
}

.search .fa-search {
  color: #848484;
}
.nav-search {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
}
.search {
  border: none !important;
  border-radius: 0 !important;
  padding-left: 5px;
  color: #fff !important;
  background-color: hsla(0, 0%, 100%, 0.13) !important;
  height: 30px !important;
}
.btn-search {
  border: none !important;
  border-radius: 0 !important;
  width: 20px !important;
  background-color: hsla(0, 0%, 100%, 0.13) !important;
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 30px !important;
}
.btn-search:hover i {
  color: red !important;
}

.cart {
  background: none !important;
  font-weight: 400 !important;
  white-space: nowrap;
  padding: 0.5rem 2rem;
}



.profile-btn{
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-pack: center !important;
      -ms-flex-pack: center !important;
          justify-content: center !important;
  -webkit-box-align: center !important;
      -ms-flex-align: center !important;
          align-items: center !important;
}
  #profile-bg{
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: 1;
    display: none;
    background-color: #fff;

  }
.profile-img{
  border-radius: 50%;
  width: 45px;
  height: 45px;
  z-index: 2;
}
.border-img{
  border: 1px solid red;
}
.profile-btn:hover img{
  border: 1px solid red;
}

#profile-dropdown{
  position: absolute;
  top: 100%;
  right: -5px;
  background-color: #fff;
  padding: 10px 5px 0px 5px;
  width: 200px;
  display: none;
  box-shadow: 0 0.5rem 1rem rgba(22,22,22,.175);
  
}
.n-dropdown ul{
  list-style-type: none;
}
.n-dropdown a{
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}

.n-dropdown a, .n-dropdown i{
    color: #161616;
    font-size: 70%;
    font-weight: 400;
    margin: 10px;
    white-space: nowrap;
}
.n-dropdown i{
  font-size: 100%;
  margin-left: 5px;
}

.n-dropdown a:hover, .n-dropdown a:hover i{
  color: red !important;
}

.cart:hover > i {
  color: red !important;

}

#burger {
  background: none;
  font-size: 150%;
  border: none;
  outline: none;
}
#closer-sidenav {
  -webkit-transform: translateX(-1000%);
      -ms-transform: translateX(-1000%);
          transform: translateX(-1000%);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 990;
  bottom: 0;
  width: 20%;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  -o-transition: transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
}
.side-courses {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  width: 100%;
}
.sidenav {
  height: 100%;
  position: fixed;
  -webkit-transform: translateX(-150%);
      -ms-transform: translateX(-150%);
          transform: translateX(-150%);
  width: 80%;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  -o-transition: transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
  padding-top: 100px;
  border-right: 0.5px solid gray;
}
.side-back {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #fff;
}
.side-back h3 {
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
          transform: translateX(-50%);
}
.side-back + hr {
  border: 0.5px solid gray;
}
.courses_sidenav {
  width: 100%;
  z-index: 4;
  -webkit-transform: translateX(250%);
      -ms-transform: translateX(250%);
          transform: translateX(250%);
  position: absolute;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s;
}
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 18px;
  color: #fff !important;
  display: block;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.sidenav a:hover {
  color: red !important;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  color: #fff;
}
#main {
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  -o-transition: transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
  position: relative;
}
.sidenav .side-login {
  border: 1px solid gray;
  width: 90%;
  margin: 0 5px;
}
.sidenav .side-reg {
  background-color: red;
  width: 90%;
  margin: 0 5px;
}



/* search  */

.searching{
  overflow-y: hidden !important;
  position: fixed;
  width: 100%;
  height: 100%;

}

#search-drop{
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: #161616;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 75px 0 120px 0;
  display: none;

}
#s-result-text, #s-result,#s-not-found{
  width: 100%;
  padding: 0 1%;

}
#search-drop a, #search-drop h5, #search-drop h3, #search-drop p{
  color : #fff;
}

#search-drop .author{
  color: #848484 !important;
}

#s-result{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;


}
#s-result-text, #s-not-found{
  padding-left: 5%;
}

.s-item{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 210px;
  margin: 10px;
}
.s-item a:hover h5{
  color: red !important;
}

.s-item-img{
  width: 200px;
  height: 100px;
  position: relative;
}
.s-item-img img{
  position: absolute;
  width: 100%;
  height: 100%;
}

#s-btn-close{
  display: none;
  width: 1.5rem;
  height: 1.5rem;
  color: #161616;
  background-color: #fff;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-weight: 900;
}
.d-f{
  display: flex !important;
}

/* media  */



/* -------------media queries----------- */
@media (max-height: 690px) {
  .sidenav {
    padding-top: 80px;
  }
  .sidenav a {
    font-size: 22px;
  }
 
}
@media (min-width: 768px) and (max-width: 1220px) {
  .nav-search {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
        -ms-flex-flow: row nowrap !important;
            flex-flow: row nowrap !important;
  }

}

@media (max-width: 1006px) {
  .cart{
  padding: 0.5rem 1rem;
  }
  .navbar-nav {
    display: none !important;
  }

  .nav-search {
      position: fixed;
      width: 100%;
      z-index: 102;
      top: 0;
      right: 0;
      left: 0;
      background-color: #161616;
      margin: 0 !important;
      height: 60px;
      flex-direction: row !important;
      flex-wrap: nowrap;
      display: none;
    }
  .search{
    width: 80% !important;
  }
  .search, .btn-search{
    background-color: #161616 !important;
    color: #fff;
  }
  .btn-search{
    display: none !important;
  }
  .reg {
    display: none !important;
  }

  .login,
  .cart {
    font-weight: 900 !important;
  }
 
  .navbar-expand-lg {
    -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
            justify-content: space-between !important;
  }
  #burger,
  .search_btn {
    display: block !important;
  }
  .navbar-brand {
    margin-left: 15px;
    margin-right: 5px;
    font-size: 130% !important;
  }
}


@media (max-width: 350px) {
  .navbar-brand {
    margin-left: 8px !important;
  }
  
}
.modal-dialog {
  max-width: 65%;
}
#courseModal iframe {
  width: 100%;
  height: 350px;
}

.modal-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}
.modal-footer ul.about {
  width: 65%;
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.about a:not(.more-course) {
  color: #161616;
  font-size: 150%;
}
.plan {
  margin-bottom: 16px;
}
.about .plan p {
  font-size: 110%;
  color: #848484;
  margin: 0;
}
.about .plan .author {
  font-size: 80%;
}
.more-course {
  font-size: 90%;
  color: #161616;
}
.modal-footer ul.desc {
  width: 30%;
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
ul.desc li {
  margin: 7px 0;
  font-size: 80%;
}
.desc li:nth-child(1) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
}
.desc li:nth-child(1) a {
  width: 100%;
}

.modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.modal {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* reg / */

/* reg modal */
.modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.modal {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
#signUp .modal-dialog {
  max-width: 80% !important;
}
#signUp .modal-content {
  position: relative;
  height: 750px;
}

#signUp .modal-body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

#signUp .modal-box {
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
}
#signUp .close {
  width: -webkit-fit-content !important;
  width: -moz-fit-content !important;
  width: fit-content !important;
  -ms-flex-item-align: end;
  align-self: flex-end;
}
#signUp .modal-leftImg {
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  width: 50%;
  height: 100%;
  background-image: url("~assets/images/reg.jpg");
  background-position: 50% 10%;
  background-repeat: no-repeat;
  background-size: cover;
}
.reg-title h1 {
  text-align: center;
  color: #f00;
  margin-top: 10px;
}
.reg-title p {
  text-align: center;
  font-weight: 700;
  margin: 10px;
}
#regForm input {
  padding: 1rem 0.75rem;
  font-size: 1.125rem;
  line-height: 1.5;
  border-radius: 0.125rem;
}
#regForm label {
  color: #848484;
  font-size: 90%;
}
.fc-btn {
  font-size: 120%;
}
.fc-btn:hover {
  color: #fff !important;
}
.apple-btn {
  font-size: 120%;
  background-color: #000;
  border: none !important;
  outline: none;
}
.apple-btn:hover {
  color: #fff !important;
  background-color: #000;
}
#regForm button[type="submit"] {
  padding: 10px;
}
#regForm input:focus {
  border: 1px solid #505050 !important;
}

.modal-footer ul.desc {
  width: 30%;
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
ul.desc li {
  margin: 7px 0;
  font-size: 80%;
}
.desc li:nth-child(1) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
}
.desc li:nth-child(1) a {
  width: 100%;
}

.modal-dialog {
  max-width: 65%;
}
#courseModal iframe {
  width: 100%;
  height: 350px;
}

.modal-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}
.modal-footer ul.about {
  width: 65%;
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.about a:not(.more-course) {
  color: #161616;
  font-size: 150%;
}
.plan {
  margin-bottom: 16px;
}
.about .plan p {
  font-size: 110%;
  color: #848484;
  margin: 0;
}
.about .plan .author {
  font-size: 80%;
}
.more-course {
  font-size: 90%;
  color: #161616;
}

@media (max-width: 1006px) {
  .modal-dialog {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
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

  .modal-footer {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  #courseModal iframe {
    height: 170px !important;
  }
  .modal-dialog {
    padding: 0;
    max-width: 100% !important;
  }
  .desc,
  .about {
    width: 100% !important;
    margin: 0 !important;
  }

  .modal-footer {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  #courseModal iframe {
    height: 170px !important;
  }
  .modal-dialog {
    padding: 0;
    max-width: 100% !important;
  }
  .desc,
  .about {
    width: 100% !important;
    margin: 0 !important;
  }

  .modal-leftImg {
    display: none;
  }

  .modal-body {
    width: 100% !important;
  }

  #signUp {
    position: fixed;
    top: 1%;
    z-index: 12000;
  }
  #signUp .modal-dialog {
    max-width: 99% !important;
  }
}






/* vlkmdlskfmvblk dnfskm;l,fjnbklmsd,;kbjncflmd,a;wkflnsjbcvnkflmdsa;,wkfsnbcjvmflds;akfsbcjn */
.modal-open {
    overflow: hidden;
  }
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    outline: 0;
  }
  .modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
  }
  .modal.fade .modal-dialog {
    transition: -webkit-transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
    -webkit-transform: translate(0, -25%);
    transform: translate(0, -25%);
  }
  .modal.show .modal-dialog {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  .modal-dialog-centered {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: calc(100% - (0.5rem * 2));
  }
  .modal-content {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
  }
  .modal-backdrop.fade {
    opacity: 0;
  }
  .modal-backdrop.show {
    opacity: 0.5;
  }
  .modal-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }
  .modal-header .close {
    padding: 1rem;
    margin: -1rem -1rem -1rem auto;
  }
  .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
  }
  .modal-body {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;
  }
  .modal-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #e9ecef;
  }
  .modal-footer > :not(:first-child) {
    margin-left: 0.25rem;
  }
  .modal-footer > :not(:last-child) {
    margin-right: 0.25rem;
  }
  .modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
  }
  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 500px;
      margin: 1.75rem auto;
    }
    .modal-dialog-centered {
      min-height: calc(100% - (1.75rem * 2));
    }
    .modal-sm {
      max-width: 300px;
    }
  }
  @media (min-width: 992px) {
    .modal-lg {
      max-width: 800px;
    }
  }

  .btn-lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }

.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
}
.col-auto {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: auto;
  max-width: none;
}
.col-1 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 8.333333%;
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
}
.col-2 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}
.col-3 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
}
.col-4 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}
.col-5 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 41.666667%;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}
.col-6 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}
.col-7 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 58.333333%;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
}
.col-8 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}
.col-9 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
}
.col-10 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}
.col-11 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 91.666667%;
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
}
.col-12 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

.dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }

  .mr-auto{
    margin-right: auto !important;
  }
  .ml-auto
  {
    margin-left: auto !important;
  }

.dropdown-item:focus,
  .dropdown-item:hover {
    color: #16181b;
    text-decoration: none;
    background-color: #f8f9fa;
  }
  .dropdown-item.active,
  .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #007bff;
  }
  .dropdown-item.disabled,
  .dropdown-item:disabled {
    color: #6c757d;
    background-color: transparent;
  }
</style>