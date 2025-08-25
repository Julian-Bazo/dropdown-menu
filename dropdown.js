export default function createDropdown() {
let dropDownArray  = document.querySelectorAll(".dropdown");
dropDownArray = Array.from(dropDownArray);

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
})};


// PROPER CLASS SETUP

//    <div class="container">
//         <div class="dropdown">
//             <button class="dropdown-button">Hover me!</button>
//                 <div class="dropdown-items">
//                     <button>Edit</button>
//                     <button>Copy</button>
//                     <button>Delete</button>
//                 </div>
//         </div>
