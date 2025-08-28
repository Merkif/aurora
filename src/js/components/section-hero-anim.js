import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const sectionHero = document.querySelector(".section-hero");
const sectionHeroContent = sectionHero.querySelector(".section-hero__content");
const sectionHeroTitle = sectionHero.querySelector(".section-hero__title");
const sectionHeroSubtitle = sectionHero.querySelector(
	".section-hero__subtitle"
);
const tileFirst = sectionHero.querySelector(".section-hero .tile--1");
const tileSecond = sectionHero.querySelector(".section-hero .tile--2");
const tileThird = sectionHero.querySelector(".section-hero .tile--3");
const tileFourth = sectionHero.querySelector(".section-hero .tile--4");
const tileFifth = sectionHero.querySelector(".section-hero .tile--5");
const tileGroup = sectionHero.querySelector(".section-hero .tile-group");

const tl = gsap.timeline({
	ease: "none",
	scrollTrigger: {
		trigger: ".section-hero",
		start: "clamp(center 90%)",
		end: "+=1000",
		scrub: true,
	},
});

gsap.set(tileFifth, { opacity: "0" });

tl.to(tileFirst, {
	keyframes: {
		"50%": { height: "60%" },
		"100%": { height: "100%" },
	},
})
	.to(
		tileSecond,
		{
			keyframes: {
				"50%": { height: "40%" },
				"100%": { height: "100%" },
			},
		},
		0
	)
	.to(
		tileThird,
		{
			keyframes: {
				"50%": { height: "45%", "--cp": "0%" },
				"100%": { height: "100%", "--cp": "100%" },
			},
		},
		0
	)
	.to(sectionHeroSubtitle, { y: -100 }, 0)
	.to(sectionHeroTitle, { y: -100 }, 0)
	.to(sectionHeroContent, { y: -70 }, 0)
	.to(
		tileFifth,
		{
			keyframes: {
				"50%": { opacity: 1, height: "134px" },
			},
		},
		0
	);
