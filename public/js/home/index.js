// Counters
const arbolesCount = document.querySelector('#trees-count')
const municipiosCount = document.querySelector('#towns-count')

fetch('http://localhost:3000/api/countMunicipios')
    .then(response => response.json())
    .then(data => {
      municipiosCount.innerHTML = data.total
    });

    fetch('http://localhost:3000/api/countArboles')
    .then(response => response.json())
    .then(data => {
      arbolesCount.innerHTML = data.total
    });

// Accordion

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}