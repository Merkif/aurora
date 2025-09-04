class StatsList {
	constructor(
		container,
		{
			autoplay = true,
			interval = 3000,
			pauseOnHover = true,
			disableOnInteraction = true,
		} = {}
	) {
		this.container = container;
		this.items = Array.from(
			container.querySelectorAll(".stats-list__item")
		);
		this.totalItems = this.items.length;
		this.activeIndex = this.items.findIndex((item) =>
			item.classList.contains("stats-list__item--active")
		);
		if (this.activeIndex === -1) this.activeIndex = 0;

		this.updateActiveItem();
		this.userInteracted = false;
		this.autoplayEnabled = autoplay;
		this.interval = interval;
		this.disableOnInteraction = disableOnInteraction;

		this.items.forEach((item, index) => {
			const button = item.querySelector(".stats-list__button");
			if (button) {
				button.addEventListener("click", () => {
					this.handleButtonClick();
				});
			}

			const value = item.querySelector(".stats-list__value");
			if (value) {
				value.addEventListener("click", () => {
					this.handleValueClick(index);
				});
			}
		});

		if (autoplay) {
			this.observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							if (!this.userInteracted || !disableOnInteraction) {
								this.startAutoplay(interval);
							}
						} else {
							this.stopAutoplay();
						}
					});
				},
				{
					threshold: 0.5,
				}
			);
			this.observer.observe(this.container);

			if (pauseOnHover) {
				this.container.addEventListener("mouseenter", () => {
					if (!this.userInteracted || !disableOnInteraction) {
						this.stopAutoplay();
					}
				});

				this.container.addEventListener("mouseleave", () => {
					if (!this.userInteracted || !disableOnInteraction) {
						this.startAutoplay(interval);
					}
				});
			}
		}
	}

	updateActiveItem() {
		this.items.forEach((item, index) => {
			item.classList.toggle(
				"stats-list__item--active",
				index === this.activeIndex
			);
		});
	}

	next(currentIndex = this.activeIndex) {
		this.activeIndex = (currentIndex + 1) % this.totalItems;
		this.updateActiveItem();
	}

	handleButtonClick() {
		this.next();
		this.userInteracted = true;

		if (this.disableOnInteraction) {
			this.stopAutoplay();
		}
	}

	handleValueClick(index) {
		this.activeIndex = index;
		this.updateActiveItem();
		this.userInteracted = true;

		if (this.disableOnInteraction) {
			this.stopAutoplay();
		}
	}

	startAutoplay(interval) {
		this.stopAutoplay();
		this.timer = setInterval(() => this.next(), interval);
	}

	stopAutoplay() {
		if (this.timer) {
			clearInterval(this.timer);
			this.timer = null;
		}
	}
}

const statsList = document?.querySelector(".stats-list");
if (statsList) {
	new StatsList(statsList, {
		autoplay: true,
		interval: 3000,
		pauseOnHover: true,
		disableOnInteraction: false,
	});
}
