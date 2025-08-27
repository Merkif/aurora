import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
	smooth: 1.2,
	effects: true,
	smoothTouch: 0.1,
});
