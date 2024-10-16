function randomArray(arr) {
	return arr.sort(() => Math.random() - 0.5);
}
function randomCard(result) {
	let arr = ["one", "tow", "three", "for"];
	let index = Math.floor(Math.random() * 4) + 1;
	for (let i = 0; i < 4; i++) {
        let elementHTML = document.querySelector(`.result .${arr[i]}`)
		if (index == i + 1 ) {
			elementHTML.innerHTML = result;
            elementHTML.setAttribute("data-result", result);
		} else {
            let sumResult = result < 10 ? result : result - 20;;
			let randomNumber =
				Math.floor(Math.random() * (result + 70 - sumResult + 1)) + sumResult;
			elementHTML.innerHTML = randomNumber;
            elementHTML.setAttribute("data-result", randomNumber);
		}
	}
}
export default randomCard;
