const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

function afficherDot(dot) {
	dot.classList.toggle("dot_selected")
}

function afficherTagline(tagline) {
	let p = document.querySelector("#banner p")
	p.innerHTML = tagline
}

function afficherImage(image) {
	let img = document.querySelector(".banner-img")
	img.src = `./assets/images/slideshow/${image}`
}

let i = 0
let listeDots = document.querySelectorAll(".dot")

let arrow_left = document.querySelector(".arrow_left")
arrow_left.addEventListener("click", () => {
	afficherDot(listeDots[i])
	i--
	afficherImage(slides[i]["image"])
	afficherTagline(slides[i]["tagLine"])
	afficherDot(listeDots[i])
})

let arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener("click", () => {
	afficherDot(listeDots[i])
	i++
	afficherImage(slides[i]["image"])
	afficherTagline(slides[i]["tagLine"])
	afficherDot(listeDots[i])
})