let toggle = document.querySelector(".toggle");
let itemDescription = document.querySelectorAll(".item__description");
let img = document.querySelector(".price__img");

toggle.addEventListener("click", (event) => {
  event.preventDefault();
  itemDescription.forEach((item) => {
    item.classList.toggle("none");
  });
  img.classList.toggle("rotate");
  if (orderPut.textContent == "свернуть") {
    orderPut.textContent = "развернуть";
  } else if (orderPut.textContent == "развернуть") {
    orderPut.textContent = "свернуть";
  }
});

let Swipes = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  slidesPerGroup: 1,
  spaceBetween: 30,
  slidesPerView: 4,

  simulateTouch: true,

  touchRatio: 1,

  touchAngle: 45,

  grabCursor: true,

  effect: "slide",
});
