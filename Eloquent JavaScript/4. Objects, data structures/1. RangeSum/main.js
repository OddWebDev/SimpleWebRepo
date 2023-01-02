function rangeSum(start, end, step = 1) {
	if (step == 0) return null;

	let newtable = [];

	if (step > 0) {
		while (start <= end) {
			newtable.push(start);
			start += step;
		}
	} else {
		while (start <= end) {
			newtable.push(end);
			end += step;
		}
	}
	return newtable;
}

function tableSum(table) {
	let sum = 0;
	for (let n of table) {
		sum += n;
	}
	return sum;
}

//this functions implementation seems very poor.
//I believe it shouldn't use a unshift method
function returnreversedtable(table) {
	let newtable = [];
	for (let element of table) {
		newtable.unshift(element);
	}
	return newtable;
}

//idk if the original table is being deleted or not. i see a memory leak there.

// console.log(mytable);
reversetable(mytable);
console.log(mytable);
