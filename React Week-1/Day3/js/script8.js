var sample_string = "    Dennis Richie invented programming and it is procedural language";

console.log(sample_string.length);
console.log(sample_string.toUpperCase());
console.log(sample_string.toLocaleLowerCase());
console.log(sample_string.trim()); // to remove extra spaces
console.log(sample_string.substring(8,20)); // the index value will be removed from string
console.log(sample_string.split("")); // 'D', 'e', 'n', 'n', 'i', 's'
console.log(sample_string.split(" ")); // 'Dennis',   'Richie'

//Local compare if string1 and string 2 are same then it returns 0 and "==" returns true/false
var password = "admin";
var confirm = "admin";
 console.log(password==confirm);
 console.log(password.localeCompare(confirm));