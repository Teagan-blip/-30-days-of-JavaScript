
// get the element by ID, Add event listener, Add function
 document.getElementById("excitingbtn").addEventListener("click", function(){
    alert("Whooooo! SO exciting!!!")
 });


//  Colour changing button ............................
//  create a varibale getting element by ID
 const MoreExcitBtn = document.getElementById("moreexcitingbtn")
 
//  create a fucntion that targets the variable
 function excitingChange(){
    MoreExcitBtn.style.backgroundColor = "pink";
    MoreExcitBtn.style.color = "blue";
 };

//  Add event listener
MoreExcitBtn .addEventListener("click", excitingChange);


// Colour changing button that turns on and off ....................
const OnOffBtn = document.getElementById("onoffbtn");

function OnOffFunction() {
    if (OnOffBtn.style.backgroundColor === "") 
        {
        OnOffBtn.style.backgroundColor = "salmon";
        OnOffBtn.style.color = "violet";
        }

    else {
        OnOffBtn.style.backgroundColor = "";
        OnOffBtn.style.color = "";
    }
};
// Add event listener
OnOffBtn.addEventListener("click", OnOffFunction);



// Button that changes the page's styling .............................

const extraExcBtn = document.getElementById("extraexcitbtn");
const wholeBody = document.body;

// make the function

function pageChange() {
    
    if (
        wholeBody.style.backgroundColor=== ""
    ) {
        wholeBody.style.backgroundColor = "teal";
        wholeBody.style.border = "dotted 4px yellow";
        wholeBody.style.display = "flex";
        wholeBody.style.justifyContent = "space-between";
        wholeBody.style.margin = "1rem";
        wholeBody.style.padding = "1rem";

        extraExcBtn.style.border = "solid 2px Red";
    }
    else {
        wholeBody.style = "";
        extraExcBtn.style = "";
    }
};

extraExcBtn.addEventListener("click", pageChange);


// A button that creates a pop-up

// get button by ID
const popUpBtn = document.getElementById("popupbtn");
const popUpDiv = document.getElementById("popupdiv");

function divPopUp() {
    popUpDiv.innerHTML = `
        <div id="boopop">
            <h2>Boo! I am a pop-up div</h2>
            <p>I was suommoned by the click of the button</p> 
        </div>
    `
};

popUpBtn.addEventListener("click", divPopUp);


// A button that creates an ON/OFF div

// get elements by ID
const excitePopBtn = document.getElementById("excitepopbtn");
const excitePopDiv = document.getElementById("excitepopdiv");

function partyDiv() {
if (excitePopDiv.innerHTML=== ""){
    excitePopDiv.innerHTML = `
    <div>
        <h2>Celebrate good times, c'mon!!!"
        <p>Wooo.  Party party party</p>
    </div>
    `
}
else {
    excitePopDiv.innerHTML = ""
}};

excitePopBtn.addEventListener("click", partyDiv);


// A button that creates a styled ON/OFF div

const ultExciteBtn = document.getElementById("ultexcitebtn");
const ultExciteDiv = document.getElementById("ultexcitediv");

function ultimateParty() {
    if (ultExciteDiv.innerHTML === "") {
        ultExciteDiv.innerHTML = `
        <div id="ultparty">
            <h2>We like to party!</h2>
            <p>Party</p>
            <p>Party</p>
            <p>Party</p>
            <p>!!!</p>
        </div>
        `
        ultparty.style.background = "linear-gradient(red, yellow)";
        ultparty.style.margin = "2rem";
        ultparty.style.padding = "2rem";
        ultparty.style.border = "dotted 5px green";
        ultparty.style.borderRadius = "30px";
        ultparty.style.display = "flex";
        ultparty.style.justifyContent = "space-between";

        ultparty.h2.style.color = "blue";

    }

    else {
        ultExciteDiv.innerHTML = "";
    }
};

ultExciteBtn.addEventListener("click", ultimateParty);
