window.addEventListener("load", (event) => {
  var elem = document.querySelector(".main-carousel");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "center",
    contain: true,
    wrapAround: true,
    selectedAttraction: 0.01,
    friction: 0.15,
    pageDots: false,
    prevNextButtons: false,
  });

  // Custom previous and next buttons
  var previousButton = document.querySelector(".previous-button");
  previousButton.addEventListener("click", function () {
    flkty.previous();
  });

  var nextButton = document.querySelector(".next-button");
  nextButton.addEventListener("click", function () {
    flkty.next();
  });

  // Adding classes to the project shown to change the background color
  flkty.on("change", function (index) {
    console.log("Flickity change " + index);

    let indexClass = "index-" + index;

    let element = document.getElementsByClassName("main-carousel")[0];
    element.classList.remove("index-0");
    element.classList.remove("index-1");
    element.classList.remove("index-2");

    element.classList.add(indexClass);
  });

  // Project information
  // Set the info in the data attr

  var client = document.querySelector(".client");

  flkty.on("select", function () {
    client.textContent = $(flkty.selectedElement).attr("data-client");
  });

  var project = document.querySelector(".project");

  flkty.on("select", function () {
    project.textContent = $(flkty.selectedElement).attr("data-project");
  });

  var year = document.querySelector(".year");

  flkty.on("select", function () {
    year.textContent = $(flkty.selectedElement).attr("data-year");
  });

  var number = document.querySelector(".number");

  flkty.on("select", function () {
    number.textContent = $(flkty.selectedElement).attr("data-number");
  });

  var link = document.querySelector(".project-link");

  flkty.on("select", function () {
    link.href = $(flkty.selectedElement).attr("data-link");
  });
});
