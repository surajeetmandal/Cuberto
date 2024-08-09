Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", { images: ["image1.jpg", "image2.jpg", "image3.jpg"] });

gsap.to(".fleftelem",
    {
        scrollTrigger: {
            trigger: "#fimages",
            pin: true,
            start: "top top",
            end: "bottom bottom",
            endTrigger: ".last",
            scrub: 1
        },
        y: "-300%",
        ease: Power1
    });

let sections = document.querySelectorAll(".fleftelem");

Shery.imageEffect(".images", {
    style: 5,
    config: { onmouse: { value: 1 } },
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress+index);
                },
            });
        });
    },
});