console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var Haya = {
  firstName: 'Haya',
  lastName: 'Fraij',
  age: 24,
  dob: '15/5/1995',
  favoriteFood: ['Maqlubah', 'Mashawi', 'sadwich jubnah:p'],
  favoriteMovie: ['3-ideots', 'h'],
}




var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
function firstName(obj){
  var output = [];
  var i = 0;
  for (var key in obj) {
    output.push(obj[i]['name']['first']);
    i++;
  }
  return output;
}

function firstName2(obj){
  var output = [];
  // var i = 0;
  for (let i = 0; i < obj.length; i++) {
    output.push(obj[i]['name']['first']);
    // i++;
  }
  return output;
}

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/

function averageAge(obj){
  var sum = 0;
  var i = 0;
  for (var key in obj) {
    sum += persons[i].age;
    i++
    }
    return sum/obj.length;
  }

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(obj){

    return obj[obj.length-1]['name']['first'] + ' ' + obj[obj.length-1]['name']['last'];
}

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

// function longestName(obj){
// var 
// var 
// for( var i=0; obj.length>i ; i++)



// }

function longestName(obj){
  var length = 0;
  var output;
  for (let i = 0; i < obj.length; i++) {
  var test = obj[i]['name']['first'] + ' ' + obj[i]['name']['last']

    if(test.length > length){
      length = test.length;
      output = test
    }
  }
  return output;
}


//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(str){
  str = str.toLowerCase().split(' ');
  var obj = {};
  for (let i = 0; i < str.length; i++) {
    var test = str[i];
    var count = 0;
    for (let j = 0; j < str.length; j++) {
      if(test === str[j]){
        obj[test] = ++count;
      }    
    }
  }
  return obj;
}
/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(str){
  str = str.toLowerCase().split('');
  var obj = {};
  for (let i = 0; i < str.length; i++) {
    var test = str[i];
    var count = 0;
    for (let j = 0; j < str.length; j++) {
      if(test === str[j]){
        obj[test] = ++count;
      }    
    }
  }
  return obj;
}

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
function selectFromOject(obj, arr) {
  var output = {};
  var i = 0;
  for (const key in obj) {
    if (key === arr[i]) {
      output[key] = obj[key];
      i++;
    }
  }
  return output
}
/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
function objectToArray(obj){
  var output = [];
  for (const key in obj) {
    output.push(key);
    output.push(obj[key]);
    }
    return output;
  }


/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
function arrayToObject(arr){
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[++i]
  }
  return obj;
}

/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
function onlyNumber(obj){
  for (const key in obj) {
    if (typeof(obj[key]) !== 'number') {
      delete obj[key];
    }
  }
  return obj;
}
function onlyNumber2(obj){
  var output = {};
  for (const key in obj) {
    if (typeof(obj[key]) === 'number') {
      output[key] = obj[key];
    }
  }
  return output;
}

/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
function onlyString(obj){
  var output = {};
  for (const key in obj) {
    if (typeof(obj[key]) === 'string') {
      output[key] = obj[key];
    }
  }
  return output;
}

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function onlyArray(obj){
  var output = {};
  for (const key in obj) {
    if (typeof(obj[key]) === 'object') {
      output[key] = obj[key];
    }
  }
  return output;
}

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
function keysArray(obj){
  var output = [];
  for (const key in obj) {
    output.push(key);
    }
    return output;
  }
  

/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/
function valuesArray(obj){
  var output = [];
  for (const key in obj) {
    output.push(obj[key]);
  }
  return output;
}

/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
var obj = {a:1,b:3,c:4};
delete obj['b'];
obj['a'] = 4;
obj['c'] = 66;
/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
function objectLength(obj){
  var count = 0;
  for (const key in obj) {
    count ++
  }
  return count;
}


/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
function evenValue(obj){
  var output = {};
  for (const key in obj) {
    if (obj[key] % 2 === 0) {
      output[key] = obj[key]; 
    }
  }
  return output;
}

/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: evenValue({car:1, schoooooooool:2, monster:3, alexMercer:4})=> 4
*/
function longestKey(obj){
  var length = 0;
  var result;
  for (const key in obj) {
    if (key.length > length) {
      length = key.length;
      result = obj[key];
    }
  }
  return result;
}