# J3.JS
- A JavaScript library developed by _ALdrin Caballero_ is designed to simplify web development projects: Easy to learn and easy to use. 

- Designed for fast application development. 

- Designed for all devices: PC, Tablet, and Mobile, Free to use and No licenses.

 - Designed to make it much easier to use JavaScript on your website.

### What You Should Already Know?
Before you start studying J3.JS, you should have a basic knowledge of:

- *HTML*
- *CSS*
- *JavaScript*

### What Can J3.JS Do?

Below is a list of the some of the things J3.JS can do:

- Hide HTML elements
- Show HTML elements
- Toggle Show/hide HTML elements
- Add class name/s to HTML elements
- Remove class name/s of HTML elements
- Toggle class name (add/remove) of HTML elements
- Add styles property to HTML elements
- Filter HTML elements
- Sort HTML elements (A - Z)
- Make image slide show
- Display object properties/values to HTML elements using a placeholder `{ property_name }`

## Complete J3.JS API Reference

| Function                                       | Description                                                                                                                                                                         |
| :--------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `J3(document).ready(callback)`                 | This event occurs after the document is ready, Use ready() to make a function available after the document is loaded, it is a good place to have all other J3 events and functions. |
| `J3(selector).on(event, callback)`             | Use the on() to bind or add an event to all selected elements                                                                                                                       |
| `j3.hide(selector, callback)`                  | Hides HTML elements                                                                                                                                                                 |
| `j3.show(selector, callback)`                  | Shows HTML elements                                                                                                                                                                 |
| `j3.toggleShow(selector, callback)`            | Toggles between hiding and showing HTML elements                                                                                                                                    |
| `j3.toggleClass(selector, class, callback)`    | Toggles the class of HTML elements                                                                                                                                                  |
| `j3.addClass(selector, class, callback)`       | Adds one or multiple classes to HTML elements                                                                                                                                       |
| `j3.addStyle(selector, style, callback)`       | Adds style to HTML elements                                                                                                                                                         |
| `j3.removeClass(selector, class, callback)`    | Removes one or multiple classes from HTML elements                                                                                                                                  |
| `j3.filter(selector, value, callback)`         | Filters the display of HTML elements                                                                                                                                                |
| `j3.sort(selector, callback)`                  | Sorts the display of HTML elements                                                                                                                                                  |
| `j3.slideShow(selector, src, delay, callback)` | Make img element display as a slideshow                                                                                                                                             |
| `j3.displayObject(selector, object, callback)` | Displays JavaScript objects in HTML                                                                                                                                                 |
| `j3.getHttpObject(url, callback)`              | Reads JSON data from a server                                                                                                                                                       |
| `j3.get(url, callback)`                        | Reads data from a server using a `GET` request method                                                                                                                               |
| `j3.includeHTML(callback)`                     | Include HTML file directly shown in HTML elements, this can be done by using `data-include="sample.html"` attribute                                                                 |

## Complete J3.JS Attribute Reference

| Attribute             | Description                                    |
| :-------------------- | :--------------------------------------------- |
| `{ } `                | Defines as a placeholder where to display data |
| `data-repeat="data"`  | Defines where to repeat data                   |
| `data-include="path"` | Defines where to include HTML or file          |

# J3.JS Intro

## Adding J3.JS to Your Web Pages

J3.JS is very easy to use.\
Just add a link of J3.js in your web page:

Using a `CDN`:
```javascript
"https://cdn.jsdelivr.net/gh/aldrin112602/J3.JS/j3.js"
```

```javascript
<script src="https://cdn.jsdelivr.net/gh/aldrin112602/J3.JS/j3.js"></script>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- place J3.JS CDN here -->
    <script src="https://cdn.jsdelivr.net/gh/aldrin112602/J3.JS/j3.js"></script>
  </head>
  <body>
  
  </body>
</html>
```

Or download the `J3.JS` file and add link to the file

The J3.JS library is a single JavaScript file, and you reference it with the HTML `<script>` tag (notice that the `<script>` tag should be inside the `<head>` section):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- place J3.JS file here -->
    <script src="j3.js"></script>
  </head>
  <body>
  
  </body>
