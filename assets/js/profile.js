if (document.querySelector("#edit > a")) {

    window.onscroll = function() {
        if (window.pageYOffset > 1388) {
            document.getElementById("p-ul").style.opacity = "0";

        } else {
            document.getElementById("p-ul").style.opacity = "1";

        }

    }


    document.querySelector("#edit > a").addEventListener("click", () => {
        document.querySelector("#edit-child-ul").classList.toggle("child-lists-off");
        document.querySelector("#acc-child-ul").classList.add("child-lists-off");
        document.querySelector("#account-settings").style.display = "none";
        document.querySelector("#edit-profile").style.display = "block";
        document.querySelector("#edit").classList.add("main-p-active");
        document.querySelector("#acc").classList.remove("main-p-active");

    });

    document.querySelector(".dots-link").click(function() {
        document.querySelector(".dots-link").classList.remove("active-dot");
        // document.querySelector(".dots-link").classList.add("active-dot"); // instead of this do the below 
        document.querySelector(this).classList.add("active-dot");
    });



    document.querySelector("#acc > a").addEventListener("click", () => {
        document.querySelector("#acc-child-ul").classList.toggle("child-lists-off");
        document.querySelector("#edit-child-ul").classList.add("child-lists-off");
        document.querySelector("#edit-profile").style.display = "none";
        document.querySelector("#account-settings").style.display = "block";
        document.querySelector("#edit").classList.remove("main-p-active");
        document.querySelector("#acc").classList.add("main-p-active");



    });



    // dropdown on mobile 

    document.querySelector("#m-select").addEventListener("change", () => {
        if (document.querySelector("#m-select").value == "Edit profile") {
            document.querySelector("#edit-profile").style.display = "block";
            document.querySelector("#account-settings").style.display = "none";
        } else if (document.querySelector("#m-select").value == "Account settings") {
            document.querySelector("#edit-profile").style.display = "none";
            document.querySelector("#account-settings").style.display = "block";
        }

    });



}