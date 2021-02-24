addHighlightedItem("Coconut Milk");
addItem("Fried Onions");
addItem("Biryani Masala");

function addItem(text)
{
    //1. create the element
    let li = document.createElement("li"); //essentially <li></li>

    //2. prepare it for the DOM
    li.textContent = text;

    //3. add to the DOM
    let list = document.querySelector("ul");
    list.appendChild(li);
}

function addHighlightedItem(text)
{
    //1. create the element
    let li = document.createElement("li"); //essentially <li></li>

    //2. prepare it for the DOM
    li.textContent = text;
    li.style.backgroundColor = "yellow";
    li.style.textDecoration = "underline";

    //3. add to the DOM
    let list = document.querySelector("ul");
    list.appendChild(li);
}