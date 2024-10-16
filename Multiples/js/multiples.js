function multipeds(number, repeat) {
	let count = 2,
		numberOfMultiples = number;

	while (count <= repeat) {
		numberOfMultiples += numberOfMultiples;
		count++;
	}
	return numberOfMultiples;
}
export default multipeds;
