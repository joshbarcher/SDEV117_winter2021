window.onload = function() {
    let button = document.querySelector("button");

    //add an event handler...
    button.onclick = loadDogPicture;
}

function loadDogPicture()
{
    //the fetch() call requires an address (URL) and
    //an object with connection properties (options)
    fetch("https://api.thedogapi.com/v1/images/search", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "2ef377a9-d455-487a-9aeb-cff4084eb779"
        }
    })
    .then(function(response) { //this function is called, when fetch() completes
        return response.json();
    })
    .then(function(json) {
        console.log(json);

        //show the dog image
        let url = json[0].url;
        let image = document.querySelector("img");
        image.setAttribute("src", url);
    });
}
