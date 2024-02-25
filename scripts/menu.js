// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const navLinks = document.querySelectorAll('.nav-link');

// Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

// Add a click event listener to each navigation link and use a callback function that adds an active class to the clicked element.
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		navLinks.forEach(link => link.classList.remove('active'));
		link.classList.add('active');
	});
});

