const $like = document.querySelector("#like");
$like.addEventListener("click", () => ($like.style.color = "red"));

const $text = document.querySelector("#yeartext");
$text.innerHTML += new Date().getFullYear();