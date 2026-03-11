const startDate = new Date("2025-03-16 00:00:00").getTime();

function updateTimer(){

const now = new Date().getTime();
const diff = now - startDate;

const days = Math.floor(diff/(1000*60*60*24));
const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((diff%(1000*60*60))/(1000*60));
const seconds = Math.floor((diff%(1000*60))/1000);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

}

setInterval(updateTimer,1000);


const text = "Anniversary";
let i = 0;

function typingEffect(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typingEffect,100);

}

}

typingEffect();


let index = 0;

function autoSlide(){

const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

index++;

if(index >= totalSlides){
index = 0;
}

slides.style.transform = `translateX(-${index * 100}%)`;

}

setInterval(autoSlide,3000);