window.addEventListener("DOMContentLoaded",function(){
    var onlineBtn = document.querySelector(".inbox-list-header__right-icon-wrap--online");
    var offlineBtn = document.querySelector(".inbox-list-header__right-icon-wrap--offline");
    var toggleBtn = document.querySelector(".inbox-list-header__right-toggle");
    var onlineImg = document.querySelector(".inbox-list-header__right-icon-wrap--online img");
    var offlineImg = document.querySelector(".inbox-list-header__right-icon-wrap--offline img");
    var chatList = document.querySelectorAll(".inbox-list__item");
    var inboxList = document.querySelector(".inbox-list-wrap");
    var fullMessage = document.querySelector(".full-message");
    var messageBack = document.querySelector(".full-message__header-left-button-assign--mobile");
    var messageBackTwo = this.document.querySelector(".full-message__header-left-button-assign--small-mobile");
    var sidebar = document.querySelector(".sidebar");
    var messageSection = document.querySelector(".main-inbox-section");
    var sidebarToggle = document.querySelector(".header__sidebar-toggle");

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

     for(let i = 0;i < chatList.length;i++){
        chatList[i].addEventListener("click",function(){
            for(let i = 0;i < chatList.length;i++){
                chatList[i].classList.remove("active");
            }
            this.classList.toggle("active");
            inboxList.style.display = "none";
            fullMessage.style.display = "block";
        })
     }

     messageBack.addEventListener("click",function(){
        fullMessage.style.display = "none";
        inboxList.style.display = "block";
     })

     messageBackTwo.addEventListener("click",function(){
        fullMessage.style.display = "none";
        inboxList.style.display = "block";
     })

     sidebarToggle.addEventListener("click",function(){
        messageSection.classList.toggle("show");
        sidebar.classList.toggle("show");
     })
})




