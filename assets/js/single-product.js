const swiperEl = document.querySelector("swiper-container")
const pageModal = document.querySelector("#modal")
const pageShowModal = document.querySelector(".modal")

window.addEventListener("click", (event) => {
	const composed = event.composedPath()
	if (!composed.includes(pageModal) && !composed.includes(pageShowModal)) {
		pageShowModal.classList.remove("modal-show")
	}
})

pageModal.addEventListener("click", (event) => {
	pageShowModal.classList.add("modal-show")
	event.stopPropagation()
})

const swiperParams = {
	slidesPerView: 1,
	navigation: true,
	autoplay: true,
	on: {
		init() {},
	},
}

Object.assign(swiperEl, swiperParams)

swiperEl.initialize()
