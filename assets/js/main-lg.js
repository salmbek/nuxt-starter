let toogle = true;
document.getElementById("profile-btn").addEventListener("click", () => {
    if (toogle) {
        document.getElementById("profile-bg").style.display = 'block';
        document.getElementById("profile-dropdown").style.display = 'block';
        toogle = !toogle
    } else {
        document.getElementById("profile-bg").style.display = 'none';
        document.getElementById("profile-dropdown").style.display = 'none';
        toogle = !toogle
    }
    document.querySelector("#profile-btn img").classList.toggle("border-img");
});


$('body').click(function(e) {
    if ($(e.target).closest('#add').length === 0) {
        $("#plus-dropdown").hide(100);
    }
    if ($(e.target).closest('#profile-btn').length === 0) {
        $("#profile-bg").hide(100);
        $("#profile-dropdown").hide(100);
        $("#profile-btn img").removeClass("border-img");
    }

});
