import SmoothScroll from 'smoothscroll-for-websites';

SmoothScroll({
  // Scrolling Core
  animationTime: 800, // [ms]
  stepSize: 75, // [px]

  // Acceleration
  accelerationDelta: 30, // 50
  accelerationMax: 2, // 3

  // Keyboard Settings
  keyboardSupport: true, // option
  arrowScroll: 50, // [px]

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Other
  touchpadSupport: true, // ignore touchpad by default
});
