function functionwrap(x) {
	let local = x;
	return () => local;
}

let lol = functionwrap(13);

// console.log(lol());

function multiplier(factor) {
	return (number) => number * factor;
}

let twice = multiplier(2);

// console.log(twice(3));

const min = (n, m) => {
	if (n < m) return n;
	return m;
};

//console.log(min("abc", 33));

function isEven(n) {
	if (n < 0) return;
	if (n == 0) return true;
	if (n == 1) return false;
	return isEven(n - 2);
}

// console.log(isEven(-1));

function Countchars(string, a) {
	let chCount = 0;
	for (let i = 0; i <= string.length; i++) if (a === string[i]) chCount++;
	return chCount;
}

console.log(Countchars("Looks good i think", "a"));
