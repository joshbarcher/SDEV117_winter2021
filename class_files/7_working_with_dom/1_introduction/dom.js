//select a group of elements on the page
let elements = document.querySelectorAll("aside.more-info p");

//loop over all our elements and change them
for (let i = 0; i < elements.length; i++)
{
    //get one element in the NodeList
    let element = elements[i];

    //change it
    let number = Math.random() * 100;
    element.innerHTML = "Number: " + number;
}

//change the CSS for article elements
let articles = document.querySelectorAll("article");

for (let i = 0; i < articles.length; i++)
{
    /*articles[i].style.border = "2px solid darkblue";
    articles[i].style.margin = "10px";
    articles[i].style.padding = "10px 20px";
    articles[i].style.backgroundColor = "lightblue";*/

    articles[i].className = "interesting";
}















