window.addEventListener("DOMContentLoaded",function(){
    var onlineBtn = document.querySelector(".inbox-list-header__right-icon-wrap--online");
    var offlineBtn = document.querySelector(".inbox-list-header__right-icon-wrap--offline");
    var toggleBtn = document.querySelector(".inbox-list-header__right-toggle");
    var onlineImg = document.querySelector(".inbox-list-header__right-icon-wrap--online img");
    var offlineImg = document.querySelector(".inbox-list-header__right-icon-wrap--offline img");


    onlineBtn.addEventListener("click",function(){
        toggleBtn.classList.add("online");
        onlineImg.src = "assets/inbox-icons/icon-5.svg";
        offlineImg.src = "assets/inbox-icons/icon-6.svg";
     })

     offlineBtn.addEventListener("click",function(){
        toggleBtn.classList.remove("online");
        offlineImg.src = "assets/inbox-icons/icon-3.svg";
        onlineImg.src = "assets/inbox-icons/icon-2.svg";
     })

})




