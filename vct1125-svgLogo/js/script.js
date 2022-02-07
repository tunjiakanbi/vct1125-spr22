$(document).ready(function(){


gsap.registerPlugin(GSDevTools, DrawSVGPlugin);
const b_circle = $('.b-circle');
const text = $('.text');
const s_circle = $('.s-circle');
const w_line = $('.w-line');
// const b_circle = document.querySelector('.b-circle');
// const text = document.querySelectorAll('.text');
// const s_circle = document.querySelectorAll('.s-circle');
// const w_line = document.querySelector('.w-line');

console.log(b_circle);
console.log(s_circle);
console.log(w_line);

let tl = new gsap.timeline();
// tl.fromTo(b_circle, 4, {drawSVG: "0%"}, {drawSVG:"100%"});
tl.fromTo(b_circle, 6, {drawSVG: "0%"}, {drawSVG:"100%", ease:Bounce.easeOut});
tl.fromTo(b_circle, 4, {fill:"none"}, {fill:"#000782", ease: Power3.easeInOut}, "-=3");
// tl.fromTo(text, 2, {drawSVG: "0%"}, {drawSVG: "100%"});
tl.fromTo(text, {drawSVG: "0%"}, {drawSVG: "100%", stagger:0.3, ease:Power3.easeOut},"-=2");//negative delay value means start sooner
// tl.fromTo(b_circle, 2, {drawSVG: "0% 0%"},{drawSVG:"100% 0%"});
tl.fromTo(s_circle, {opacity: 0, drawSVG: "0%"}, {drawSVG: "100%",opacity:1, stagger: 0.3});

// tl.set(w_line, {stroke:"#fff", strokeWidth: 2});
tl.fromTo(w_line, 3, {width:"20%" ,y: 20, opacity: 0, drawSVG: "0%"}, {width: "55%",y:0, opacity:1, drawSVG:"100%"});

});