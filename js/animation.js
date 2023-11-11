const tl = gsap.timeline({ defaults: {duration: 2, ease: "power4.out"} });

tl.to("h1", { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", y: 0, opacity: 1 });
tl.to(".btn-hero, .hero-body, .hero-image", { 
  clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", 
  y: 0,
  opacity: 1
}, "-=2");