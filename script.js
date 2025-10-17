// 1. listen for mouse hover, add glow if hover
// a. DOMLOAD not needed
// 2. listen for button press, if pressed, load API 

const adviceText = document.getElementById("quote"); 
const adviceId = document.getElementById("adviceId");

const button = document.getElementById("button");

button.addEventListener("mouseover", () => {
    button.classList.add("button-glow");
    
});

button.addEventListener("mouseout", () => {
    button.classList.remove("button-glow");
});

button.addEventListener("click", () => {
    // connect to api thru request here
    fetch ("https://api.adviceslip.com/advice", {
        // GET method is default
        method: "GET",
        // HEADER tells the server what kind of data you're sending (formatted)
        // headers: {
        //     "Content-Type": "application/json"
        //   },
        // BODY tells server the actual data turned intpo a json string
        //  body: JSON.stringify({
        //  name: "John Doe",
        //  age: 30
        //   })
    }) 
    // fetch(...) makes the HTTP request and returns a Response object.
    // .then(response => response.json()) turns that response into a JavaScript object by parsing the JSON.
    // The result of response.json() is passed into the next .then().
    // That next function receives it as a parameter — and in our case, we named that parameter data.
    //
    .then(response => response.json()) 
    .then(data => {
        const id = data.slip.id;
        const advice = data.slip.advice;


        console.log(`Advice #${adviceId}: ${adviceText}`);

        if(adviceId){
            adviceId.textContent = `Advice #${id}`;

        }

        if(adviceText) {
            adviceText.textContent = `${advice}`; 
        }
        

    })

    .catch(error => {
        console.error("Error fetching advice:", error);
      });
  });




//   window.addEventListener("DOMContentLoaded", () => {
//     const button = document.getElementById("button");

//     if (button) {
//       button.addEventListener("mouseover", () => {
//         button.classList.add("button-glow");
//         console.log("hovered");
//       });

//       button.addEventListener("mouseout", () => {
//         button.classList.remove("button-glow");
//       });
//     } else {
//       console.error("Button with id='button' not found");
//     }
//   });

