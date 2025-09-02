import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	ease: "none",
	scrollTrigger: {
		trigger: ".section-expansion",
		start: "clamp(top 70%)",
		end: "+=1100",
		scrub: 1,
		markers: true,
	},
});

tl.from(".section-expansion :is(.tile--1, .tile--2)", { height: 80 }, "<")
	.from(
		".section-expansion :is(.tile--4, .tile--5, .tile--6)",
		{ height: 40 },
		"<"
	)
	.fromTo(".section-expansion .tile--3", { height: 30 }, { height: 65 }, "<")
	.to(".section-expansion .tile--4", { scaleY: 2 })
	.to(".section-expansion .tile--8", { scaleY: 3 }, "<")
	.to(".section-expansion .tile--7", { scaleY: 2 }, "<")
	.to(
		".section-expansion .tile--6",
		{ rotateX: 180, translateY: 35, scaleY: 265 / 64 },
		"<"
	)
	.to(
		".section-expansion .tile--5",
		{ rotateX: 180, translateY: 321 / 2, scaleY: 256 / 65 },
		"<"
	)
	.to(".section-expansion .tile--9", { scaleY: 190 / 27 }, "<")
	.to(".section-expansion .tile--13", { scaleY: 79 / 32, y: -100 }, "<")
	.to(
		".section-expansion .tile--14",
		{ scaleY: 100 / 60, yPercent: -155 },
		"<"
	)
	.to(".section-expansion .tile--8", {
		"--scale-y": "1.35",
	})
	.to(".section-expansion .tile--13", {
		"--scale-y": "3.4",
	})
	.to(
		".section-expansion .tile--12",
		{
			"--scale-y": "3.4",
		},
		"<"
	)
	.to(
		".section-expansion .tile--7",
		{
			"--scale-y": "1.5",
		},
		"<"
	)
	.to(
		".section-expansion .tile--14",
		{
			"--scale-y": "3",
		},
		"<"
	)
	.to(
		".section-expansion .tile--5",
		{
			"--scale-y": "2.5",
		},
		"<"
	)
	.to(
		".section-expansion .tile--9",
		{
			"--scale-y": "2.6",
		},
		"<"
	)
	.to(".section-expansion .tile--wide", {
		height: 84,
	})
	.to(".section-expansion .tile--wide", {
		height: 0,
	});
