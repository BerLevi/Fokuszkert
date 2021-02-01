
const timeline = gsap.timeline({defaults: {ease: "power1.out"} });

timeline.to(".text", {y: "0%", duration: 1, stagger: 0.25});
timeline.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5})
timeline.to(".intro", {y:"-100%", duration: 1}, "-=1.5")
timeline.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 0.5})
timeline.fromTo(".call-to-action", {opacity: 0}, {opacity: 1, duration: 0.5},"-=0.5")
timeline.fromTo(".scroll-down", {opacity: 0}, {opacity: 1, duration: 3.5}, "+=2")
timeline.fromTo(".hide-scroll", {opacity: 1}, {opacity: 0, duration: 1})

