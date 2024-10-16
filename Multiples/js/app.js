import randomMonyDays from "./randomMonyDays.js";
import multipeds from "./multiples.js";
import randomCard from "./randomCard.js";
import timeClock from "./clock.js";
import { myInterval } from "./clock.js";

// get HTML Element

let mony = document.querySelector(".mony");
let days = document.querySelector(".days");
let mins = document.querySelector(".min");
let seconds = document.querySelector(".seconds");

let results = 0;

// ****** scour *********
let newScour = 0,
	oldScour = 0,
	minScour = 0,
	maxSour = 0;
let newScourElement = document.querySelector(".newScore");
let oldScourElement = document.querySelector(".oldScore");
// ***************************

function main() {
	const [numberMony, numberDays] = randomMonyDays(mony, days, 0);
	results = multipeds(numberMony, numberDays);
	randomCard(results);
	timeClock(mins, seconds, results);
}
main();

let card = document.querySelectorAll(".card-result");
card.forEach((element) => {
	element.addEventListener("click", (e) => {
		const targetElement = e.target;
		const dataResult = targetElement.getAttribute("data-result");

		let textResult, colorResult;

		if (results != 0 && dataResult == results) {
			textResult = "good";
			colorResult = "rgb(101, 135, 101)";
			newScour += 1;
		} else {
			textResult = "mistake";
			colorResult = "rgb(255, 68, 68)";
			oldScour = newScour;
			maxSour = newScour > maxSour ? newScour : maxSour;
			newScour = 0;
		}
		targetElement.classList.add("click-card");
		clearInterval(myInterval);
		setTimeout(() => {
			targetElement.classList.add("result-card");
			targetElement.setAttribute("text-result", textResult);
			targetElement.setAttribute("style", `--color-result:${colorResult};`);
		}, 1000);
		setTimeout(() => {
			targetElement.classList.remove("click-card");
			targetElement.classList.remove("result-card");
			targetElement.setAttribute("text-result", "");
			targetElement.setAttribute("style", ``);
			// ******* Scour Target ******
			newScourElement.innerHTML = newScour < 10 ? "0"+newScour : newScour;
			oldScourElement.innerHTML = oldScour < 10 ? "0" + oldScour : oldScour;
			// ***************************
			main();
		}, 2000);
	});
});
