
console.log("testing testign 123");
// create variables that get elements by ids
const gdMornBtn = document.getElementById("gdmornbtn");
const gdMornDiv = document.getElementById("gdmorndiv");

// create a function with an if else

function goodMornFunc() {
    if (gdMornDiv.innerHTML === "") {
        gdMornDiv.innerHTML = `
        <div id="innermorndiv">
            <h2>Good morning!</h2>
        </div>
        `
        gdMornBtn.style.backgroundColor = "orange";
        gdMornBtn.style.color = "red";
        gdMornBtn.style.border = "solid 2px yellow";
    }

    else {
        gdMornDiv.innerHTML = ""
        gdMornBtn.style = "";

    }
};


gdMornBtn.addEventListener("click", goodMornFunc);