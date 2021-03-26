function randint(minNum, maxNum){
	random = Math.floor(Math.random() * maxNum)+minNum;
	return random;
}

function choice(array){
	item = array[randint(0, array.length)];
	return item;
}