	function squareNumber(square) {
    	var number = square * square;
    	console.log(' The result of squaring the number ' + square + ' is ' + number);
    	return number;
    }
    squareNumber(3);


    function halfNumber(num) {
		var halfNum = num / 2;
		console.log('Half of ' + num + ' is ' + halfNum);
		return halfNum;
	}
	halfNumber(2.5);


	function percentOf(num1, num2) {
		var numPercent = (num1 / num2) * 100;
		console.log(num1 + " is " + numPercent + " % of " + num2);
		return numPercent;
	}
	percentOf(5, 10);


