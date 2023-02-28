/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
// Function: creates new array inheriting the results 
// of callbackFn on every element in the calling array.
Array.prototype.myMap = function(callbackFn) {
  let result = [];
  for(let x = 0; x < this.length; x++) {
    if(this[x] === undefined) continue; 
      result.push(callbackFn(this[x],x,this));
  }
  return result;
};

// FILTER //
// Function: creates shallow copy of a portion of the 
// calling array, filtered to contain only the elements 
// from the calling array that pass the test implemented 
// by the provided function.
Array.prototype.myFilter = function(callbackFn) {
  let result = [];
  for(let x = 0; x < this.length; x++) {
    if(this[x] === undefined) continue; 
      if(callbackFn(this[x],x,this) == true) {
        result.push(this[x]);
      }
  }
  return result;  
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};