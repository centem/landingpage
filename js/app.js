
// get the html root element and modify the scroll-behavior 
document.documentElement.style.scrollBehavior = "smooth"

// create ul element
const ul = document.querySelector('#navbar__list');

// get number of section elements to determine how many navbar links needed
const sections = document.querySelectorAll('section');

// for each section that exists create a li and a element and append them to the nav ul
sections.forEach(function(e) {
    // create li and a elements to append to ul
    const li = document.createElement('li');
    const a = document.createElement('a');

    // add href and textContent to anchor element
    a.href = `#${e.id}`;

    // use a regex to get the number part of section id to add to text content
    a.textContent = 'Section ' + e.id.match(/(\d+)/)[0];

    // add navbar_link class that I will use in the for loop below
    li.appendChild(a);
    ul.appendChild(li);
});

// select all the anchor tags in the ul
const links = document.querySelectorAll('#navbar__list li a');

// code for adding and removing class for menu items and sections
for (let i = 0; i < sections.length; i++ ) {

    links[i].addEventListener('click', function() {
        // first remove active_link and active-section class from all a and section elements
        for (let j = 0; j < sections.length; j++) {
            links[j].classList.remove('active-link');
            sections[j].classList.remove('active-section');
        }
        // add active-link and active-section classes
        links[i].classList.add('active-link');
        sections[i].classList.add('active-section');
    });
};

// helper function for scroll window event listener
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
        return (
            distance.top >= 0 &&
            distance.left >= 0 &&
            distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            distance.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

// add event listener to window object for setting active classes
window.addEventListener('scroll', function (event) {
    for (let i = 0; i < sections.length; i++ ) {
        var section = document.querySelector(`#section${i+1} .landing__container`);
        let distance = section.getBoundingClientRect();
        if (isInViewport(section)) {
            //console.log(section.textContent);
            for (let j = 0; j < sections.length; j++) {
                links[j].classList.remove('active-link');
                sections[j].classList.remove('active-section');
            }
            // add active-link and active-section classes
            links[i].classList.add('active-link');
            sections[i].classList.add('active-section');
        }
    }
}, false);

function menu() {
    var menu = document.getElementById("navbar__list_2");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
}



