gsap.to('#img', {
  scrollTrigger: {
    scrub: 0.5,
  },
  x: 1500,
  y: 400,
});

gsap.from('#wolf', {
  scrollTrigger: {
    scrub: 0.5,
  },
  x: 400,
});

gsap.from('#castle', {
  scrollTrigger: {
    scrub: 0.5,
  },
  x: -90,
});

gsap.to('#bats', {
  scrollTrigger: {
    scrub: 0.5,
  },
  scale: 1.5,
});
