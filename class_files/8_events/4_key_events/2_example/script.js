//wait for the page to load...
window.onload = function() {
    let input = document.getElementById("name");
    input.onkeypress = function(event) {
        event.preventDefault(); //stop regular key entry

        //prevent users from entering numbers
        let numericDigits = "0123456789";
        let specialSymbols = "~!@#$%^&*()_+`-=[]{}|/?,.<>;':\"\\";

        //convert the input to lowercase and manually add to the textbox
        let key = event.key;

        //detect if the key is a substring of numericDigits
        if (!numericDigits.includes(key) &&
            !specialSymbols.includes(key))
        {
            key = key.toLowerCase();
            input.value += key;
        }
    };
};