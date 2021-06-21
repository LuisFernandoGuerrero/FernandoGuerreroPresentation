gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(EaselPlugin);

// Hi About me
var hiAboutMe = gsap.timeline({
    scrollTrigger: {
        trigger: '.contenedor-header',
        start: "0 top",
        end: "26.5% 0",
        scrub: 1,
    }
});

// information animation
hiAboutMe.from('.about-me', {
    xPercent: -150,
    opacity: 0
});
hiAboutMe.to('.about-me', {
    x: 0,
    opacity: 1,
    duration: 3
});

// image animation
hiAboutMe.from('.image', {
    opacity: 0,
    duration: 5
}, '-=5');
hiAboutMe.to('.image', {
    opacity: 1,
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bye about me
var byeAboutMe = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: "100% top",
        end: "+=100 0",
        scrub: 1,
    }
});

// information animation
byeAboutMe.from('.about-me', {
    x: 0,
    opacity: 1
});
byeAboutMe.to('.about-me', {
    xPercent: -150,
    opacity: 0,
    duration: 3
});

// image animation
byeAboutMe.from('.image', {
    opacity: 1,
    duration: 5
});
byeAboutMe.to('.image', {
    opacity: 0
});

// Hello Skills 
var hiSkills = gsap.timeline({
    scrollTrigger: {
        trigger: '.about-me',
        start: "0 top",
        end: "100% 0",
        scrub: 1,
    }
});

hiSkills.from('.skill', {
    x: -1000,
    opacity: 0
});
hiSkills.to('.skill', {
    x: 0,
    opacity: 1
});

// Bye Skills 
var byeSkills = gsap.timeline({
    scrollTrigger: {
        trigger: '.skills',
        start: "100% top",
        end: "+=100 0",
        scrub: 1,
    }
});

byeSkills.from('.skill', {
    x: 0,
    opacity: 1,
    duration: 5
});
byeSkills.to('.skill', {
    x: -1000,
    opacity: 0,
    duration: 5
});

// Hi Projects 

var hiPortfolio = gsap.timeline({
    scrollTrigger: {
        trigger: '.contenedorPortpolio',
        start: '-200 top',
        end: '0 0',
        scrub: 1
    }
});

hiPortfolio.from('.contenedorPortpolio', {duration: 0.4, opacity: 0})
hiPortfolio.from(".trabajo", {opacity: 0, y:160, stagger:.3, duration: 2, ease:"elastic"})

var hiContact = gsap.timeline({
    scrollTrigger: {
        trigger: '.contenedorPortpolio',
        start: '100% 50%',
        end: '150% 50%',
        scrub: 1
    }
})
hiContact.from('.contenedorContacto', {duration: 0.4, opacity: 0})
hiContact.from(".red", {opacity: 0, y:160, stagger:1, duration:25, ease:"elastic"})



var hiFooter = gsap.timeline({
    scrollTrigger: {
        trigger: '.contenedorFooter',
        start: '0 100%',
        end: '100% 100%',
        scrub: 1
    }
})
hiFooter.from('.contenedorFooter', {duration: 3, opacity: 0})
hiFooter.from(".boton-footer", {opacity: 0, stagger:1, duration: 5, ease:"back"})
