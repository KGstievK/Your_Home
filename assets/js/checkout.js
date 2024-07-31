const deliveryHeader = document.querySelector(".delivery_header")
const deliveryButtons = document.querySelector("#buttons")
const pickup = document.querySelector("#pickup")
const delivery = document.querySelector("#delivery")
const firstButton = document.querySelector(".button_first")
const secondButton = document.querySelector(".button_second")
const deliveryHome = document.querySelector("#delivery-home")
const deliveryStation = document.querySelector("#delivery-station")
const deliveryPickup = document.querySelector("#delivery-pickup")

const arrayDeliveryHeader = ["Данные для доставки", "Выберите ваш город из списка", "Выберите пункт выдачи"]

deliveryHeader.innerHTML = arrayDeliveryHeader[0]

pickup.addEventListener("click", () => {
	deliveryHeader.innerHTML = arrayDeliveryHeader[2]
	deliveryButtons.className = "delivery_btns delivery_btns_hide"
	deliveryHome.className = "address"
	deliveryStation.className = "address"
	deliveryPickup.className = "address address-pickup"
})

delivery.addEventListener("click", () => {
	deliveryHeader.innerHTML = arrayDeliveryHeader[0]
	deliveryButtons.className = "delivery_btns"
	deliveryHome.className = "address address-home"
	deliveryStation.className = "address"
	deliveryPickup.className = "address"
})

firstButton.addEventListener("click", () => {
	deliveryHeader.innerHTML = arrayDeliveryHeader[0]
	deliveryHome.className = "address address-home"
	deliveryStation.className = "address"
	deliveryPickup.className = "address"
})

secondButton.addEventListener("click", () => {
	deliveryHeader.innerHTML = arrayDeliveryHeader[1]
	deliveryHome.className = "address"
	deliveryStation.className = "address address-station"
	deliveryPickup.className = "address"
})
