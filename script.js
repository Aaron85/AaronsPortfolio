window.onscroll = function() {myFunction()};

let header = document.querySelector(".menu");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}