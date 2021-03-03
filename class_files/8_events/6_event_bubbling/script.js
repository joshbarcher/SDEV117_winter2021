window.onload = function() {
    let elements = document.querySelectorAll(
        "div, section, p");
    for (let i = 0; i < elements.length; i++)
    {
        let element = elements[i];
        element.onclick = function(event) {
            //turn off event bubbling
            event.stopPropagation();

            //log the element that the event was fired upon
            console.log(element);

            element.style.backgroundColor = "beige";
        }
    }
}

