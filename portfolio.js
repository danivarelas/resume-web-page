var section = document.getElementById("AboutMe");
section.style.display = "block";
var slideIndex = 1;
showSlide(slideIndex);
addAccordionListeners();

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    var i;
    var x = document.getElementsByClassName("image-container");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    } ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

function addAccordionListeners() {
    var accordion = document.getElementsByClassName("accordion");
    for (var i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function() {
            this.classList.toggle("open");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

function openSection(sectionName) {
    var i;
    var x = document.getElementsByClassName("cv-section");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var buttons = document.getElementsByClassName("nav-button");
    for (i = 0; i < x.length; i++) {
        buttons[i].classList.remove("active");
    }
    var active = document.getElementById(sectionName);
    var activeButton = document.getElementById("Btn" + sectionName);
    active.style.display = "block";
    activeButton.classList.add("active");
}
