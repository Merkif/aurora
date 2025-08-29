import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	ease: "none",
	scrollTrigger: {
		trigger: ".section-hero",
		start: "clamp(center 90%)",
		end: "+=1000",
		scrub: true,
	},
});
