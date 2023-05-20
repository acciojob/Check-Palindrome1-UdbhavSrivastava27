// complete the given function

function palindrome(str){
	let right;
     for(let i = 0 ; i <str.length; i++){
         right = arr[i];
	 }
	let left;
	for(let i = str.length-1 ; i >=0 ; i--){
		left = arr[i];
	}
	if(right == left){
		return true;
	}
	else{
		return false;
	}
}
module.exports = palindrome
