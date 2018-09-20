const left = document.querySelectorAll("#lion #left path");
const all = document.querySelectorAll("#lion #left path, #lion #right path");
const right = document.querySelectorAll(
  "#lion #right path, #lion #right  polygon"
);

const tl = new TimelineMax({ repeat: -1, repeatDelay: 1 });
//tl.timeScale(4);
tl.staggerFrom(
  all,
  2.5,
  {
    x: () => Math.random() * 1000 - 500,
    y: () => Math.random() * 1000 - 500,
    ease: Elastic.easeIn.config(1, 0.3)
  },
  0.02
);
