const headertoggleButton = document.getElementById('headerToggleButton');
const headerResponsiveBarre = document.getElementById('headerResponsiveBarre');

headerToggleButton.addEventListener('click', show);

function show(){
    headerResponsiveBarre.classList.toggle('active');
}

gsap.from(".headerlogo", {duration: 1, scale: 6});
gsap.to(".headerlogo", {duration: 2, rotation: 360, scale: 5});
