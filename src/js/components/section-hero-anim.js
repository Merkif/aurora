import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const sectionHero = document.querySelector(".section-hero");
const sectionHeroContent = sectionHero.querySelector(".section-hero__content");
const sectionHeroTitle = sectionHero.querySelector(".section-hero__title");
const sectionHeroSubtitle = sectionHero.querySelector(
	".section-hero__subtitle"
);
const tileFirst = sectionHero.querySelector(".tile--1");
const tileSecond = sectionHero.querySelector(".tile--2");
const tileThird = sectionHero.querySelector(".tile--3");
const tileFourth = sectionHero.querySelector(".tile--4");
const tileFifth = sectionHero.querySelector(".tile--5");

const tl = gsap.timeline({
	ease: "none",
	scrollTrigger: {
		trigger: ".section-hero",
		start: "clamp(center 90%)",
		end: "+=850",
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

gsap.to(tileFifth, {
	yPercent: 100,
	scrollTrigger: {
		trigger: ".section-hero .tile--5",
		start: "clamp(top 15%)",
		end: "+=300",
		scrub: true,
		invalidateOnRefresh: true,
	},
});
