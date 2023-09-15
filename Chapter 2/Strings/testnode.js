var lastname = "Clinton";
var firstname = "Bill";

// old way of concatenating strings and variables
var s1 = "lastname is " + lastname + ", firstname is " + firstname;

// new way of concatenating strings and variables
var s2 = `lastname is ${lastname}, firstname is ${firstname}`;

console.log("s1 =", s1);
console.log("s2 =", s2);


var name  = 'Josue'
var lastname = 'Velazquez'
console.log(`My name is ${name} ${lastname}`)

for (var i = 0; i < name.length; i++) {
    console.log(name.charAt(i))
}
var secondName = name.slice(0, 3)
console.log(secondName)

console.log(name.match(/sue/))