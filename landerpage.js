
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}


window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
const images = document.querySelectorAll('.images .img');


let currentIndex = 0;


function selectImage(index) {
    currentIndex = index;
    updateSelected();
}

function updateSelected() {
    images.forEach((img, index) => {
        if (index === currentIndex) {
            img.classList.add('selected');
        } else {
            img.classList.remove('selected');
        }
    });
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateSelected();
}


function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateSelected();
}


updateSelected();
