// complete the given function

function palindrome(str){
	 const cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Check if the cleaned string is equal to its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}
module.exports = palindrome
