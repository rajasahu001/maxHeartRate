//passing functions as arguements

//calculating a person's maximum heart rate & age 

var years = [1990, 1997, 1995, 1993, 2005];


function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i =0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));

	}
	return arrRes;
}

function calculateAge(el) {
	return 2018 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {

	if(el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));
	}
	else {
		return -1;
	}

	
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(rates);