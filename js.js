// 2차탑바
$('.fa-bars').click(function(){
  $('.sec-top-bar').css('display', 'block');
});
$('.fa-xmark').click(function(){
  $('.sec-top-bar').css('display', 'none');
});

// swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  spaceBetween: 200,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  keyboard: {
    enabled: true
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


// putter
const btn = document.querySelector('.btn-select');
const list = document.querySelector('.list-member');
btn.addEventListener('click', () => {
  btn.classList.toggle('on');
});
list.addEventListener('click', (event) => {
  if (event.target.nodeName === "BUTTON") {
    btn.innerText = event.target.innerText;
    btn.classList.remove('on');
  }
});