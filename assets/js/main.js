document.addEventListener("DOMContentLoaded", () => {
  var menuList = document.querySelector(".menuList");
  var burger = document.querySelector(".burger");
  var close = document.querySelector(".close");
  burger.addEventListener("click", () => {
    menuList.style.right = "0";
  });
  close.addEventListener("click", () => {
    menuList.style.right = "";
  });
});
