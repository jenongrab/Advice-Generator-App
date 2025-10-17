// 1. listen for mouse hover, add glow if hover
// a. check domloaded
// 2. listen for button press, if pressed, load API 


const button = document.getElementById("button");

button.addEventListener("mouseover", () => {
    button.classList.add("button-glow");
    
});

button.addEventListener("mouseout", () => {
    button.classList.remove("button-glow");
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

