//select all headings
let headings = document.getElementsByTagName("h1");

for (let i = 0; i < headings.length; i++)
{
    headings[i].classList.add("highlight");
}

//select just the article heading and add another class to it
let articleHeading = document.querySelector("article h1");
articleHeading.classList.add("title");
articleHeading.classList.add("important");

//you can also remove classes!
articleHeading.classList.remove("important");

//alternatively you can use the className property
articleHeading.className = "highlight";
