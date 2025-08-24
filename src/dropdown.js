export default function createDropdown() {
let dropDownArray  = document.querySelectorAll(".dropdown");
dropDownArray = Array.from(dropDownArray);
console.log(dropDownArray);


dropDownArray.map((dropdown) => {
    const dropDownButton = dropdown.querySelector(".dropdown-button");

    const dropDownWindow = dropdown.querySelector(".dropdown-items");
        dropDownWindow.style.display = "none";
        dropDownWindow.style.padding = "2rem";

        dropDownButton.addEventListener("mouseenter", () => {
            dropDownWindow.style.display = "flex";
            dropDownWindow.style.flexDirection = "column";
            dropDownWindow.style.gap = "1rem";
            dropDownWindow.style.position = "absolute";
            dropDownWindow.style.border = "2px solid black";
            dropDownWindow.style.backgroundColor = "#eee";

            dropDownWindow.addEventListener("mouseleave", () => {
                dropDownWindow.style.display = "none";
            })
    dropdown.addEventListener("mouseleave", () => {
        dropDownWindow.style.display = "none";
    })

})


})
// const dropDownButton = document.querySelector(".dropdown-button");
// const dropDownWindow = document.querySelector(".dropdown-items");

// dropDownArray.style.position = "relative";
// dropDownWindow.style.display = "none";

// dropDownWindow.style.paddingTop = "2rem";
// dropDownWindow.style.paddingBottom = "2rem";
// dropDownButton.addEventListener("mouseenter", () => {
//     dropDownWindow.style.display = "flex";
//     dropDownWindow.style.flexDirection = "column";
//     dropDownWindow.style.gap = "1rem";
//     dropDownWindow.style.position = "absolute";
// })

// dropDownWindow.addEventListener("mouseleave", () => {
//     dropDownWindow.style.display = "none";
// })
}

// Change selectors to child selectors .dropdown can stay, just
// make an Array of it

// Test by creating others