
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
var i,sum=0;

for(i=0;i<arrayOfNums.length;i++)
	{
		sum=sum+arrayOfNums[i];
	}
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var i,sum=0;
	arrayOfNums.sort();
	for(i=0;i<arrayOfNums.length;i++)
		if(arrayOfNums[i]!=arrayOfNums[i+1])
			sum+=arrayOfNums[i];
	
	return sum;
}

exports.ReverseString = function(str){
	str.split("");
	var res;
	res=str.split("");
	res.reverse();
	res=res.join("");
	return res;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
return arrayOfStrings.reverse();

}