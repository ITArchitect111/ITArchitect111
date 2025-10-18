particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00e6e6" },
    shape: { type: "edge" },
    opacity: { value: 0.5 },
    size: { value: 4 },
    line_linked: {
      enable: true,
      distance: 170,
      color: "#00e6e6",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
