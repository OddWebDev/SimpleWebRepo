const hummus = function (factor) {
	const ingredient = function (amount, unit, nazwa) {
		amount *= factor;
		if (amount > 1) unit += "s";
		console.log(`${amount}; ${unit}; ${nazwa}`);
	};
	ingredient(3, "tspoon", "oil");
	ingredient(1, "cup", "milk");
	ingredient(0.25, "spoon", "cocoa powder");
};

hummus(99);

printhello();

function printhello() {
	console.log("hello");
}
