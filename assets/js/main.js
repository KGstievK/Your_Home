jQuery(document).ready(function (e) {
	jQuery(".catalog-menu ul li.has_children").click(function (e) {
		var thisElement = jQuery(this)
		if (!jQuery(this).hasClass("active")) {
			e.preventDefault()
			jQuery(".has_children").removeClass("active")

			if (jQuery(".sub-menu").is(":visible")) {
				jQuery(".sub-menu").hide()
				jQuery(this).children(".sub-menu").fadeIn(400).css("display", "grid")
				jQuery(this).addClass("active")
			} else {
				jQuery(this).children(".sub-menu").fadeIn(400).css("display", "grid")
				jQuery(this).addClass("active")
			}
		} else {
			e.preventDefault()
			jQuery(".sub-menu").hide()
		}
	})
	jQuery(".catalog-menu .sub-menu a").on("click", function (e) {
		return e
	})

	jQuery(".header-menu").trigger("mouseleave", function () {
		jQuery(".sub-menu").fadeOut(0)
	})

	function alert_window(answer_class, text) {
		jQuery(".alert_window").fadeIn(400).css("display", "flex")
		jQuery(".alert_window .answer")
			.addClass(answer_class)
			.html("<p>" + text + "</p>")
		setTimeout(function () {
			jQuery(".alert_window").fadeOut(400)
			jQuery(".alert_window .answer").removeClass(answer_class)
		}, 2000)
	}

	function show_hide_element(block, action, speedClose) {
		if (!action) {
			jQuery(block).fadeOut(speedClose)
		} else {
			jQuery(block).fadeIn(400)
		}
	}

	jQuery(".add-to-cart a").on("click", function () {
		alert_window("success", "Товар добавлен в корзину")
	})

	jQuery(".add-to-favorite").on("click", function () {
		alert_window("success", "Добавлен в избранное")
	})

	jQuery(".burger-modal-menu").on("click", function () {
		show_hide_element(".burger-modal", true)
		show_hide_element(".all_categories", true)
		show_hide_element(".sub-category", false, 0)
		show_hide_element(".main_menu", false, 0)
	})

	jQuery(".close-icon").on("click", function () {
		show_hide_element(".burger-modal", false, 400)
	})

	jQuery(".page-all-category-btn").on("click", function () {
		jQuery(this).next("nav").slideToggle()
	})

	jQuery(".answer_element").on("click", function () {
		jQuery(this).next().slideToggle(500)
		jQuery(this).toggleClass("show")
	})

	var current_menu = ""
	jQuery(".burger-modal-categories .menu_category li a").on("click", function (e) {
		e.preventDefault()
		var sub_cat = jQuery(this).data("class")
		var parent_element = jQuery(this).parents(".menu").data("parent")
		jQuery(".return_menu").attr("data-parent", parent_element)
		show_hide_element(".all_categories", false, 0)
		show_hide_element(".sub-category", true)
		show_hide_element(".main_menu", false, 0)
		show_hide_element(".sub-category .category", false, 0)
		show_hide_element(".sub-category .category." + sub_cat, true)
	})

	jQuery(".return_menu").on("click", function () {
		show_hide_element(".sub-category", false, 0)
		show_hide_element(".all_categories", false, 0)
		show_hide_element(".main_menu", false, 0)
		show_hide_element("." + jQuery(this).attr("data-parent"), true)
	})

	jQuery("#menu-button-show-about").on("click", function () {
		show_hide_element(".burger-modal", true, 400)
		show_hide_element(".all_categories", false, 0)
		show_hide_element(".sub-category", false, 0)
		show_hide_element(".main_menu", true)
	})

	jQuery(".shop .category li>a").on("click", function (e) {
		4
		e.preventDefault()
		jQuery(".sub-menu").slideUp(400)
		jQuery(this).next("ul.sub-menu").slideDown(400)
	})
	jQuery(".sort-modal-button").on("click", function () {
		jQuery(".sort-modal-item").fadeIn(400)
	})
	jQuery(".sort-modal-close").on("click", function () {
		jQuery(".sort-modal-item").fadeOut(400)
	})
})

const toBasket = document.querySelectorAll(".to-basket")
const frame = document.querySelector(".modal-view-product")
const frameCloseButton = document.querySelector(".frame-exit")
const categoryFilter = document.querySelector(".category-filter")
const categoryFilterToggle = document.querySelectorAll(".category-filter-toggle")
const sortModalButton = document.querySelector(".sort-modal-button")
const sortModal = document.querySelector(".sort-modal-item")
const close = document.querySelector(".sort-modal-close")

toBasket.forEach((item) => {
	item.addEventListener("click", (event) => {
		event.preventDefault()
		frame.classList.add("frame-show")
		event.stopPropagation()
	})
})

frameCloseButton.addEventListener("click", () => {
	frame.classList.remove("frame-show")
})

// categoryFilterToggle.forEach((item) => {
// 	item.addEventListener("click", (event) => {
// 		categoryFilter.classList.add("category-filter-show")
// 		event.stopPropagation()
// 	})
// })

// window.addEventListener("click", (event) => {
// 	const composed = event.composedPath()

// 	if (!composed.includes(categoryFilter)) {
// 		categoryFilter.classList.remove("category-filter-show")
// 	}

// 	if (!composed.includes(frame)) {
// 		frame.classList.remove("frame-show")
// 	}
// })

// sortModalButton.addEventListener("click", () => {
// 	sortModal.classList.add("sort-modal-item-show")
// })

// close.addEventListener("click", () => {
// 	sortModal.classList.remove("sort-modal-item-show")
// })

