(function() {
  $ = function(selector) {};
  $.extend = function(target, object) {
    for(var prop in object) {
      if(object.hasOwnProperty(prop)) {
        target[prop] = object[prop];
      }
    }
    return target;
  };

  // Static Methods

  // Determine whether the argument is LIKE an array
  // (numerical indicies & length property)
  var isArrayLike = function(obj) {
    if(typeof obj.length === 'number') {
      if(obj.length === 0) {
        return true;
      } else if(obj.length > 0) {
        return (obj.length - 1) in obj;
      }
    }
    return false;
  };

  $.extend($, {
    // Determine whether the argument is an array
    isArray: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    },

    // Iterates over arrays or objects
    each: function(collection, cb) {
      if(isArrayLike(collection)) {
        for(var i = 0; i < collection.length; i++) {
            var val = collection[i];
            cb.call(val, i, val);
        }
      } else {
        for(var key in collection) {
          if(collection.hasOwnProperty(key)) {
            var val = collection[key]
            cb.call(val, key, val);
          }
        }
      }
    },
    makeArray: function(arr) {

    },
    proxy: function(fn, context) {

    }
  })





}





)
