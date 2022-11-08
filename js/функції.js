let func = function() {
	return function() {
		console.log('Hi');
	}
}

func()();
////////////////////////////////////////
let greeting = function(name){
	return "Hello " + name
}("Name");
console.log(greeting); // Hello Name


let greeting = (function(name){
	return "Hello " + name
}("Name"));
console.log(greeting); // Hello Name
////////////////////////////////////////

let counter = (function(){
	let count = 0;
	return function(){
		return count++;
	}
}());
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
////////////////////////////////////////
let counter = function(num) {
	counter.count = num !== undefined ? num : counter.count;
	return counter.count++;
}
counter.count = 0;
////////////////////////////////////////
