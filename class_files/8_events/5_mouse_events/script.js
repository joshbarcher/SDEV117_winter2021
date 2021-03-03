window.onload = function() {
    //when you click on the image, move it randomly
    let img = document.querySelector("img");
    img.onmousedown = function(event) {
        //stop event bubbling please :(
        event.stopPropagation();

        console.log("Mouse pressed on img");

        //pick a random position in [0, 600)
        let randomX = Math.random() * 500;
        let randomY = Math.random() * 500;

        img.style.left = randomX + "px";
        img.style.top = randomY + "px";
    };

    //when you click on the background, move the image to the location
    let div = document.getElementById("container");
    div.onmousedown = function(event) {
        //debug trace statements...
        console.log("Mouse pressed on div");
        console.log(event.pageX + ", " + event.pageY);

        const REGION_SIZE = 600;
        const HALF_THE_TARGET = 50;
        const PAGE_MARGIN = 30;

        //move the image only if within the container limits
        if (event.pageX <= (PAGE_MARGIN + REGION_SIZE - HALF_THE_TARGET) &&
            event.pageY <= (PAGE_MARGIN + REGION_SIZE - HALF_THE_TARGET) &&
            event.pageX >= PAGE_MARGIN + HALF_THE_TARGET &&
            event.pageY >= PAGE_MARGIN + HALF_THE_TARGET)
        {
            let x = event.pageX - HALF_THE_TARGET;
            let y = event.pageY - HALF_THE_TARGET;

            //change the position of the image to the mouse position
            img.style.left = x + "px";
            img.style.top = y + "px";
        }
    };
};










