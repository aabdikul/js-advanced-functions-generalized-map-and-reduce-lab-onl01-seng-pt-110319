
function map(inputArray, inputFunction) {
	let output = inputArray.map(inputFunction);
	return output
}

function reduce(inputArray, inputFunction, startingPoint) {
	if(!startingPoint) {
		let output = inputArray.reduce(inputFunction);
		return output
	} else if(startingPoint) {
		let output = inputArray.reduce(inputFunction, startingPoint)
		return output
	}
}