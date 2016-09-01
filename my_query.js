(function() {


  // Create an array like object with elements from the page
  $ = function(selector) {
    // Check 'this'
    if(!(this instanceof $)) {
      return new $(selector);
    }

    let elements = null;
    // If selector is 'string' :
    if(typeof selector === 'string') {
      elements = document.querySelectorAll(selector);
    } else {
      // Otherwise assume selector is 'array' :
      elements = selector;
    }
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

  const getText = function(el) {
    const txt = '';
    $.each(el.childNodes, function(i, childNode) {
      // nodeType === 3 only if it is a textNode
      if(childNode.nodeType === Node.TEXT_NODE) {
        // nodeValue is the text on the nodeValue
        txt += childNode.nodeValue;
      } else if(childNode.nodeType === Node.ELEMENT_NODE) {
        // recurse
        txt += getText(childNode);
      }
    })
    return txt;
  }

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
        // if this[0] is truthy, return this[0].innerHTML
        return this[0] && this[0].innerHTML;
      }
    },

    // get/set the value of an element
    val: function(newVal) {
      if(arguments.length) {
        $.each(this, function(i, el) {
          el.value = newVal;
        })
        return this;
      } else {
        return this[0] && this[0].value;
      }
    },

    // get/set the text of an element
    text: function(str) {
      if(arguments.length) {
        this.html('');
        return $.each(this, function(i, el) {
          const text = document.createTextNode(str);
          el.appendChild(text);
        })
      } else {
        return this[0] && getText(this[0]);
      }
    },

    // returns items within the current element
    find: function(selector) {
      const elements = [];
        $.each(this, function(i, el) {
          const els = el.querySelectorAll(selector);
          elements.push(els);
        })
      return $(elements);
    },

    // returns next sibling in DOM (ignores text nodes)
    next: function() {
      const elements = [];
      $.each(this, function(i, el) {
        let current = el.nextSibling;
        while(current && current.nodeType !== 1) {
          current = current.nextSibling;
        }
        if(current) {
          elements.push(current);
        }
      });
      return $(elements);
    },

    // returns previous sibling in DOM (ignores text nodes)
    prev: function() {
      const elements = [];
      $.each(this, function(i, el) {
        let current = el.previousSibling;
        while(current && current.nodeType !== 1) {
          current = current.previousSibling;
        }
        if(current) {
          elements.push(current);
        }
      });
      return $(elements);
    },

    // returns parent node in DOM
    parent: function() {
      const elements = [];
      $.each(this, function(i, el) {
        elements.push(el.parentNode);
      });
      return $(elements);
    },

    // returns all child nodes in DOM
    children: function() {
      const elements = [];
      $.each(this, function(i, el) {
        if(el.childNodes) {
          $.each(el.childNodes, function(i, el) {
            elements.push(el)
          });
        }
      });
      return $(elements);
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
