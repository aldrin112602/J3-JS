//       J3.JS LIBRARY
//       Version 1.0.0
//       NOVEMBER 12, 2022
//       BY ALDRIN CABALLERO

"use strict";

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
    iter["@@iterator"] != null
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
        arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}
var j3 = {};
var $ = function $(element_selector) {
  var element =
    typeof element_selector == "string"
      ? document.querySelectorAll(element_selector)
      : element_selector;
  try {
    element =
      element && element.length > 1
        ? element
        : typeof element_selector == "string"
        ? element[0]
        : element_selector;
  } catch (err) {
    console.error(err);
  }
  return element;
};
j3.hide = function (selector, callback) {
  var e = $(selector);
  try {
    if ("length" in e) {
      e.forEach(function (element) {
        element.style.display = "none";
      });
      if (typeof callback == "function") {
        callback();
      }
    } else {
      e.style.display = "none";
      if (typeof callback == "function") {
        callback();
      }
    }
  } catch (err) {
    console.error(err);
  }
};
j3.show = function (selector, callback) {
  var e = $(selector);
  try {
    if ("length" in e) {
      e.forEach(function (element) {
        element.style.display = "inline-block";
      });
      if (typeof callback == "function") callback();
    } else {
      e.style.display = "inline-block";
      if (typeof callback == "function") callback();
    }
  } catch (err) {
    console.error(err);
  }
};
j3.toggleShow = function (selector, callback) {
  var e = $(selector);
  try {
    if ("length" in e) {
      e.forEach(function (element) {
        element.style.display =
          element.style.display == "none" ? "inline-block" : "none";
      });
      if (typeof callback == "function") callback();
    } else {
      e.style.display = e.style.display == "none" ? "inline-block" : "none";
      if (typeof callback == "function") callback();
    }
  } catch (err) {
    console.error(err);
  }
};
j3.toggleClass = function (selector, className, callback) {
  var e = $(selector);
  try {
    if ("length" in e) {
      e.forEach(function (element) {
        element.classList.toggle(className);
      });
      if (typeof callback == "function") callback();
    } else {
      e.classList.toggle(className);
      if (typeof callback == "function") callback();
    }
  } catch (err) {
    console.error(err);
  }
};
j3.addClass = function (selector, className, callback) {
  var e = $(selector);
  try {
    if ("length" in e) {
      e.forEach(function (element) {
        if (typeof className != "string" && Array.isArray(className)) {
          className.forEach(function (cls) {
            element.classList.add(cls);
          });
        } else {
          element.classList.add(className);
        }
      });
      if (typeof callback == "function") callback();
    } else {
      e.classList.add(className);
      if (typeof className != "string" && Array.isArray(className)) {
        className.forEach(function (cls) {
          e.classList.add(cls);
        });
      } else {
        e.classList.add(className);
      }
      if (typeof callback == "function") callback();
    }
  } catch (err) {
    console.error(err);
  }
};
j3.removeClass = function (selector, className, callback) {
  var e = $(selector);
  try {
    if ("length" in e) {
      e.forEach(function (element) {
        if (typeof className != "string" && Array.isArray(className)) {
          className.forEach(function (cls) {
            element.classList.remove(cls);
          });
        } else {
          element.classList.remove(className);
        }
      });
      if (typeof callback == "function") callback();
    } else {
      e.classList.remove(className);
      if (typeof className != "string" && Array.isArray(className)) {
        className.forEach(function (cls) {
          e.classList.remove(cls);
        });
      } else {
        e.classList.remove(className);
      }
      if (typeof callback == "function") callback();
    }
  } catch (err) {
    console.error(err);
  }
};
j3.addStyle = function (selector, style, callback) {
  var e = $(selector);
  try {
    if ("length" in e) {
      e.forEach(function (element) {
        if (style && _typeof(style) == "object") {
          for (
            var _i = 0, _Object$entries = Object.entries(style);
            _i < _Object$entries.length;
            _i++
          ) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              val = _Object$entries$_i[1];
            css += ""
              .concat(
                key
                  .split(/(?=[A-Z])/)
                  .join("-")
                  .toLowerCase(),
                ": "
              )
              .concat(val.toLowerCase(), "; ");
          }
          element.style = css;
        } else {
          element.style = style;
        }
      });
      if (typeof callback == "function") callback();
    } else {
      if (style && _typeof(style) == "object") {
        var _css = "";
        for (
          var _i2 = 0, _Object$entries2 = Object.entries(style);
          _i2 < _Object$entries2.length;
          _i2++
        ) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            key = _Object$entries2$_i[0],
            val = _Object$entries2$_i[1];
          _css += ""
            .concat(
              key
                .split(/(?=[A-Z])/)
                .join("-")
                .toLowerCase(),
              ": "
            )
            .concat(String(val).toLowerCase(), "; ");
        }
        e.style = _css;
      } else {
        e.style = style;
      }
      if (typeof callback == "function") callback();
    }
  } catch (err) {
    console.error(err);
  }
};
j3.filter = function (selector, value, callback) {
  var e = $(selector);
  try {
    if ("length" in e) {
      e.forEach(function (parent) {
        value = value && value.toLowerCase().trim();
        var childElement = parent.querySelectorAll("*");
        childElement.forEach(function (elem) {
          if (elem.innerText.toLowerCase().trim().match(value)) {
            elem.style.display = "list-item";
          } else {
            elem.style.display = "none";
          }
        });
      });
    } else {
      value = value && value.toLowerCase().trim();
      var childElement = e.querySelectorAll("*");
      childElement.forEach(function (elem) {
        if (elem.innerText.toLowerCase().trim().match(value)) {
          elem.style.display = "list-item";
        } else {
          elem.style.display = "none";
        }
      });
    }
    if (typeof callback == "function") callback();
  } catch (err) {
    console.error(err);
  }
};
j3.sort = function (selector, callback) {
  var e = $(selector);
  try {
    if ("length" in e) {
      e.forEach(function (parent) {
        var childElement = parent.querySelectorAll("*");
        parent.innerHTML = "";
        _toConsumableArray(childElement)
          .sort(function (a, b) {
            return a.innerText.localeCompare(b.innerText);
          })
          .forEach(function (li) {
            return parent.appendChild(li);
          });
      });
    } else {
      var childElement = e.querySelectorAll("*");
      e.innerHTML = "";
      _toConsumableArray(childElement)
        .sort(function (a, b) {
          return a.innerText.localeCompare(b.innerText);
        })
        .forEach(function (li) {
          return e.appendChild(li);
        });
    }
    if (typeof callback == "function") callback();
  } catch (err) {
    console.error(err);
  }
};
j3.slideShow = function (selector, src, delay, callback) {
  var e = $(selector);
  try {
    if ("length" in e) {
      e.forEach(function (img) {
        var index = 0;
        setInterval(function () {
          img.src = src && src[index];
          if (index < src.length - 1) {
            index++;
          } else {
            index = 0;
          }
          if (typeof callback == "function") callback();
        }, delay);
      });
    } else {
      var index = 0;
      e.src = src && src[index];
      setInterval(function () {
        e.src = src && src[index];
        if (index < src.length - 1) {
          index++;
        } else {
          index = 0;
        }
        if (typeof callback == "function") callback();
      }, delay);
    }
  } catch (err) {
    console.error(err);
  }
};
j3.displayObject = function (selector, object, callback) {
  var e = $(selector);
  try {
    (function () {
      e = e && "length" in e ? e[0] : e;
      var html = e.innerHTML;
      var repeat_attr = _toConsumableArray(e.querySelectorAll("*")).filter(
        function (element) {
          return element.getAttribute("data-repeat");
        }
      );
      var _loop = function _loop() {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
          prop = _Object$entries3$_i[0],
          val = _Object$entries3$_i[1];
        html = html
          .replaceAll("{ ".concat(prop, " }"), val)
          .replaceAll("{".concat(prop, "}"), val)
          .replaceAll("{ ".concat(prop, "}"), val)
          .replaceAll("{".concat(prop, " }"), val);
        repeat_attr.forEach(function (item) {
          if (item.getAttribute("data-repeat") == prop) {
            for (var i = 0; i < val.length; i++) {
              if (i == 0) {
                for (
                  var _i4 = 0, _Object$entries4 = Object.entries(val[i]);
                  _i4 < _Object$entries4.length;
                  _i4++
                ) {
                  var _Object$entries4$_i = _slicedToArray(
                      _Object$entries4[_i4],
                      2
                    ),
                    k = _Object$entries4$_i[0],
                    v = _Object$entries4$_i[1];
                  html = html
                    .replaceAll("{ ".concat(k, " }"), v)
                    .replaceAll("{".concat(k, "}"), v)
                    .replaceAll("{ ".concat(k, "}"), v)
                    .replaceAll("{".concat(k, " }"), v);
                }
              } else {
                html += item.outerHTML;
                for (
                  var _i5 = 0, _Object$entries5 = Object.entries(val[i]);
                  _i5 < _Object$entries5.length;
                  _i5++
                ) {
                  var _Object$entries5$_i = _slicedToArray(
                      _Object$entries5[_i5],
                      2
                    ),
                    _k = _Object$entries5$_i[0],
                    _v = _Object$entries5$_i[1];
                  html = html
                    .replaceAll("&lt;", "<")
                    .replaceAll("</tbody>", "")
                    .replaceAll("&gt;", ">")
                    .replaceAll("{ ".concat(_k, " }"), _v)
                    .replaceAll("{".concat(_k, "}"), _v)
                    .replaceAll("{ ".concat(_k, "}"), _v)
                    .replaceAll("{".concat(_k, " }"), _v);
                }
              }
            }
          }
        });
      };
      for (
        var _i3 = 0, _Object$entries3 = Object.entries(object);
        _i3 < _Object$entries3.length;
        _i3++
      ) {
        _loop();
      }
      e.innerHTML = html;
      if (typeof callback == "function") callback();
    })();
  } catch (err) {
    console.error(err);
  }
};
j3.includeHTML = function (callback) {
  _toConsumableArray(document.querySelectorAll("*"))
    .filter(function (li) {
      return li.getAttribute("data-html");
    })
    .forEach(function (e) {
      try {
        fetch(e.getAttribute("data-html"))
          .then(function (res) {
            return res.text();
          })
          .then(function (res) {
            if (res != "Error 404, file not found.") {
              e.innerHTML = res;
            } else {
              e.removeAttribute("data-html");
            }
          });
        if (typeof callback == "function") callback();
      } catch (err) {
        console.error(err);
      }
    });
};
j3.getHttpObject = function (url, callback) {
  try {
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (typeof callback == "function") callback(data);
      });
  } catch (err) {
    console.error(err);
  }
};
j3.get = function (url, callback) {
  try {
    fetch(url)
      .then(function (res) {
        return res.text();
      })
      .then(function (data) {
        if (typeof callback == "function") callback(data);
      });
  } catch (err) {
    console.error(err);
  }
};
for (
  var _i6 = 0, _Object$entries6 = Object.entries(j3);
  _i6 < _Object$entries6.length;
  _i6++
) {
  var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i6], 2),
    k = _Object$entries6$_i[0],
    v = _Object$entries6$_i[1];
  Object.defineProperty(j3, k, {
    enumerable: false,
    writable: false,
    configurable: false,
    value: v,
  });
}
var J3 = function J3(selector) {
  var element;
  try {
    element =
      typeof selector == "string"
        ? document.querySelectorAll(selector)
        : selector;
  } catch (error) {
    console.error(error);
  }
  var Event = {
    on: function on(event, callback) {
      if (element && element == "[object NodeList]") {
        try {
          element.forEach(function (el) {
            el.addEventListener(event, callback);
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        element.addEventListener(event, callback);
      }
    },
    ready: function ready(callback) {
      if (
        !(element && element == "[object NodeList]") &&
        typeof callback == "function"
      ) {
        element.addEventListener("DOMContentLoaded", callback);
      }
    },
  };
  for (
    var _i7 = 0, _Object$entries7 = Object.entries(Event);
    _i7 < _Object$entries7.length;
    _i7++
  ) {
    var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i7], 2),
      _k2 = _Object$entries7$_i[0],
      _v2 = _Object$entries7$_i[1];
    Object.defineProperty(Event, _k2, {
      enumerable: false,
      writable: false,
      configurable: false,
      value: _v2,
    });
  }
  return Event;
};
Object.freeze(j3) && Object.seal(j3) && console.warn('You are now using J3.JS library.\nFor documentation go to tihs link: https://github.com/aldrin112602/J3.JS#readme');
