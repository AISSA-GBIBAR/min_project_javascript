export let myInterval;
export function clock(DocMin, DocSeconds, numberMin, numberSecond) {
	let min = numberMin,
		seconds = numberSecond;
	let bool = true;
	let TimeAddLine = 90 / (numberMin * 60 + numberSecond);
	let rotateY = 90;

	const timer = () => {
		if (min == 0 && seconds <= 10) {
			document.querySelector(".title").classList.add("banger");
			document.querySelector(".clock .image").classList.add("dangerImage");
		}

		if (min == 0 && seconds == 0) {
			document.querySelector(".title").classList.remove("banger");
			document.querySelector(".clock .image").classList.remove("dangerImage");
			clearInterval(myInterval);
			bool = true;
		}

		if (seconds == 0) {
			if (bool && seconds != 0) {
				seconds = numberSecond;
				bool = false;
			}
			seconds = 59;
			min--;
		} else if (seconds < 60) {
			seconds--;
		}

		// ******* line code js ***********
		let line = document.querySelector(".line");
		line.setAttribute("style", `--i:${rotateY}deg;`);
		rotateY -= TimeAddLine;

		seconds < 10
			? (DocSeconds.innerHTML = "0" + seconds)
			: (DocSeconds.innerHTML = seconds);
		min < 10 ? (DocMin.innerHTML = "0" + min) : (DocMin.innerHTML = min);
	};

	 myInterval = setInterval(timer, 1000);
	
}

function timeClock(DocMin, DocSeconds, result) {
	let minClock,
		secondsClock;
	let lengthResult = result.toString().length;
	switch (true) {
		case lengthResult > 0 && lengthResult <= 2:
			minClock = 1;
			secondsClock = 0;
			break;
		case lengthResult > 0 && lengthResult <= 3:
			minClock = 1;
			secondsClock = 50;
			break;
		case lengthResult > 0 && lengthResult <= 4:
			minClock = 2;
			secondsClock = 50;
			break;
		default:
			minClock = 3;
			secondsClock = 0;
			break;
	}
	clock(DocMin, DocSeconds, minClock, secondsClock);
}
export default timeClock;
