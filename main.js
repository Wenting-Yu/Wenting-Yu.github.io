//spinwheel
let container = document.querySelector(".container");
let btn = document.getElementById("spin");

function spinFunction() {
    degree = Math.floor(Math.random() * 10000);
    container.style.transform = `rotate(${degree}deg)`;
}
//portfolio modal slideshow
function openModalb() {
    document.getElementById("bambooModal").style.display = "block";
}
function closeModalb() {
    document.getElementById("bambooModal").style.display = "none";
}
function openModali() {
    document.getElementById("icelandModal").style.display = "block";
}
function closeModali() {
    document.getElementById("icelandModal").style.display = "none";
}
function openModalh() {
    document.getElementById("honrModal").style.display = "block";
}
function closeModalh() {
    document.getElementById("honrModal").style.display = "none";
}
function openModalg() {
    document.getElementById("gradModal").style.display = "block";
}
function closeModalg() {
    document.getElementById("gradModal").style.display = "none";
}
function openModalp() {
    document.getElementById("photoshopModal").style.display = "block";
}
function closeModalp() {
    document.getElementById("photoshopModal").style.display = "none";
}
function openModalil() {
    document.getElementById("illustratorModal").style.display = "block";
}
function closeModalil() {
    document.getElementById("illustratorModal").style.display = "none";
}
function openModalin() {
    document.getElementById("indesignModal").style.display = "block";
}
function closeModalin() {
    document.getElementById("indesignModal").style.display = "none";
}