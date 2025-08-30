import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	ease: "none",
	scrollTrigger: {
		trigger: ".section-about",
		start: "clamp(center 90%)",
		end: "+=400",
		scrub: true,
	},
});

tl.fromTo(
	".section-about__map",
	{
		opacity: 0,
	},
	{
		opacity: 1,
	}
);
