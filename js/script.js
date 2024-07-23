const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menus.classList.add("display");
});

closeBtn.addEventListener("click", () => {
  menus.classList.remove("display");
});

// ! SCROLL STICKY NAVBAR

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// ! STATIC NUMBERS

const counters = document.querySelectorAll(".numbers");

counters.forEach((counter) => {
  counter.textContent = 0;

  incrementCounters();

  function incrementCounters() {
    let currentNum = +counter.textContent;
    const dataCeil = counter.getAttribute("data-ceil");

    const increment = dataCeil / 25;

    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counter.textContent = currentNum;
      setTimeout(incrementCounters, 70);
    } else {
      counter.textContent = dataCeil;
    }
  }
});
