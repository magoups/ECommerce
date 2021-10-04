const headertoggleButton = document.getElementById('headerToggleButton');
const headerResponsiveBarre = document.getElementById('headerResponsiveBarre');

headerToggleButton.addEventListener('click', show);

function show(){
    headerResponsiveBarre.classList.toggle('active');
}