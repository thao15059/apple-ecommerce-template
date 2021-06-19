// Common
document
  .querySelectorAll(".watch-control, controls a, .iphone-btn")
  .forEach((control) => {
    control.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

    i === 1 && div.classList.add("change");

    document.querySelector(".slideshow").appendChild(div);
  }
};

slideshowDivs();

const divs = document.querySelectorAll(".slideshow div");

let counter = 1;

const slideshow = () => {
  setInterval(() => {
    counter++;

    const div = document.querySelector(".slideshow .change");
    div.classList.remove("change");

    if (counter < divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      counter = 1;
    }
  }, 20000);
};

slideshow();

let x = 0;
let y = 0;
let z = 0;
let isHover = true;
let interval;

const cube = document.querySelector(".cube");

document.querySelector(".top-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".bottom-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".left-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".right-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".top-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`;
});

document.querySelector(".bottom-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`;
});

const playPause = () => {
  if (isHover) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};

// playPause();

document.querySelector(".controls").addEventListener("mouseover", () => {
  isHover = !isHover;
  playPause();
});

document.querySelector(".controls").addEventListener("mouseout", () => {
  isHover = !isHover;
  playPause();
});

// Section 3
const section3Content = document.querySelector(".section-3-content");
window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    section3Content.offsetTop + section3Content.offsetHeight / 2
  ) {
    section3Content.classList.add("change");
  }
});

// Section 4
const watchBands = document.querySelector(".watch-bands");
const watchCases = document.querySelector(".watch-cases");

const watchTopControl = document.querySelector(".watch-top-control");
const watchRightControl = document.querySelector(".watch-right-control");
const watchBottomControl = document.querySelector(".watch-bottom-control");
const watchLeftControl = document.querySelector(".watch-left-control");

let axisX = 0;
let axisY = 0;

const hideControl = () => {
  if (axisY === -350) {
    watchTopControl.classList.add("hide-control");
  } else {
    watchTopControl.classList.remove("hide-control");
  }

  if (axisY === 280) {
    watchBottomControl.classList.add("hide-control");
  } else {
    watchBottomControl.classList.remove("hide-control");
  }

  if (axisX === -350) {
    watchRightControl.classList.add("hide-control");
  } else {
    watchRightControl.classList.remove("hide-control");
  }

  if (axisX === 280) {
    watchLeftControl.classList.add("hide-control");
  } else {
    watchLeftControl.classList.remove("hide-control");
  }
};

watchTopControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY -= 70)}rem`;
});

watchBottomControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY += 70)}rem`;
});

watchLeftControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX += 70)}rem`;
});

watchRightControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX -= 70)}rem`;
});

document.querySelectorAll(".watch-control").forEach((control) => {
  control.addEventListener("click", () => {
    hideControl();
    console.log("clicked");
  });
});
