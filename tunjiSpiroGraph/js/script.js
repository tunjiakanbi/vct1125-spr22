$(function () {
    var ellipses = [$("div>svg>g>ellipse")];
    //console.log(ellipses);
    ellipses.forEach((x) => {
        gsap.fromTo(x, {
            opacity: 0
        }, {
            opacity: 0.25,
            duration: 2,
            stagger: 0.1,
            ease: "power4.Out",
            delay: 3
        })

    });
    GSDevTools.create();
});