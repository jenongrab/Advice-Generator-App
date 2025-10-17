// 1. listen for mouse hover, add glow if hover
// 2. listen for button press, if pressed, load API 

const button = document.getElementsById("button");

button.addEventListener("mouseover", () => {
    button.classList.add("button-glow");
    
});

button.addEventListener("mouseout", () => {
    button.classList.remove("button-glow");
});
