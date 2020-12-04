<template>
<div>
    <headerComponent/>
    <div id="main">
        <div id="profile-container">
            <!-- profile left bar  -->

            <div class="form-group" id="m-p-links">
              <select class="form-control" name="p-links" id="m-select">
               
                <option  id="m-edit">Edit profile</option>
            
                <option id="m-acc">Account settings</option>
              </select>
            </div>

            <div id="profile-links">
                <ul id="p-ul">
                    <li class="main-p-link  main-p-active" id="edit">
                        <a href="javascript:void(0)">Edit Profile</a>
                        <ul id="edit-child-ul" class="child-lists">
                            <li class="child-p-link edit-links">
                                <a href="#appearance" class="link dots-link active-dot">
                                    <div></div>Appearance
                                </a>
                            </li>
                            <li class="child-p-link edit-links">
                                <a href="#about" class="link dots-link">
                                    <div></div>About you
                                </a>
                            </li>
                            <li class="child-p-link edit-links">
                                <a href="#contact" class="link dots-link ">
                                    <div></div>Contact
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="main-p-link" id="acc">
                        <a href="javascript:void(0)">Account settings</a>
                        <ul id="acc-child-ul" class="child-lists-off child-lists">
                            <li class="child-p-link acc-links">
                                <a href="#email-settings" class="link dots-link">
                                    <div></div> Email
                                </a>
                            </li>
                            <li class="child-p-link acc-links">
                                <a href="#pass-settings" class="link dots-link">
                                    <div></div> Password
                                </a>
                            </li>
                            <li class="child-p-link acc-links">
                                <a href="#lang-settings" class="link dots-link">
                                    <div></div> Language and currency
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>


            <!-- profile content  -->
            <div id="profile-content">

                <!-- account settings tab  -->
                <div id="account-settings">
                    <div id="email-settings" class="p-tab-box">
                        <div class="p-tab-head">
                            <h6 class="m-0">
                                EMAIL
                            </h6>
                            <small>You can change your email</small>
                        </div>

                        <div class="p-tab-content">
                            <form action="#">
                                <div class="form-group">
                                    <label for="email">Your Email</label>
                                    <input type="email" name="email" id="email" class="form-control"
                                        placeholder="Your account email" aria-describedby="helpId">
                                </div>
                                <div class="form-group">
                                    <label for="password">Current Password</label>
                                    <input type="password" name="currentPassword" class="form-control"
                                        placeholder="Your password" aria-describedby="helpId">
                                    <small class="text-muted">For safety reasons, please enter your
                                        password</small>
                                </div>
                                <button type="submit" class="btn btn-sm bg-red text-light">save changes</button>
                            </form>
                        </div>
                    </div>


                    <div id="pass-settings" class="p-tab-box">
                        <div class="p-tab-head">
                            <h6 class="m-0">
                                PASSWORD
                            </h6>
                            <small>You can change your password. We recommend you use a secure and unique
                                password.</small>
                        </div>

                        <div class="p-tab-content">
                            <form action="#">
                                <div class="form-group">
                                    <label for="currentPassword">Current Password</label>
                                    <input type="password" name="currentPassword" class="form-control"
                                        placeholder="Your password" aria-describedby="helpId">
                                    <small class="text-muted">For safety reasons, please enter your
                                        password</small>
                                </div>

                                <div class="form-group">
                                    <label for="newPassword">New Password</label>
                                    <input type="password" name="newPassword" id="newPassword" class="form-control"
                                        placeholder="Your new password" aria-describedby="helpId">
                                </div>

                                <div class="form-group">
                                    <label for="repPassword">Repeat password </label>
                                    <input type="password" name="repPassword" class="form-control"
                                        placeholder="Repeat new password" aria-describedby="helpId">
                                </div>
                                <button type="submit" class="btn btn-sm bg-red text-light">save changes</button>

                            </form>
                        </div>
                    </div>

                    <div id="lang-settings" class="p-tab-box">
                        <div class="p-tab-head">
                            <h6 class="m-0">
                                LANGUAGE AND CURRENCY
                            </h6>
                            <small>You can change your language and currency</small>
                        </div>

                        <div class="p-tab-content">
                            <form action="#">

                                <div class="form-group">
                                    <label for="lang">Language</label>
                                    <select class="form-control" name="lang" id="lang">
                                        <option>Spanish</option>
                                        <option>English</option>
                                        <option>German</option>
                                        <option>Portuguese</option>
                                    </select>
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input mt-0" name=""
                                            value="checkedValue" checked>
                                        Automatically translate course forums into my language
                                    </label>
                                </div>


                                <div class="form-group">
                                    <label for="currency">Currency</label>
                                    <select class="form-control" name="currency" id="currency">
                                        <option>US$ - US Dollar</option>
                                        <option>UZS - UZ So'mi</option>

                                    </select>
                                </div>
                                <button type="submit" class="btn btn-sm bg-red text-light">save changes</button>
                            </form>

                        </div>
                    </div>
                </div>



                <!-- edit profile tab  -->

                <div id="edit-profile">
                    <div class="p-tab-box" id="appearance">
                        <div class="p-tab-head">
                            <h6 class="m-0">
                                APPEARANCE
                            </h6>
                            <small>
                                Your headshot is like your personal brand logo
                            </small>
                        </div>

                        <div class="p-tab-content">
                            <div id="u-imgs-cont">
                                <div id="user-img-box">
                                    <img src="~assets/images/teacher.jpg" alt="">
                                </div>
                                <div id="user-img-about">
                                    <form action="#">
                                        <div class="form-group mb-0">

                                            <label for="upload_image">User image
                                                <small id="fileHelpId" class="form-text text-muted">Recommended
                                                    800x800</small>
                                            </label><br>
                                            <label for="upload_image" class="uploadBtn w-no">
                                                <i class="fa fa-picture-o" aria-hidden="true"></i>
                                                Select image
                                                <input type="file" class="form-control-file" name="" id="upload_image"
                                                    aria-describedby="fileHelpId"></label>
                                        </div>
                                        <div class="form-check">
                                            <label class="form-check-label w-no">
                                                <input type="checkbox" class="form-check-input mt-0" name=""
                                                    value="checkedValue">
                                                Delete avatar
                                            </label>
                                        </div>

                                        <button type="submit" class="btn btn-sm bg-red text-light">save changes</button>
                                    </form>
                                </div>
                            </div>
                            <br><br>
                            <div id="c-imgs-cont">
                                <form action="#">
                                    <label for="cover_image">Cover image
                                        <small id="fileHelpId" class="form-text text-muted">Recommended
                                            2800x400</small>
                                    </label>

                                    <div id="ex-cover-img">
                                        <img src="~assets/images/some.png" alt="">
                                    </div>
                                    <br>
                                    <label for="cover_img" class="uploadBtn">
                                        <i class="fa fa-picture-o" aria-hidden="true"></i>
                                        Select image
                                        <input type="file" class="form-control-file" name="cover_img" id="cover_image"
                                            aria-describedby="fileHelpIdAdd your email"></label>
                                    <div class="form-check ml-0">
                                        <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input mt-0" name=""
                                                value="checkedValue">
                                            Delete cover
                                        </label>
                                    </div>
                                    <button type="submit" class="btn btn-sm bg-red text-light">save changes</button>

                                </form>
                            </div>
                        </div>
                    </div>



                    <div id="about" class="p-tab-box">
                        <div class="p-tab-head">
                            <h6 class="m-0">
                                ABOUT YOU
                            </h6>
                            <small>
                                Tell us more about you
                            </small>
                        </div>

                        <div class="p-tab-content">
                            <form action="#">
                                <div class="form-group">
                                    <label for="nickname">Nickname *</label>
                                    <input type="text" name="nickname" id="nickname" class="form-control"
                                        aria-describedby="helpId">
                                    <small class="text-muted">
                                        Changing your username will also change your personal URL on Domestika.
                                        <br>
                                        Avoid periods and empty spaces.
                                    </small>
                                </div>

                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" class="form-control" aria-describedby="helpId">

                                    <label for="surname">Surname</label>
                                    <input type="text" name="surname" class="form-control" aria-describedby="helpId">

                                </div>
                                <div class="form-group">
                                    <label for="place">Where are you?</label>
                                    <input type="text" name="place" class="form-control"
                                        aria-describedby="helpIdAdd your email">
                                </div>
                                <button type="submit" class="btn btn-sm bg-red text-light">save changes</button>
                            </form>
                        </div>
                    </div>

                    <div id="contact" class="p-tab-box">
                        <div class="p-tab-head">
                            <h6 class="m-0">
                                CONTACT
                            </h6>
                            <small>
                                The easy way to find you
                            </small>
                        </div>

                        <div class="p-tab-content">
                            <form action="#" id="contact-box" class="col-12 p-0">
                                <div class="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label for="email">Email</label>
                                    <input type="text" name="contact_email" class="form-control contact-input"
                                        aria-describedby="helpId">
                                    <small id="helpId" class="text-muted">Add your email</small> <br> <br>
                                    <button type="submit" class="btn btn-sm bg-red text-light">save changes</button>

                                </div>
                                <div class="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label for="phone">Phone</label>
                                    <input type="text" name="contact_phone" class="form-control contact-input"
                                        aria-describedby="helpId">
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        <footerComponent />
</div>
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
body {
  background-color: #f2f2f2 !important;
}
#profile-container {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  padding: 40px 10px;
}

