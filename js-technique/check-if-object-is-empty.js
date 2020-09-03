const obj = {};
console.log(Object.keys(obj).length === 0 && obj.constructor === Object);

// creating new object using constructor
const obj2 = new Object();
console.log(Object.keys(obj2).length === 0);

// But what happens when we create a new object
// instance using these other constructors
function badEmptyCheck(value) {
  console.log(Object.keys(value).length === 0);
}
// all the below function calls will o/p true
badEmptyCheck(new String());
badEmptyCheck(new Number());
badEmptyCheck(new Boolean());
badEmptyCheck(new Array());
badEmptyCheck(new RegExp());
badEmptyCheck(new Function());
badEmptyCheck(new Date());

// Solving false positive with constructor check
function goodEmptyCheck(value) {
  console.log(value && Object.keys(value).length === 0 && value.constructor === Object);
}

goodEmptyCheck(new String());
goodEmptyCheck(new Number());
goodEmptyCheck(new Boolean());
goodEmptyCheck(new Array());
goodEmptyCheck(new RegExp());
goodEmptyCheck(new Function());
goodEmptyCheck(new Date());

// null and undefined check
console.log();
goodEmptyCheck(null);
goodEmptyCheck(undefined);
