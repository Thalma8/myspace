$(function(){
    // Init the image gallery
    var $gallery = $(".tm-gallery").isotope({
      itemSelector: ".tm-gallery-item",
      layoutMode: "fitRows"
    });

    // Layout Isotope after each image loads
    $gallery.imagesLoaded().progress(function() {
      $gallery.isotope("layout");
    });

    $(".filters-button-group").on("click", "a", function(e) {
        e.preventDefault();
      var filterValue = $(this).attr("data-filter");
      $gallery.isotope({ filter: filterValue });
      $('.filters-button-group a').removeClass('active');
      $(this).addClass('active');
  });

    // Magnific Pop up
    $('.tm-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: { enabled: true }
  });
});
function typeEffect(element, speed) {
const text = element.textContent;
element.textContent = "";

let i = 0;
const timer = setInterval(function () {
if (i < text.length) {
if (text.charAt(i) === "@") {
// If the character is "@" symbol, create a link
const link = document.createElement("a");
link.href = "https://example.com"; // Replace with the appropriate URL
link.textContent = "Link Text"; // Replace with the desired link text
element.appendChild(link);
} else {
// If not "@" symbol, add the character as normal
element.textContent += text.charAt(i);
}
i++;
} else {
clearInterval(timer);
}
}, speed);

// Show the element after typing animation begins
element.style.visibility = "visible";
}

window.onload = function () {
const divToType = document.querySelector(".tm-site-header");
divToType.style.visibility = "hidden"; // Hide the element initially
typeEffect(divToType, 70); // Adjust the speed as desired (in milliseconds)
};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click",() =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active")

})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=> {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


))
