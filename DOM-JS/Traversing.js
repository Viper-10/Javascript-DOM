/* querySelectorAll, getElementsByClassName, getElementsByTagName return a HTML collection or  a Node List

Traversing these lists are different and can be seen in "MultipleQuerySelector.js" File. 


This file is about traversing them in a different way.  */

/* 
HTML collection/node list and node/element

Node = every single thing in HTML is node => that means if you have for example <li class=list-item> some text </li> you have 3 nodes: li, class declaration and the text inside li.

Element = only nodes which have the element tag(HTML elements) => every single one of html tags (a, div, ul, ol, section etc.)

For example <li class=list-item> some text </li> you have only one element which you can select via its tagname or classname

child node is node that is a level below the targeted element or node(nested nodes are child to the parent)

<li class=list-item> some text </li> 

In this case, class is at the same level as li and hence it's not a child node. Text is nested, so the text is a childnode to li. 

In other words every element is a node but not all nodes are elements.

HTML collection = object which has some key:pair vallues => you can't use foreach.(Regular Looping (for let i = 0; i < collection_name.length; ++i) is possible in HTML collection as well.)

To use forEach on HTML collection, we've to convert the HTML collection to arrays using let variable_name = Arrays.from(collection_name)


NodeList somewhat similar to array. forEach can be used no NodeList directly without converting tthem to regular array*/


let val; 

const unorderedList = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')

// console.log(listItem)
// console.log(unorderedList)

// // Only returns the HTML elements under the unordered lists. 
// val = unorderedList.children

// val = listItem.children

// // returns the HTML elements and texts(all the nodes) as well. 
// val = unorderedList.childNodes
// // NODE TYPES 
// // 1 - element 
// // 2 - attribute (deprecated)
// // 3 - Text Node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype 


// val = unorderedList.children[1];

// val = unorderedList.children[1].textContent = 'hello world'

// console.log(unorderedList.children[1].className)
// console.log(val)

val = unorderedList.firstChild;
val = unorderedList.firstElementChild;

val = unorderedList.lastChild;
val = unorderedList.lastElementChild;

val = unorderedList.parentElement;
val = unorderedList.parentNode;

val = listItem.parentElement; 
val = listItem.parentNode;


val = listItem.nextSibling;
val = listItem.nextElementSibling;

// will be null because here listItem is the first element, so there is no previous element. 
val = listItem.previousElementSibling; 

console.log(val)
