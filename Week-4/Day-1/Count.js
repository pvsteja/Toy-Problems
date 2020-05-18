function count(word, char) {
	let c = 0;
	for (var i = 0; i < word.length; i++) {
		if (word[i] === char) {
			// console.log(i)
			c++;
		}
	}
	console.log(c)
}


count("alphabetical sequence i want the count of words", "e")
