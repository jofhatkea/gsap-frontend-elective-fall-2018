const left = document.querySelectorAll("#lion #left path");
TweenMax.staggerFrom(
  left,
  0.3,
  {
    x: -800,
    rotation: 45
  },
  0.05
);

const right = document.querySelectorAll("#lion #right path");
TweenMax.staggerFrom(
  right,
  0.3,
  {
    x: -800
  },
  0.05
);
