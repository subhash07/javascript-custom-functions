/*
* JAVASCRIPT CUSTOM FUNCTIONs
*
*/






/*
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-1.php
*/
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
 
 
/*
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-2.php
	Write a JavaScript function that checks whether a passed string is palindrome or not? 
*/
 

function check_Palindrome(str_entry){
// Change the string into lower case and remove  all non-alphanumeric characters
   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var ccount = 0;
// Check whether the string is empty or not
	if(cstr==="") {
		alert("Nothing found!");
		return false;
	}
// Check if the length of the string is even or odd 
	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {
// If the length of the string is 1 then it becomes a palindrome
		if (cstr.length === 1) {
			alert("Entry is a palindrome.");
			return true;
		} else {
// If the length of the string is odd ignore middle character
			ccount = (cstr.length - 1) / 2;
		}
	}
// Loop through to check the first character to the last character and then move next
	for (var x = 0; x < ccount; x++) {
// Compare characters and drop them if they do not match 
		if (cstr[x] != cstr.slice(-1-x)[0]) {
			alert("Entry is not a palindrome.");
			return false;
		}
	}
	alert("The entry is a palindrome.");
	return true;
}
 
 
/*
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-3.php
* Write a JavaScript function that generates all combinations of a string. 
*/

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


/*
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-3.php
*/

function alphabet_order(str)
{
	return str.split('').sort().join('');
}

/*
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-5.php
*/
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}

/*
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-6.php
*/
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

/*
* Display the current day and time in a specific format
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-7.php
*/
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

/*
* Check a number is prime or not
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php
*/
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
        return false;
      }
    }
    return true;  
  }
}

/*
* Get the data type
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-9.php
*/
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}


/*
* Returns n rows by n columns identity matrix
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-10.php
*/

function matrix(n) {

	var i;
	var j;

	for (i=0; i < n; i++)
	{
	  for (j=0; j < n; j++)
	  {
		   if (i === j)
		   {
			
			 console.log(' 1 ');
		   }
				  
		   else 
			{
			 console.log(' 0 ');
			 }
		}
		 console.log('----------');
	 }
}




/*
* Second lowest and second greatest numbers from an array
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-11.php
*/

function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }
  
/*
* Second lowest and second greatest numbers from an array
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-12.php
*/
function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
  
/*
* Compute the factors of a positive integers
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-13.php
*/
function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  // numeric sort
     return num_factors;
    }
	
	
	
/*
* Convert an amount to coins
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-14.php
*/
function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
}


/*
* Compute the value of bn where n is the exponent and b is the bases
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-15.php
*/
function exp(b,n)
{
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
}

/*
* Extract unique characters from a string
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-16.php
*/
function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  


/*
* Number of occurrences of each letter in specified string
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-17.php
*/
function Char_Counts(str1) {
var uchars = {};
str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
return uchars;
}


/*
* Search JavaScript arrays with a binary search
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-18.php
*/
function array_binarySearch(narray, delement) {
   var mposition = Math.floor(narray.length / 2);

   if (narray[mposition] === delement){
      return mposition;
   }
   else if (narray.length === 1) 
   {
      return null;
   }
   else if (narray[mposition] < delement) {
      var arr = narray.slice(mposition + 1);
      var res = array_binarySearch(arr, delement);
      if (res === null)
      {
         return null;
      }
      else {
         return mposition + 1 + res;
      }
   }
   else {
      var arr1 = narray.slice(0, mposition);
      return array_binarySearch(arr1, delement);
   }
}


/*
* Search JavaScript arrays with a binary search
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-19.php
*/
function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
   
   
   
/*   
* Generates a string id (specified length) of random characters
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-20.php
*/
function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}   

/*
* Get all possible subset with a fixed length combinations in an array
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-21.php
*/
function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
    
   
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}



/*
* Letter count within a string
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-22.php
*/
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}


/*
* Find the first not repeated character
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-23.php
*/
function find_FirstNotRepeatedChar(str) {
  var arra1 = str.split('');
  var result = '';
  var ctr = 0;
 
  for (var x = 0; x < arra1.length; x++) {
    ctr = 0;
 
    for (var y = 0; y < arra1.length; y++) 
    {
      if (arra1[x] === arra1[y]) {
        ctr+= 1;
      }
    }
 
    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}


/*
* Bubble Sort algorithm
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php
*/
function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}


/*
* Accept a list of words and returns the longest
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-25.php
*/
function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}


/*
*  Find longest substring in a given a string without repeating characters
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-26.php
*/
function longest_substring_without_repeating_characters(input) {
var chars = input.split('');
var curr_char;
var str = "";
var longest_string = "";
var hash = {};
for (var i = 0; i < chars.length; i++) {
curr_char = chars[i];
if (!hash[chars[i]]) 
{ 
str += curr_char; 
hash[chars[i]] = {index:i};
}
else 
{
if(longest_string.length <= str.length)
{
longest_string = str;
}
var prev_dupeIndex = hash[curr_char].index;
var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
str = str_FromPrevDupe + curr_char;
hash = {};
for (var j = prev_dupeIndex + 1; j <= i; j++) {
hash[input.charAt(j)] = {index:j};
}
}
}
return longest_string.length > str.length ? longest_string : str;
}


/*
*  The longest palindrome in a specified string
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-27.php
*/
function is_Palindrome(str1) {
var rev = str1.split("").reverse().join("");
return str1 == rev;
}

function longest_palindrome(str1){

var max_length = 0,
maxp = '';

for(var i=0; i < str1.length; i++) 
{
var subs = str1.substr(i, str1.length);

for(var j=subs.length; j>=0; j--) 
{
var sub_subs_str = subs.substr(0, j);
if (sub_subs_str.length <= 1)
continue;

if (is_Palindrome(sub_subs_str))
{
if (sub_subs_str.length > max_length) 
{
max_length = sub_subs_str.length;
maxp = sub_subs_str;
}
}
}
}

return maxp;
}

/*
*  Pass a JavaScript function as parameter
* Ref:http://www.w3resource.com/javascript-exercises/javascript-function-exercise-28.php
*/
function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
    console.log('Hello');
}


/*
* Get the function name
* http://www.w3resource.com/javascript-exercises/javascript-function-exercise-29.php
*/
function abc() {
    console.log( arguments.callee.name );
}


