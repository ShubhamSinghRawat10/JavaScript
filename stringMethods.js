// STRING IS AN OBJECT OR A KEY-VALUE PAIR IN JS 
// JS INTERNALLY READS THE STRING IN THE SINGLE QUOTES EITHER IT IS WRIITEN IN DOUBLE QUOTES OR IN SINGLE QUOTES


// DECLARATION OF THE STRING .. 
const gamename = new String('karanjoshi-kj');
console.log(gamename[0]); // ACCESSING THE 0TH KEY ..
console.log(gamename.__proto__); // ACCESSING THE PROTOTYPE ..

// METHODS IN STRING .. 
console.log(gamename.length);
console.log(gamename.toUpperCase()); //NOTE: IT DOES'NT HAVE CHANGE THE ORIGINAL STRING 
console.log(gamename.charAt(2));// ACCESSING THE CHARACTER AT 2ND INDEX ...
console.log(gamename.indexOf('j'));  

const newstring = gamename.substring(0,4) //NOTE : HERE 4 IS NOT INCLUDED MEANS VALUES ARE PRINTED TILL THE THIRD INDEX ONLY :..
console.log(newstring); //THIS WILL IGNORE THE NEGATIVE VALUES IF WE GIVE NEGATIVE VALUES TO IT , IT WILL IGNORE AND START THE INDEXING FROM THE 0 ....  

// NOTE : WE CAN TAKE (-)VE VALUES ONLY IN THE SLICE METHOD NOT IN THE SUBSTRING METHOD ....
const anotherstring = gamename.slice(-12,3)
console.log(anotherstring);

const newstring1 = "    shubh   "
console.log(newstring1);
console.log(newstring1.trim()); // TRIM METHOD REMOVE THE SPACES GIVEN ....

// NOTE : THERE ARE TWO TYPES OF TRIM METHOD :
// 1.) TRIM START -->  REMOVES WHITESPACES FORM THE BEGINNING OF THE STRING AND RETURNS A NEW STRING  .. 
// 2.) TRIM END  -->  REMOVES WHITESPACES FORM THE END  OF THE STRING AND RETURNS A NEW  STRING .. 

const newstring2 = "    shubh   "
console.log(newstring2.trimEnd());
console.log(newstring2.trimStart());

const url = "http://karanjoshi.com/karan%50joshi"
console.log(url.replace('%50' , '_'));  // IT WILL REPLACE %50 BY UNDERSCORE 
console.log(url.includes('shubh'));// ASKING TO THE URL THAT KARAN EXISTS OR NOT , IT WILL RETURN BOOLEAN VALUE ..

//METHOD TO CONVERT THE STRING INTO ARRAY 
console.log(gamename.split('-')); 
console.log();
//
console.log(19/3);
console.log((19/3).toFixed(3)); // IT WILL RETURN THE VALUE TILL 3 DECIMAL POINTS ..
