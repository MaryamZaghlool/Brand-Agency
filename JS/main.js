let close = document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementsByClassName("nav-list")[0].classList.add("view");
    document.getElementsByClassName("layer")[0].style.backgroundColor="white";
}
let open=document.getElementsByClassName("fa-bars")[0].onclick = function () {
    document.getElementsByClassName("nav-list")[0].classList.remove("view");
    document.getElementsByClassName("layer")[0].style.backgroundColor="rgba(0, 0, 0, 0.69)";
}
