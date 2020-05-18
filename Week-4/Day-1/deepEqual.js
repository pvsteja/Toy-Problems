function deepEqual(one, two) {
	if (typeof one === 'object' && typeof two === 'object') {
		if (Object.keys(one).length === Object.keys(two).length) {
			let c = 0;
			let l = Object.keys(one).length;
			for (var i = 0; i < l; i++) {
				// console.log(l)
				if (one[i] === two[i]) {
					c++;
				}
			}
			if (c === l) {
				return true;
			}
			else {
				return false;
			}
		}
	}
	else if (typeof one === typeof two) {
		if (one === two) {
			return true;
		}
		return false;
	}
	else{
		return false;
	}
}
const v1 = {
	a:"a",b:"b"
}
const v2 = {
	a:"a",b:"b"
}
// console.log(typeof v1)
// console.log(typeof v2)


console.log(deepEqual(v1, v2))