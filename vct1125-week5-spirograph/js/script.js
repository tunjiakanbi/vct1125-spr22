$(document).ready(function(){
let ellipse = $("#svg1>ellipse");
let colorText = $("#svg2>path");
console.log(colorText);
gsap.registerPlugin(GSDevTools, DrawSVGPlugin);

let tl1 = new gsap.timeline({
    id:"TL1"
});
tl1.from(ellipse,  {/*x:-10,*/opacity:0, stagger: 0.1, ease:  "slow(0.7, 0.7, false)"})
let tl2 = new gsap.timeline({
    id:"TL2"
});
tl2.from(colorText, {y:-10,opacity:0, stagger: 0.3, ease:"bounce.out"},"+=5",);
GSDevTools.create();
});