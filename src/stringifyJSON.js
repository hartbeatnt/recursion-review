// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === "string" || typeof obj === "number") {
    return '"'+obj+'"';
  }
  if (obj === null) {
    return "null";
  }
  if (obj === undefined) {
    return undefined
  }
  if (Array.isArray(obj)){
    obj.forEach(function(item){
      stringifyJSON(item);
    });
  }
  else if (typeof obj === "object") {

  }
};
