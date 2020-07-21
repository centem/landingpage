
// get the html root element and modify the scroll-behavior 
document.documentElement.style.scrollBehavior = "smooth"

// create ul element
const ul = document.querySelector('#navbar__list');

// get number of section elements
const sectionCount = document.querySelectorAll('section').length;
console.log(sectionCount);

// for each section that exists create a li and a element and append them to the nav ul
for (let i = 1; i < sectionCount+1; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    // add href and textContent to anchor element
    a.href = `#section${i}`;
    a.textContent = `Section ${i}`;

    // add navbar_link class that I will use in the for loop below
    a.classList.add('navbar_link');
    li.appendChild(a);
    ul.appendChild(li);
}

// select all the li elements that have the .navbar_link
const links = document.querySelectorAll('.navbar_link');
const sections = document.querySelectorAll('section');


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        // first remove active_link class from all a elements
        for (let j = 0; j < links.length; j++) {
            links[j].classList.remove('active_link');
            sections[j].classList.remove('active-section');
        }
        // now add to this a element
        links[i].classList.add('active_link');
        document.querySelector(`#section${i+1}`).classList.add('active-section');
    })

    sections[i].addEventListener('scroll', function() {
        if (section[i].getBoundingClientRect() <= 150 && section[i] >= 150) {
            section[i].classList.add('active-section');
        } else {
            section[i].classList.remove('active-section');
        }
    })
}

function makeActive() {
    for (const section of sections) {
      const box = section.getBoundingClientRect();
      console.log(box);
      // You can play with the values in the "if" condition to further make it more accurate. 
      if (box.top <= 150 && box.bottom >= 150) {
        // Apply active state on the current section and the corresponding Nav link.
      } else {
        // Remove active state from other section and corresponding Nav link.
      }
    }
  }

  makeActive();



