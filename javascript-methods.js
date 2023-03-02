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

// SOME ///
// Function: Returns true if there is at least one element
// in the array that passes the test implemented by the 
// provided function, otherwise return false.
Array.prototype.mySome = function(callbackFn) {
  for(let x = 0; x < this.length; x++) {
    if(this[x] === undefined) continue; 
      if(callbackFn(this[x],x,this) == true) {
        return true;
      }
  }
  return false;
};

// EVERY //
// Function: Returns true if all elements in the array 
// pass the test implemented by the provided function, 
// otherwise return false.
Array.prototype.myEvery = function(callbackFn) {
  for(let x = 0; x < this.length; x++) {
    if(this[x] === undefined) continue; 
      if(callbackFn(this[x],x,this) == false) {
        return false;
      }
  }
  return true;
};

// REDUCE //
// Function: returns the sum of all the elements in 
// an array. If an initialValue is specified, the 
// reducer starts on array[1], otherwise it starts on
// array[0].
Array.prototype.myReduce = function(callbackFn) {
  let result = 0;
  let index = 0;
  if(arguments[1] === undefined) {
    result = this[0];
    index = 1;
  } else { result = arguments[1]; }
  
  for(let x = index; x < this.length; x++) {
    if(this[x] === undefined) continue; 
      result = callbackFn(result,this[x],x,array);
  }
  return result;
};

// INCLUDES //
// Function: returns true if array contains a certain 
// value.
Array.prototype.myIncludes = function(searchElement) {
  for(let x = 0; x < this.length; x++) {
    if(this[x] === undefined) continue; 
      if(this[x] == searchElement) {
        return true;
      }
  }
  return false; 
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

