

//       J3.JS LIBRARY
//       NOVEMBER 12, 2022
//       BY ALDRIN CABALLERO


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
  try {
    if ("length" in e) {
      e.forEach((element) => {
        if (typeof className != "string" && Array.isArray(className)) {
          className.forEach((cls) => {
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
        className.forEach((cls) => {
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
            .toLowerCase()}: ${val.toLowerCase()}; `;
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
          let htmlChild = item.innerHTML;
          item.innerHTML = "";
          val.forEach((tr, i) => {
            let obj_html = htmlChild;
            for (const [k, v] of Object.entries(tr)) {
              obj_html = obj_html
                .replaceAll(`{ ${k} }`, v)
                .replaceAll(`{${k}}`, v)
                .replaceAll(`{ ${k}}`, v)
                .replaceAll(`{${k} }`, v);
            }
            e.appendChild(item);
            item.innerHTML = obj_html;
          });
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
for (const [k, v] of Object.entries(j3)) {
  Object.defineProperty(j3, k, {
    enumerable: false,
    writable: false,
    configurable: false,
  });
}
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
  });
}

Object.freeze(j3) && Object.seal(j3);