</html>
```

<b>Tip:</b> Place the downloaded file in the same directory as the pages where you wish to use it.

# Get started!

## J3.JS Selectors

- J3.JS selects HTML elements and perform actions on the selected element(s):\
  Are you familiar with CSS selectors?\
  J3.JS uses the CSS syntax to select and manipulate HTML elements.\
  Selectors are used to "find" (select) HTML elements based on their tag name, id, classes, types, attributes, values of attributes and much more. A list of all selectors can be found in our CSS Selector Reference.

Selector Examples:\
Select HTML elements, use a tag name:\
Hide all `<h2>` elements:

```javascript
j3.hide("h2");
```

Select an element with a specific id, write a hash character, followed by the id of the HTML element:\
Hide an element with `id="London"`:

```javascript
j3.hide("#London");
```

To select elements with a specific class, write a period character, followed by the name of the class:
Hide all elements with `class="city"`:

```javascript
j3.hide(".city");
```

### More Selector Examples

| Selector                | Description                                                                  |
| :---------------------- | :--------------------------------------------------------------------------- |
| `("*")`                 | Selects all elements in the document                                         |
| `(this)`                | Selects the current HTML element                                             |
| `("p.intro")`           | Selects all `<p>` elements with `class="intro"`                              |
| `("div p")`             | Selects all `<p>` element inside all `<div>` elements                        |
| `("div p:first-child")` | Selects the first `<p>` element inside all `<div>` elements                  |
| `("[href]")`            | Selects all elements with an `href=""` attribute                             |
| `("a[target=_blank]")`  | Selects all `<a>` elements with a target attribute value equal to `"_blank"` |
| `("p:nth-child(even)")` | Selects all even `<p>` elements                                              |

For a complete reference of all CSS selectors, please go to [CSS Selectors Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

## ready() function

- Use ready() to make a function available after the document is loaded. This event occurs after the document is ready, it is a good place to have all other J3 events and functions.

Syntax

```javascript
J3(document).ready(callback: Function)
```

Example:

```javascript
J3(document).ready(function () {
  // document ready!
  // Place all other J3 events and functions here
  console.log("Document ready!");
});
```

Full example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>index</title>
    <!-- J3.JS -->
    <script src="https://cdn.jsdelivr.net/gh/aldrin112602/J3.JS/j3.js"></script>
  </head>
  <body>
    <h1 id="myid">Welcome to J3.JS library</h1>
    <p id="myid">A libray designed to simplify web development projects</p>
    <script>
      J3(document).ready(function () {
        // document ready!
        // Place all other J3 events and functions here

        // Hide all elements with an ID of 'myid'
        j3.hide("#myid");
      });
    </script>
  </body>
</html>
```

## on() function

- Use to add an event to HTML elements

Syntax

```javascript
J3(selector: Any).on(event: Any, callback: Function);
```

Example:

```javascript
J3(document).ready(function () {
  // Add an 'onclick' event to all button inside the document
  J3("button").on("click", function () {
    alert("You click button");
  });
});
```

## J3.JS Hide & Show

Syntax:

```javascript
   j3.hide(selector: Any, callback: Function)
```

_Note that you can use any CSS selectors. `callback function` is optional, it will call after the action or event's occured._

- Hiding Elements Using Element Id
- To hide an element with a specified id, use a hash tag (#) in front of the id name.
- Hide an element with `id="london":`

Example:
`Without callback function`

```html
<button onclick="j3.hide('#london')">Hide</button>
```

`With callback function`

```html
<button onclick="j3.hide('#london', function () { alert('Hidden!') })">
  Hide
</button>
```

Full example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>j3.hide(selector) | J3.JS</title>

    <!-- J3.JS -->
    <script src="https://cdn.jsdelivr.net/gh/aldrin112602/J3.JS/j3.js"></script>
  </head>
  <body>
    <button onclick="j3.hide('#london')">
      Hide all element with an ID of london
    </button>
    <h1 id="london">Lorem ipsum dolor sit amet</h1>
    <h2>Lorem ipsum dolor sit amet.</h2>
    <butto id="london">My button</butto>
  </body>
</html>
```

- Hiding Elements Using Element `class`
- To hide an element with a specified class, use a hash tag (.) in front of the class name.
- Hide all elements with `class="london":`

```html
<button onclick="j3.hide('.london')">Hide</button>
```

- Hiding Elements Using Element `tag name`
- Hide all `<p>` elements:

```html
<button onclick="j3.hide('p')">Hide</button>
```

### J3.JS Add Style to HTML

```javascript
    // Syntax
   j3.addStyle(selector: Any, stye: Object | String, callback: Function)
```

- Note: callback function is optional, callback function will execute or being call after the event or action occured.

```javascript
// Example
j3.addStyle("h2", "color: red; font-size: 1rem;", function () {
  console.log("Added styles to all h2 element");
});
```

- Add multiple style properties using Object

```javascript
// Example
let style = {
  backgroundColor: "#fefefe",
  border: "1px solid rgba(0,0,0,0.1)",
  color: "dodgerblue",
};
// Apply styles to all button elements
j3.addStyle("button", style);
```

- Also you can add CSS properties using string:

```javascript
// Example
j3.add("p", "color: red; font-size: 20px;");
```
