import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

function getDistanceToSectionBottom(element, section) {
	const elRect = element.getBoundingClientRect();
	const sectionRect = section.getBoundingClientRect();
	return sectionRect.bottom - elRect.top;
}

function getDistance(element, section) {
	const elRect = element.getBoundingClientRect();
	const sectionRect = section.getBoundingClientRect();
	return sectionRect.bottom - elRect.bottom;
}

let tl = gsap.timeline();
const sectionHeroContent = document.querySelector(".section-hero__content");
const sectionHeroTitle = document.querySelector(".section-hero__title");
const sectionHeroSubtitle = document.querySelector(".section-hero__subtitle");

const tiles = [
	{ el: document.querySelector(".tile--1"), start: "clamp(center 90%)" },
	{ el: document.querySelector(".tile--2"), start: "clamp(center 75%)" },
	{ el: document.querySelector(".tile--3"), start: "clamp(center 85%)" },
];

tiles.forEach(({ el, start }) => {
	if (!el) return;
	gsap.to(el, {
		"--height": () =>
			getDistanceToSectionBottom(el, sectionHeroContent) + "px",
		ease: "linear",
		scrollTrigger: {
			trigger: el,
			scrub: true,
			start,
			invalidateOnRefresh: true,
			end: () =>
				"+=" + getDistanceToSectionBottom(el, sectionHeroContent),
		},
	});
});

if (sectionHeroTitle) {
	gsap.fromTo(
		sectionHeroTitle,
		{ yPercent: 0 },
		{
			yPercent: -40,
			scrollTrigger: {
				trigger: sectionHeroTitle,
				scrub: true,
				start: "clamp(top 80%)",
				end: "clamp(bottom 10%)",
			},
		}
	);
}

if (sectionHeroSubtitle) {
	gsap.fromTo(
		sectionHeroSubtitle,
		{ yPercent: 0 },
		{
			yPercent: -90,
			scrollTrigger: {
				trigger: sectionHeroSubtitle,
				scrub: true,
				start: "clamp(top 80%)",
				end: "clamp(bottom 40%)",
			},
		}
	);
}

if (sectionHeroContent) {
	gsap.fromTo(
		sectionHeroContent,
		{ yPercent: 0 },
		{
			yPercent: -10,
			scrollTrigger: {
				trigger: sectionHeroContent,
				scrub: true,
				start: "clamp(top 80%)",
				end: "clamp(bottom 60%)",
			},
		}
	);

	tl.to(".section-hero .tile-group", {
		y: () =>
			getDistance(
				document.querySelector(".section-hero .tile-group"),
				document.querySelector(".section-hero")
			) + "px",
		ease: "linear",
		scrollTrigger: {
			trigger: ".section-hero .tile--5",
			scrub: true,
			start: "clamp(center 100.5%)",
			invalidateOnRefresh: true,
			end: () =>
				"+=" +
				getDistance(
					document.querySelector(".section-hero .tile-group"),
					document.querySelector(".section-hero")
				),
		},
	});

	tl.to(".section-hero .tile--4", {
		height: 124,
		scrollTrigger: {
			trigger: ".section-hero .tile--4",
			scrub: true,
			start: "clamp(center 89.5%)",
			end: "clamp(center 80%)",
		},
	});

	tl.fromTo(
		".section-hero .tile--5",
		{ opacity: 0, height: 82 },
		{
			opacity: 1,
			height: 134,
			scrollTrigger: {
				trigger: ".section-hero .tile--4",
				scrub: true,
				start: "clamp(center 89.5%)",
				end: "clamp(center 80%)",
			},
		}
	);

	tl.to(".section-hero .tile--4", {
		scaleY: 8,
		ease: "linear",
		scrollTrigger: {
			trigger: ".section-hero .tile--5",
			scrub: true,
			start: "clamp(center 80.5%)",
			end: "clamp(center 50%)",
		},
	});
}
