let myHeading = document.querySelector("h1");
let mySecondHeading = document.querySelector("h6");
let myButton = document.querySelector("button");

function setUserName(){
    const MyName = prompt("Please enter your name: ");
    localStorage.setItem("name", MyName);

    if (!localStorage.getItem("name")) {
        mySecondHeading.textContent= `Mozilla is not cool, ${MyName}`;
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
    }
}

myButton.onclick = () =>
{
    setUserName();
}