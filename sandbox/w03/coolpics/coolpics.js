const menuButton = document.querySelector(".menu-button"); // Select the menu button

// Define a function to toggle the menu visibility
function toggleMenu() {
    const menu = document.querySelector(".menu"); // Select the menu container
    menu.classList.toggle("hide"); // Toggle the "hide" class on the menu container
}

// Add an event listener to the menu button to run the toggleMenu function on click
menuButton.addEventListener("click", toggleMenu);


// Define the handleResize function to check the window's width
function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide"); // Show menu if the width is greater than 1000px
    } else {
        menu.classList.add("hide"); // Hide menu if the width is less than or equal to 1000px
    }
}

// Call handleResize immediately to set the initial state on page load
handleResize();

// Add an event listener to the window to handle resizing
window.addEventListener("resize", handleResize);

// Add an event listener to the menu button to toggle the menu visibility
// menuButton.addEventListener("click", toggleMenu);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
        </div>`;
}

/* <div class="viewer">
<button class="close-viewer">X</button>
<img src="image.jpeg" alt="alt description">
</div> */

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
    if (clickedElement.tagName !== "IMG") return; // Exit the function if it's not an image

    // get the src attribute from that element and 'split' it on the "-"
    const srcParts = clickedElement.src.split("-");

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const fullImageSrc = `${srcParts[0]}-full.jpeg`;
    const viewerHTML = viewerTemplate(fullImageSrc, clickedElement.alt);

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

// Define the closeViewer function to remove the viewer from the DOM
function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

// Attach the viewHandler to the gallery images
const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach(image => {
    image.addEventListener("click", viewHandler);
});