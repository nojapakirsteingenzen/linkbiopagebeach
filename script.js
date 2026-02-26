document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".link-card");

cards.forEach((card, index) => {

card.style.opacity = "0";
card.style.transform = "translateY(30px) scale(0.95)";

setTimeout(()=>{

card.style.transition="all 0.4s ease";

card.style.opacity="1";
card.style.transform="translateY(0) scale(1)";

}, index*120);

});

});
function copyLink(){

navigator.clipboard.writeText(window.location.href);

alert("Link copied!");

}