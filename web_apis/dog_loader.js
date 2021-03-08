//load the breed images on page load
window.onload = function() {
    //request breeds, load them in the function below
    fetch("https://api.thedogapi.com/v1/breeds", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "2ef377a9-d455-487a-9aeb-cff4084eb779"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(loadBreedImages);
};

function loadBreedImages(data)
{
    console.log(data);

    for (let i = 0; i < data.length; i++)
    {
        let breed = data[i];

        //create a section element with nested image and paragraph
        let section = document.createElement("section");
        let image = document.createElement("img");
        let paragraph = document.createElement("p");

        //create content in elements
        image.setAttribute("src", breed.image.url);
        image.setAttribute("alt", "A dog picture");
        paragraph.textContent = breed.name;

        //assemble in the dom
        section.appendChild(image);
        section.appendChild(paragraph);
        document.body.appendChild(section);
    }
}