#profile-links {
  width: 20%;
  padding-top: 30px;
  position: fixed; 
  top: 60px;
  left: 10%;
}

#profile-links ul {
  width: fit-content;
  list-style-type: none;
  transition: opacity .2s;
}

.child-lists-off {
  display: none !important;
}

#profile-links a {
  color: #161616;
  margin: 5px 0;
}
.main-p-link a {
  font-size: 90%;
}
.main-p-active > a{
  font-weight: 900;
  padding-left: 10px;
  border-left: 4px solid red;
}
.child-lists {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-left: 20px;
  transition: all 0.5s;
}
.child-lists a {
  font-size: 80%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-weight: 100;
  white-space: nowrap;
}

.dots-link div {
  height: 6px;
  width: 6px;
  border-radius: 50%;
  margin: 0 10px;
}
.active-dot div {
  background-color: red;
}

#profile-content {
  width: 60%;
  margin-left: 10%;
}

.p-tab-box {
  padding: 30px 30px;
  background-color: #fff;
  margin: 30px 20px;
  border-bottom: 2px solid rgba(22, 22, 22, 0.15);
}

.p-tab-head small {
  color: #848484;
  margin-bottom: 30px;
}
.p-tab-box h6,
label {
  font-size: 85%;
}

.p-tab-content {
  margin-top: 20px;
}
.form-check,
.form-check-label {
  display: flex;
  align-items: center;
  margin: 10px;
  flex-wrap: nowrap;
}

