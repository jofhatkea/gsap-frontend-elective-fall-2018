/*TweenMax.fromTo(
  "div div",
  3,
  {
    backgroundColor: "red"
  },
  {
    backgroundColor: "green"
  }
);*/

TweenMax.from("#app>div:nth-child(odd)", 3, {
  x: 500,
  yoyo: true,
  repeat: 10
});
/*
TweenMax.from("#app>div:nth-child(even)", 3, { x: -500 });
TweenMax.from("#app>div:nth-child(3n+2)", 3, { y: 500 });
TweenMax.from("#app>div:nth-child(3n+3)", 3, { y: -500 });
*/
/*
TweenMax.staggerFrom(
  "#app>div",
  1.2,
  {
    x: 500,
    y: 500,
    rotation: 360
  },
  0.1
);*/
