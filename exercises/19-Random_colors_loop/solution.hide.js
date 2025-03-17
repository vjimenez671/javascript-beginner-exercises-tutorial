function getColor(colorNumber = 0) {

	
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		default: return "black";

	}
}

function getAllStudentColors() {

	
	for (let i = 0; i < 10; i++) {
		let exampleColor = getColor(Math.floor(Math.random() * 4) + 1)
		console.log(exampleColor);
	}
}


getAllStudentColors();