.w-no{
  white-space: nowrap;

}

.p-tab-content input:not(.form-check-input, .contact-input),
select {
  width: 70% !important;
}

#account-settings {
  display: none;
}

#u-imgs-cont {
  display: flex;
}


#user-img-box {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin-right: 20px;
}

#user-img-box img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.uploadBtn {
  display: inline-block;
  color: #000;
  font-weight: bold;
  border: 1px solid gray;
  background: #fff;
  padding: 8px 15px;
  border-radius: 2px;
  cursor: pointer;
}
.uploadBtn:hover {
  background: #333;
  color: #fff;
}
.uploadBtn input {
  display: none;
}

#ex-cover-img img {
  width: 100%;
  height: 150px;
}
#contact-box{
    display: flex;
    justify-content: space-between;

}
#m-p-links{
  display: none;
}
@media (max-width: 900px) {
  #profile-container {
    flex-direction: column;
  }
  #profile-links {
    display: none;
  }
  #m-p-links{
    display: block;
  }
  #profile-content {
    width: 100%;
  }
  .p-tab-box{
      margin: 15px 0;
  }

  #ex-cover-img img {
    width: 100%;
    height: 100px;
  }

  #user-img-box{
    width: 150px;
    height: 110px;
  }

  #contact-box{
    flex-direction: column-reverse;
}
}

</style>