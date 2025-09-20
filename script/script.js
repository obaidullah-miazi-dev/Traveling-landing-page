const tl=gsap.timeline()

tl.from('.hero-section .banner-text',{
    y:50,
    duration:0.8,
    opacity:0,
    stagger:0.2
    
})


gsap.from('#service-container .animation',{
    y:30,
    duration:0.5,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:'#service-container',
        scorller:'body',
        // markers:true,
        start:'top 60%',
        end:'top 30%',
        scrub:3
        
    }
})


gsap.from('#destination-container .animation',{
    y:30,
    duration:0.5,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:'#destination-container',
        scorller:'body',
        markers:true,
        start:'top 60%',
        end:'top 30%',
        scrub:3
        
    }
})