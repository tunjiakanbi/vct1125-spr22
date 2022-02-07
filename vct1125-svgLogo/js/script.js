// $(document).ready(function(){


gsap.registerPlugin(GSDevTools, DrawSVGPlugin);
// const b_circle = $('.b-circle');
// const text = $('.text');
// const s_circle = $('.s-circle');
// const w_line = $('.w-line');
const b_circle = document.querySelector('.b-circle');
const text = document.querySelectorAll('.text');
const s_circle = document.querySelectorAll('.s-circle');
const w_line = document.querySelector('.w-line');

// gsap.fromTo(b_circle, 2,{ y:100, opacity: 0 }, { y:0, opacity: 1 });

// console.log(b_circle);
console.log(text);
// console.log(s_circle);
// console.log(w_line);

let tl = new gsap.timeline({
    id:"myAnim"
});

// tl.fromTo(b_circle, 4, {drawSVG: "0%"}, {drawSVG:"100%"});
// tl.fromTo(b_circle, 6, {drawSVG: "0%"}, {drawSVG:"100%", ease:Bounce.easeOut});
tl.fromTo(b_circle, 4, { strokeWidth:1,drawSVG: "0%"}, {strokeWidth: 8,drawSVG:"100%", ease:"back.out(1.7)"});
tl.fromTo(b_circle, 4, {fill:"none"}, {fill:"#000782", ease: Power3.easeInOut}, "-=2");
// tl.fromTo(text, 3, {drawSVG: "0%"}, {drawSVG: "100%"},"-=4");
tl.fromTo(text, 3, {scale:0.75,fill: "none",drawSVG: "0%"}, {scale:1,fill:"blue",drawSVG: "100%", stagger:0.3, ease:Power3.easeOut},"-=4");//negative delay value means start sooner
// tl.fromTo(b_circle, 2, {drawSVG: "0% 0%"},{drawSVG:"100% 0%"});
tl.fromTo(s_circle, {strokeWidth: "18px",opacity: 0, drawSVG: "0%"}, {strokeWidth:"3px", opacity:1,drawSVG: "100%", stagger: 0.3}, "-=3");
// tl.fromTo(text, {fill: "none"},{fill:"blue", stagger:0.3}, "-=2");
tl.to(text, 2, {fill:"white"})
// tl.set(w_line, {sttlroke:"#fff"})
// tl.fromTo(w_line, 3, {width:"20%" ,y: 20, opacity: 0, drawSVG: "0%"}, {width: "55%",y:0, opacity:1, drawSVG:"100%"});
tl.fromTo(w_line, 0.5, {y:"20px",opacity: 0}, {y:"0px",opacity: 1},"-=2")
// });

// GSDevTools.create({animation: tl});
GSDevTools.create();