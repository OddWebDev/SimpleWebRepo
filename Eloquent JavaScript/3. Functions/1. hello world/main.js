const helloWorld = function () {
	console.log("Hello world!");
};

const square = function (x) {
	return x * x;
};

const fizzbuzz = function () {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
		else if (i % 3 == 0) console.log("Fizz");
		else if (i % 5 == 0) console.log("Buzz");
		else console.log(i);
	}
};

const pow = function (base, exponent) {
	let x = base;
	for (let i = 0; i < exponent; i++) {
		base *= x;
	}
	return base;
};

// doesitevenwork();

function doesitevenwork() {
	console.log("Yes... It does");
}

itDoesntWork = function () {
	console.log("it doesn't");
};

// itDoesntWork();

How = () => console.log("crazy is this language");

// How();

const brother = (str) => {
	console.log("brother, " + str + " I cant believe.");
};

// brother("really,");

function fakefunction(x) {
	console.log(x);
}

// fakefunction(123,332,123,"i cant believe. This wasn't looking that bad when i started learning");

function powerV1(base, exponent) {
	let result = base;
	for (let i = 0; i < exponent; i++) {
		result *= base;
	}
	return result;
}
