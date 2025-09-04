import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	ease: "none",
	scrollTrigger: {
		trigger: ".section-expansion",
		start: "clamp(top 70%)",
		end: "+=1100",
		scrub: 1.2,
	},
});

tl.from(".section-expansion", { "--row-width": 50 })
	.to(".section-expansion .tile--4", { "--sy": 2 })
	.to(".section-expansion .tile--8", { "--sy": 3 }, "<")
	.to(".section-expansion .tile--7", { "--sy": 2 }, "<")
	.to(
		".section-expansion .tile--5",
		{
			"--rx": "180deg",
			"--ty": "250%",
			"--sy": "4",
		},
		"<"
	)
	.to(
		".section-expansion .tile--6",
		{
			"--rx": "180deg",
			"--ty": "50%",
			"--sy": "4",
		},
		"<"
	)
	.to(
		".section-expansion .tile--9",
		{
			"--sy": "3",
			"--height": "100%",
		},
		"<"
	)
	.to(
		".section-expansion .tile--12",
		{
			"--height": "100%",
			"--ty": "-100%",
		},
		"<"
	)
	.to(
		".section-expansion .tile--13",
		{
			"--sy": "1.8",
			"--ty": "-180%",
		},
		"<"
	)
	.to(".section-expansion .tile-8--ghost", {
		"--sy": "7.9",
	})
	.to(
		".section-expansion .tile--12",
		{
			"--sy": "3.98",
		},
		"<"
	)
	.to(
		".section-expansion .tile--7",
		{
			"--sy": "2.7",
		},
		"<"
	)
	.to(
		".section-expansion .tile--13",
		{
			"--sy": "4.78",
		},
		"<"
	)
	.to(
		".section-expansion .tile-5--ghost",
		{
			visibility: "visible",
			"--sy": "6.92",
		},
		"<"
	)
	.to(
		".section-expansion .tile--9",
		{
			"--sy": "7.9",
		},
		"<"
	)
	.to(
		".section-expansion .tile--5",
		{
			"--sy": "6",
		},
		"<"
	)
	.to(
		".section-expansion .tile-7--ghost",
		{
			"--sy": "2",
		},
		"<"
	)
	.to(".section-expansion .tile--wide", {
		"--tl-wide-height": 84,
	})
	.to(".section-expansion .tile--wide", {
		"--tl-wide-height": 0,
	});
