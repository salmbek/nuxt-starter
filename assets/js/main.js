let isCloseNav = true;
document.getElementById('burger').addEventListener('click', function() {
    if (isCloseNav == true) {
        document.getElementById("mySidenav").style.transform = "translateX(0%)";
        document.getElementById("main").style.transform = "translateX(250px)";
        document.getElementById("closer-sidenav").style.transform = "translateX(0%)";

        isCloseNav = false;
    } else {
        document.getElementById("mySidenav").style.transform = "translateX(-150%)";
        document.getElementById("main").style.transform = "translateX(0px)";
        document.getElementById("closer-sidenav").style.transform = "translateX(-1000%)";

        isCloseNav = true;

    }
})

document.getElementById("openCoursesSide").addEventListener("click", function() {
    document.getElementById("courses_sidenav").style.transform = "translateX(0%)";
})
document.getElementById("closeCourses").addEventListener("click", function() {
    document.getElementById("courses_sidenav").style.transform = "translateX(150%)";
})

document.getElementById("closer-sidenav").addEventListener("click", function() {
    document.getElementById("mySidenav").style.transform = "translateX(-150%)";
    document.getElementById("main").style.transform = "translateX(0px)";
    document.getElementById("closer-sidenav").style.transform = "translateX(-1000%)";
})

// close sidenav's courses side method


/// new navbar method
var prevScrollpos = window.pageYOffset;
document.getElementById("scrollNav").style.position = "fixed";
document.getElementById("scrollNav").style.top = "0";
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("scrollNav").style.position = "fixed";
        document.getElementById("scrollNav").style.top = "0";
    } else if (currentScrollpos < 40) {
        document.getElementById("scrollNav").style.position = "fixed";
        document.getElementById("scrollNav").style.top = "0";
    } else {
        document.getElementById("scrollNav").style.top = "-100px";
    }
    prevScrollpos = currentScrollpos;
}


// focus search input method 
function myFunction() {
    document.getElementById("search-inp").focus();
}

// search input codes 


document.getElementById("search-m-btn").addEventListener("click", () => {
    document.getElementById("nav-search").classList.add("d-f");
    document.getElementById("s-btn-close").classList.add("d-f");
    myFunction();
});

document.getElementById("s-btn-close").addEventListener("click", function() {
    document.getElementById("search-inp").value;
    document.getElementById("nav-search").classList.remove("d-f");
    document.getElementById("nav-search").classList.add("d-none");
    document.getElementById("search-drop").style.display = "none";

});


document.getElementById("search-inp").addEventListener("keyup", () => {
    // console.log(document.querySelector("#search-inp").value);
    if (document.getElementById("search-inp").value != "") {
        document.getElementById("search-drop").style.display = "block";
        document.getElementsByTagName("body")[0].classList.add("searching");

    } else {
        document.getElementById("search-drop").style.display = "none";
        document.getElementsByTagName("body")[0].classList.remove("searching");
    }
})







if (document.getElementsByClassName("mySlides")) {
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "flex";
            dots[slideIndex - 1].className += " active";
        }
    }


    if (document.getElementById("plusSlides")) {
        document.getElementById("plusSlides").addEventListener("click", function() {
            showSlides(slideIndex += 1);
        })
        document.getElementById("minusSlides").addEventListener("click", function() {
            showSlides(slideIndex -= 1)
        })

    }
}





let isLoggedIn = true;
let olmosh = document.getElementById("olmosh");
let olmoshdi = document.getElementById("olmoshdi");
if (isLoggedIn) {
    olmoshdi.classList.remove("d-flex");
    olmoshdi.classList.add("d-none");
    olmosh.classList.remove("d-none");
    olmosh.classList.add("d-flex");
} else {
    olmosh.classList.remove("d-flex");
    olmosh.classList.add("d-none");
    olmoshdi.classList.remove("d-none");
    olmoshdi.classList.add("d-flex")
}
