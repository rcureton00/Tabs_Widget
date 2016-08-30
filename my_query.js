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
  var isArrayLike = function(obj) {

  };

  $.extend($, {
    isArray: function(obj) {

    },
    each: function(collection, cb) {
      
    }
  })





}





)
