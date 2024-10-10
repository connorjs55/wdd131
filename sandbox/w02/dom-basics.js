const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const picture = document.createElement("img");
picture.setAttribute("src", "https://picsum.photos/200");
picture.setAttribute("alt", "random image from picsum");
document.body.appendChild(picture);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section")
newSection.innerHTML = "<section><h2>DOM Basics</h2><p>This was added through Javascript</p></section>";
document.body.appendChild(newSection);
