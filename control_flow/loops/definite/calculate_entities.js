//select the paragraph
let para = document.getElementById("symbols");

//add symbols to the paragraph
for (let i = 1; i <= 23000; i++)
{
    //print our HTML entities with the format &#num;
    para.innerHTML += "&#" + i + "; ";
}