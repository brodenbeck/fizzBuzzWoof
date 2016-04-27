function fizzBuzzWoof(i) {

	for (var i = 1; i < 101; i++) {

		var result = "";
		var string = i + "";

		if (divisibleBy(i, 3) || string.includes("3")) {
			result += "fizz";
		}
		if (divisibleBy(i, 5) || string.includes("5")) {
			result += "buzz";
		} 
		if (divisibleBy(i, 7) || string.includes("7")) {
			result += "woof";
		}
		if (result === "") {
			result = i;
		}
		console.log(result);
	}
}

function divisibleBy(num, divisor) {
	return num % divisor === 0;
}

fizzBuzzWoof();