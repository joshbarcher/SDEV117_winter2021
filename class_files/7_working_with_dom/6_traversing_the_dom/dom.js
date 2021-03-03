// ******************* parent elements *******************

let h1 = document.querySelector("h1");
let body = h1.parentElement;

//set some style properties on the parent
body.style.backgroundColor = "lightpink";

//a shorter version...
let aside = document.querySelector(".list").parentElement;
aside.style.border = "2px solid darkred";

//highlight paragraphs with quotes
let paragraphs = document.querySelectorAll("span.quote");
for (let i = 0; i < paragraphs.length; i++)
{
    paragraphs[i].parentElement.style.backgroundColor = "lightblue";
}

// ******************* child elements *******************
let list = document.querySelector("ol.list");
let items = list.children;

for (let i = 0; i < items.length; i++)
{
    if (items[i].classList.contains("other"))
    {
        items[i].style.backgroundColor = "white";
    }
    else
    {
        items[i].style.backgroundColor = "lightgray";
    }
}

let button = document.querySelector("button");
button.onclick = function(event) {
    //our code goes here...
    let name = prompt("Enter your name");
    let email = prompt("Enter your email");
    let phone = prompt("Enter your phone number");

    //create DOM elements for a new row in the table
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdPhone = document.createElement("td");

    //update those DOM elements with text values
    tdName.textContent = name;
    tdEmail.textContent = email;
    tdPhone.textContent = phone;

    //add all elements to the DOM
    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPhone);

    let tbody = document.querySelector("table#contact_table tbody");
    tbody.appendChild(tr);
};










