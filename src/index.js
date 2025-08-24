import "./styles.css";

import createDropdown from "./dropdown";

createDropdown();

// NOTES & PSEUDOCODE
// Create a node array of all items with the class of dropdown-menu
    // Only created IF there are items with that class created
    // This isn't needed because this module will on be installed if it's needed
// All items marked with dropdown-item will default to hidden
// On click of dropdown-menu its div child with dropdown-item will show
    // Shown as absolute to the relative of the button
// Event listener on item div mouseout will set style to hidden again
    // Make item div wide enough to not make it annoying
// Must be repeatable with several different "dropdown-menus"
    // Publish the module to npm for quicker use
