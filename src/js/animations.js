gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(EaselPlugin);

// Welcome 
gsap.timeline()
    .from('.contenedorHeader', {duration: 1, opacity: 0})
    .from('.testimonial', {opacity: 0, scale: 0, ease: "back", delay: 0.1});

// About me

var hiAboutInf = gsap.timeline({scrollTrigger: {trigger: '.about-me', start: '-40% 50%', end: '40% 50%', scrub: 1}, duration: 1});
hiAboutInf.from('.about-me', {x: -5000, xPercent: -1000, duration: 2});
hiAboutInf.to('.about-me', {xPercent: 0});
// var hiAboutImg = gsap.timeline({scrollTrigger: {trigger: '.image', start: '-40% 50%', end: '40% 50%', scrub: 1},duration: 1});
// hiAboutImg.from('.image-me', {opacity: 0, duration: 2});
// hiAboutImg.to('.image-me', {opacity: 1});
// var byeAboutInf = gsap.timeline({scrollTrigger: {trigger: '.about-me', start: '120% 50%', end: '130% 50%', scrub: 1}});
// byeAboutInf.from('.about-me', {xPercent: 0, opacity: 1, duration: 2});
// byeAboutInf.to('.about-me', {xPercent: -150, opacity: 0})
// var byeAboutImg = gsap.timeline({scrollTrigger: {trigger: '.image', start: '90% 50%', end: '130% 50%',  scrub: 1}});
// byeAboutImg.from('.image-me', {opacity: 1, duration: 2});
// byeAboutImg.to('.image-me', {opacity: 0});

// Skills 
var hiSkills = gsap.timeline({scrollTrigger: {trigger:'.contenedorSkills', start: '0% 50%', end: '100% 50%', scrub: 1}})
    .from('.skill', {opacity: 0, y: 160, stagger: 0.3, duration: 2, ease: "elastic"});
var byeSkills = gsap.timeline({scrollTrigger: {trigger:'.contenedorSkills', start: '140% 50%', end: '150% 50%', scrub: 1}});
byeSkills.from('.contenedorSkills', {opacity: 1});
byeSkills.to('.contenedorSkills', {opacity: 0});

// Projects 
// var hiProjects = gsap.timeline({scrollTrigger: {trigger: '.contenedorPortfolio', start: '40% 70%', end: '100% 70%', scrub: 1}})
//     .from('.trabajo', {opacity: 0, y: 160, stagger: 0.3, duration: 2, ease: 'elastic'});
// var byeProjects = gsap.timeline({scrollTrigger: {trigger: '.contenedorPortfolio', start: '120% 70%', end: '180%, 70%', scrub: 1}});
// byeProjects.from('.contenedorPortfolio', {opacity: 1});
// byeProjects.to('.contenedorPortfolio', {opacity: 0});

// Contact 
// var hiContact = gsap.timeline({scrollTrigger: {trigger:'.redes', start: '20% 50%', end:'+=10 50%', scrub: 1}})
//     .from('.red', {opacity: 0, y: 160, stagger: 1, duration: 2, ease: 'elastic'});
