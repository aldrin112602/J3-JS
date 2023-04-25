//       J3.JS LIBRARY
//       Version 1.0.0
//       NOVEMBER 12, 2022
//       BY ALDRIN CABALLERO

"use strict";
const j3 = {};
const $ = (element_selector) => {
  let element =
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
  let e = $(selector);
  try {
    if ("length" in e) {
      e.forEach((element) => {
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
  let e = $(selector);
  try {
    if ("length" in e) {
      e.forEach((element) => {
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
  let e = $(selector);
  try {
    if ("length" in e) {
      e.forEach((element) => {
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
  let e = $(selector);
  try {
    if ("length" in e) {
      e.forEach((element) => {
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
  let e = $(selector);
  if (!e) {
    console.error("Element not found: " + selector);
    return;
  }
  if (Array.isArray(e)) {
    e.forEach((element) => {
      if (typeof className != "string" && Array.isArray(className)) {
        className.forEach((cls) => {
          element.classList.add(cls.replace(/\s+/g, " "));
        });
      } else {
        className.split(/\s+/).forEach((c) => {
          element.classList.add(c);
        });
      }
    });
  } else {
    if (typeof className != "string" && Array.isArray(className)) {
      className.forEach((cls) => {
        e.classList.add(cls.replace(/\s+/g, " "));
      });
    } else {
      className.split(/\s+/).forEach((c) => {
        e.classList.add(c);
      });
    }
  }
  if (typeof callback == "function") {
    callback();
  }
};


j3.removeClass = function (selector, className, callback) {
  let e = $(selector);
  try {
    if ("length" in e) {
      e.forEach((element) => {
        if (typeof className != "string" && Array.isArray(className)) {
          className.forEach((cls) => {
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
        className.forEach((cls) => {
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
  let e = $(selector);
  try {
    if ("length" in e) {
      e.forEach((element) => {
        if (style && typeof style == "object") {
          for (const [key, val] of Object.entries(style)) {
            css += `${key
              .split(/(?=[A-Z])/)
              .join("-")
              .toLowerCase()}: ${val.toLowerCase()}; `;
          }
          element.style = css;
        } else {
          element.style = style;
        }
      });
      if (typeof callback == "function") callback();
    } else {
      if (style && typeof style == "object") {
        let css = "";
        for (const [key, val] of Object.entries(style)) {
          css += `${key
            .split(/(?=[A-Z])/)
            .join("-")
            .toLowerCase()}: ${String(val).toLowerCase()}; `;
        }
        e.style = css;
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
  let e = $(selector);
  try {
    if ("length" in e) {
      e.forEach((parent) => {
        value = value && value.toLowerCase().trim();
        const childElement = parent.querySelectorAll("*");
        childElement.forEach((elem) => {
          if (elem.innerText.toLowerCase().trim().match(value)) {
            elem.style.display = "list-item";
          } else {
            elem.style.display = "none";
          }
        });
      });
    } else {
      value = value && value.toLowerCase().trim();
      const childElement = e.querySelectorAll("*");
      childElement.forEach((elem) => {
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
  let e = $(selector);
  try {
    if ("length" in e) {
      e.forEach((parent) => {
        const childElement = parent.querySelectorAll("*");
        parent.innerHTML = "";
        [...childElement]
          .sort((a, b) => a.innerText.localeCompare(b.innerText))
          .forEach((li) => parent.appendChild(li));
      });
    } else {
      const childElement = e.querySelectorAll("*");
      e.innerHTML = "";
      [...childElement]
        .sort((a, b) => a.innerText.localeCompare(b.innerText))
        .forEach((li) => e.appendChild(li));
    }

    if (typeof callback == "function") callback();
  } catch (err) {
    console.error(err);
  }
};

j3.slideShow = function (selector, src, delay, callback) {
  let e = $(selector);
  try {
    if ("length" in e) {
      e.forEach((img) => {
        let index = 0;
        setInterval(() => {
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
      let index = 0;
      e.src = src && src[index];
      setInterval(() => {
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
  let e = $(selector);
  try {
    e = e && "length" in e ? e[0] : e;
    let html = e.innerHTML;

    let repeat_attr = [...e.querySelectorAll("*")].filter((element) =>
      element.getAttribute("data-repeat")
    );

    for (const [prop, val] of Object.entries(object)) {
      html = html
        .replaceAll(`{ ${prop} }`, val)
        .replaceAll(`{${prop}}`, val)
        .replaceAll(`{ ${prop}}`, val)
        .replaceAll(`{${prop} }`, val);
      repeat_attr.forEach((item) => {
        if (item.getAttribute("data-repeat") == prop) {
          for (let i = 0; i < val.length; i++) {
            if (i == 0) {
              for (const [k, v] of Object.entries(val[i])) {
                html = html
                  .replaceAll(`{ ${k} }`, v)
                  .replaceAll(`{${k}}`, v)
                  .replaceAll(`{ ${k}}`, v)
                  .replaceAll(`{${k} }`, v);
              }
            } else {
              html += item.outerHTML;
              for (const [k, v] of Object.entries(val[i])) {
                html = html
                  .replaceAll("&lt;", "<")
                  .replaceAll("</tbody>", "")
                  .replaceAll("&gt;", ">")
                  .replaceAll(`{ ${k} }`, v)
                  .replaceAll(`{${k}}`, v)
                  .replaceAll(`{ ${k}}`, v)
                  .replaceAll(`{${k} }`, v);
              }
            }
          }
        }
      });
    }
    e.innerHTML = html;
    if (typeof callback == "function") callback();
  } catch (err) {
    console.error(err);
  }
};

j3.includeHTML = function (callback) {
  [...document.querySelectorAll("*")]
    .filter((li) => li.getAttribute("data-html"))
    .forEach((e) => {
      try {
        fetch(e.getAttribute("data-html"))
          .then((res) => res.text())
          .then((res) => {
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
      .then((res) => res.json())
      .then((data) => {
        if (typeof callback == "function") callback(data);
      });
  } catch (err) {
    console.error(err);
  }
};

j3.get = function (url, callback) {
  try {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        if (typeof callback == "function") callback(data);
      });
  } catch (err) {
    console.error(err);
  }
};
for (const [k, v] of Object.entries(j3)) {
  Object.defineProperty(j3, k, {
    enumerable: false,
    writable: false,
    configurable: false,
    value: v,
  });
}
const J3 = (selector) => {
  let element;
  try {
    element =
      typeof selector == "string"
        ? document.querySelectorAll(selector)
        : selector;
  } catch (error) {
    console.error(error);
  }
  let Event = {
    on: function (event, callback) {
      if (element && element == "[object NodeList]") {
        try {
          element.forEach((el) => {
            el.addEventListener(event, callback);
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        element.addEventListener(event, callback);
      }
    },
    ready: function (callback) {
      if (
        !(element && element == "[object NodeList]") &&
        typeof callback == "function"
      ) {
        element.addEventListener("DOMContentLoaded", callback);
      }
    },
  };
  for (const [k, v] of Object.entries(Event)) {
    Object.defineProperty(Event, k, {
      enumerable: false,
      writable: false,
      configurable: false,
      value: v,
    });
  }
  return Event;
};
Object.freeze(j3) && Object.seal(j3);
