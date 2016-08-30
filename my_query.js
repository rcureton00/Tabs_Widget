(function() {
  
  $ = function(selector) {

  };
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
      };
      return collection;
    },

    // Convert an array-like object into a true JS array
    makeArray: function(arr) {
      var results = [];
      $.each(arr, function(i, val) {
        results.push(val);
      })
      return results;
    },

    // Takes a function and returns a new function that calls the
    // original with a particular context (Similar to bind)
    proxy: function(fn, context) {
      return function() {
        return fn.apply(context, arguments);
      }
    }
  });

  $.extend($.prototype, {
    html: function(str) {

    },
    val: function(value) {

    },
    text: function(str) {

    },
    find: function(el) {

    },
    next: function() {

    },
    prev: function() {

    },
    parent: function() {

    },
    children: function() {

    },
    attr: function(attr, val) {

    },
    css: function(style, val) {

    },
    width: function() {

    },
    hide: function() {

    },
    show: function() {

    }
  })











}





)
