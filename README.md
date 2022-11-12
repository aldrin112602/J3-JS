# J3.JS - “ Less code, do More! 😎 ”
### J3.JS library
-JavaScript library designed to simplify web development projects:  Easy to learn and easy to use.  Designed for fast application development.  Designed for all devices: PC, Tablet, and Mobile, Free to use and No licenses.

### What Can J3.JS Do?
Below is a list of the some of the things J3.JS can do:

### Complete J3.JS API Reference
- `j3.hide(selector, callback)` - Hides HTML elements
- `j3.show(selector, callback)` - Shows HTML elements	
- `j3.toggleShow(selector, callback)` - Toggles between hiding and showing HTML elements	
- `j3.toggleClass(selector, class, callback)` - Toggles the class of HTML elements
- `j3.removeClass(selector, className: String | Array[ ...classnames ], callback)` - Removes one or multiple classes from HTML elements
- `j3.addClass(selector, className: String | [ ...classnames ], callback)` - Adds one or multiple classes to HTML elements	
- `j3.addStyle(selector, stye: { prop: value } | string, callback)` -	Adds style to HTML elements		
- `j3.filter(selector, value, callback)`	- Filters the display of HTML elements	
- `j3.sort(selector, value, callback)`	-	Sorts the display of HTML elements (A - Z, 0 - 9)	
- `j3.slideSHow(selector, [ ...srcs ], delay, callback)`	- Make image slideshow 
- `j3.displayObject(selector, object, callback)`	-	Displays JavaScript objects in HTML	
- `j3.includeHTML(callback)`	-	Displays HTML in HTML	
- `j3.getHttpObject(url, callback)`	-	Reads JSON data from a server	
- `j3.get(url, callback)` - Performed `GET` Request and	Reads data from a server
### Complete J3.JS Attribute Reference
- <code><i>{ }</i></code>	- Defines where to display data	
- <code><i>data-repeat="container"</i></code> -	Defines where to repeat data	
- <code><i>data-html="sample-text.txt"</i></code> -	Defines where to include HTML


## Adding J3.JS to Your Web Pages
There are only one ways to start using J3.JS on your web site:<br>
- Download the J3.JS file
- The J3.JS library is a single JavaScript file, and you reference it with the HTML <code><script></code> tag (notice that the <code><script></code> tag should be inside the <i>head</i> section) :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <!-- place J3.JS here -->
    <script src="j3.js"></script>
    
</head>
<body>
    
</body>
</html>
 ```

- <b>Tip:</b> Place the downloaded file in the same directory as the pages where you wish to use it.

# Get started!
### J3.JS Selectors
* J3.JS selects HTML elements and perform actions on the selected element(s):\
Are you familiar with CSS selectors?\
J3.JS uses the CSS syntax to select and manipulate HTML elements.\
Selectors are used to "find" (select) HTML elements based on their tag name, id, classes, types, attributes, values of attributes and much more. A list of all selectors can be found in our CSS Selector Reference.\

Selector Examples:\
Select HTML elements, use a tag name:\
Hide all `<h2>` elements:
```javascript
j3.hide('h2');
```
Select an element with a specific id, write a hash character, followed by the id of the HTML element:\
Hide an element with `id="London"`:
```javascript
j3.hide('#London');
```
To select elements with a specific class, write a period character, followed by the name of the class:
Hide all elements with `class="city"`:
```javascript
j3.hide('.city');
```

### More Selector Examples
| Selector  | Description  |
| :------------ |:----------------------------------------------------------------------|
| `("*")` | Selects all elements in the document |
| `(this)` | Selects the current HTML element |
| `("p.intro")` | Selects all `<p>` elements with `class="intro"` |
| `("div p")` |	Selects all `<p>` element inside all `<div>` elements |
| `("div p:first-child")`	| Selects the first `<p>` element inside all `<div>` elements |
| `("[href]")` |	Selects all elements with an `href=""` attribute |
| `("a[target=_blank]")` |	Selects all `<a>` elements with a target attribute value equal to `"_blank"` |
| `("p:nth-child(even)")` |	Selects all even `<p>` elements |

#### For a complete reference of all CSS selectors, please go to [CSS Selectors Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).


