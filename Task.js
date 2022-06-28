// *************** Task No.1  *************** //

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));


// *************** Task No.2  *************** //


// function check_Palindrome(str_entry)
// {
// 	   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
// 		var ccount = 0;
// 		if(cstr==="") 
// 		{
// 			console.log("Nothing found!");
// 			return false;
// 		} 
// 		if ((cstr.length) % 2 === 0)
// 		{
// 			ccount = (cstr.length) / 2;
// 		} 
// 		else 
// 		{
// 			if (cstr.length === 1) 
// 			{
// 				console.log("Entry is a palindrome.");
// 				return true;
// 			} 
// 			else 
// 			{
// 				ccount = (cstr.length - 1) / 2;
// 			}
// 		}
// 		for (var x = 0; x < ccount; x++) 
// 		{
// 			if (cstr[x] != cstr.slice(-1-x)[0]) 
// 			{
// 				console.log("Entry is not a palindrome.");
// 				return false;
// 			}
// 		}
// 		console.log("The entry is a palindrome.");
// 		return true;
// }
// 	check_Palindrome('madam');
// 	check_Palindrome('nurses run');


function palindrome(str) 
{
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  console.log(str)
  var len = str.length;
  for (var i = 0; i < len/2; i++)
  {
    if (str[i] !== str[len - 1 - i])
    {
        return "This is not a Palindrome..";
    }
  }
  return "This is a Palindrome..";
 }
  console.log(palindrome("nurses run"));
  console.log(palindrome("12321"))

// *************** Task No.3  *************** //

	function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("dog");


// *************** Task No.4  *************** //

function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));


// *************** Task No.5  *************** //

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));


// *************** Task No.6  *************** //

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));


// *************** Task No.7  *************** //

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));


// *************** Task No.8  *************** //

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return "This Number is not a prime Number";
      }
    }
    return "This Number is a prime Number";  
  }
}

console.log(test_prime(4));