(function() {


  // Create an array like object with elements from the page
  $ = function(selector) {
    const elements = document.querySelectorAll(selector);

    // Loops through elements and pushes each one into 'this'
    // Creates a .length property on 'this'
    Array.prototype.push.apply(this, elements);
  };

  // Extend an object (@target) with the properties of a second object (@object)
  $.extend = function(target, object) {
    for(let prop in object) {
      if(object.hasOwnProperty(prop)) {
        target[prop] = object[prop];
      }
    }
    return target;
  };

  // Static Methods

  // Determine whether the argument is LIKE an array
  // (numerical indicies & length property)
  const isArrayLike = function(obj) {
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
        for(let i = 0; i < collection.length; i++) {
            const val = collection[i];
            cb.call(val, i, val);
        }
      } else {
        for(let key in collection) {
          if(collection.hasOwnProperty(key)) {
            const val = collection[key]
            cb.call(val, key, val);
          }
        }
      };
      return collection;
    },

    // Convert an array-like object into a true JS array
    makeArray: function(arr) {
      const results = [];
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
    // get/set the innerHTML of an element
    html: function(newHTML) {
      if(arguments.length) {
        $.each(this, function(i, el) {
          el.innerHTML = newHTML;
        });
        return this;
      } else {
        return this[0].innerHTML;
      }
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
