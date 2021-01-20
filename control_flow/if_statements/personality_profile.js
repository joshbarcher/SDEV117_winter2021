//gather up user inputs
let breakfast = prompt("What did you have for breakfast?");
let exercised = confirm("Did you exercise this morning?");

//determine their personality
let personality;
if (breakfast === "fruit") //fruit is always the same output
{
    personality = "wise";
}
else if (breakfast === "cereal")
{
    if (exercised)
    {
        personality = "studious";
    }
    else
    {
        personality = "melodramatic";
    }
}
else if (breakfast === "pancakes")
{
    if (exercised)
    {
        personality = "studious";
    }
    else
    {
        personality = "melodramatic";
    }
}
else if (breakfast === "eggs")
{
    if (exercised)
    {
        personality = "studious";
    }
    else
    {
        personality = "melodramatic";
    }
}

if (breakfast === "fruit") //fruit is always the same output
{
    personality = "wise";
}
else if (exercised) //they exercised
{
    if (breakfast === "cereal")
    {
        personality = "studious";
    }
    else if (breakfast === "pancakes")
    {
        personality = "watchful";
    }
    else if (breakfast === "eggs")
    {
        personality = "silly";
    }
}
else //they did not exercise
{
    if (breakfast === "cereal")
    {
        personality = "melodramatic";
    }
    else if (breakfast === "pancakes")
    {
        personality = "unwise";
    }
    else if (breakfast === "eggs")
    {
        personality = "brave";
    }
}

if (breakfast === "fruit") //fruit is always the same output
{
    personality = "wise";
}
else if (breakfast === "cereal" && exercised)
{
    personality = "studious";
}
else if (breakfast === "pancakes" && exercised)
{
    personality = "watchful";
}
else if (breakfast === "eggs" && exercised)
{
    personality = "silly";
}
else if (breakfast === "cereal" && !exercised)
{
    personality = "melodramatic";
}
else if (breakfast === "pancakes" && !exercised)
{
    personality = "unwise";
}
else if (breakfast === "eggs" && !exercised)
{
    personality = "brave";
}

//show them their profile
console.log("Your are " + personality);