
// get slider item | Array.from
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// get number of slides
var sliderCount = sliderImages.length;

// set current Slide (deault)
var currentSlide = 1;

// slide number element
var slideNumberElement = document.getElementById("slide-number");

// previous and next button
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

// create the main ul element
var paginationElement  = document.createElement("ul");

// set id in created element ul
paginationElement.setAttribute("id", "pagination-ul");

// craete list Item based on slides count
for (var i = 1; i <= sliderImages.length; i++) {

  // craete li
  var paginationItem = document.createElement("li");

  // set the attribute
  paginationItem.setAttribute("data-index", i);

  // set item content
  paginationItem.appendChild(document.createTextNode(i));

   // append item to the main ul
  paginationElement.appendChild(paginationItem);

}

// add the created ul element to the page
document.getElementById('indicators').appendChild(paginationElement);

// get the new created ul
var paginationCreatedUl = document.getElementById("pagination-ul");

// get pagination-ul item | array.from()
var paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

console.log(paginationsBullets);

// loop througth all bullet item
for (var i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    thechecker();
  }
}

// trigger slide function
thechecker();

// next slide function
function nextSlide() {

    if (nextButton.classList.contains("disabled")) {
      return false;
    }else {
      currentSlide++;
      thechecker();
    }
}

// prev slide function
function prevSlide() {

   if (prevButton.classList.contains("disabled")) {
     return false;
   } else {
     currentSlide--;
     thechecker();
   }
}

// Handle click on prev and next button
nextButton.addEventListener("click", nextSlide);
prevButton.onclick = prevSlide;

// created the checker function
function thechecker() {
  // set the slide number
  slideNumberElement.textContent = "SLide #" + " " + (currentSlide) + " " + "from" + " " + (sliderCount);

  // remove all active classes
  removeAllActive();

  // set active class on current slide
  sliderImages[currentSlide - 1 ].classList.add("active");

  // set active class on the pagination item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // check if current slide is the first
  if (currentSlide == 1) {
    // add disabled class on the prev button
    prevButton.classList.add("disabled");
  }
  else {
    prevButton.classList.remove("disabled");
  }

  // if current slide is the last
  if (currentSlide == sliderCount) {
    // add disabled class on the next button
   nextButton.classList.add("disabled");
  }
  else {
    // remove disabled class on the next button
    nextButton.classList.remove("disabled");
   }
};


// remove all active classes
function removeAllActive() {

  // loop througth images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  // loop througth bullets
  paginationsBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
