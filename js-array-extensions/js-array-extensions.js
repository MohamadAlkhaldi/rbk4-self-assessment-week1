// your code here
Array.__proto__.first = function(arr){
	return arr[0]
}

Array.__proto__.last = function(arr){
	return arr[arr.length-1]
}