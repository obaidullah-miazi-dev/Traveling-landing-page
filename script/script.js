const tl=gsap.timeline()

tl.from('.hero-section .banner-text',{
    y:50,
    duration:0.8,
    opacity:0,
    stagger:0.2
    
})


gsap.from('#service-container .animation',{
    y:50,
    duration:0.5,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#service-container',
        scorller:'body',
        start:'top 60%',
        end:'top 30%',
        scrub:3
        
    }
})


gsap.from('#destination-container .animation',{
    y:50,
    duration:0.5,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#destination-container',
        scorller:'body',
        start:'top 60%',
        end:'top 30%',
        scrub:3
        
    }
})

gsap.from('#book-trip-container .animation',{
    y:100,
    duration:0.5,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#book-trip-container',
        scorller:'body',
        start:'top 60%',
        end:'top 30%',
        scrub:2
    }
})

gsap.from('#container .animation',{
    y:100,
    duration:0.5,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:'#container',
        scroller:'body',
        start:'top 70%',
        end:'top 30%',
        scrub:2
    }
})


gsap.from('#subscribe-box .animation',{
    y:100,
    duration:0.5,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:'#subscribe-box',
        scroller:'body',
        start:'top 70%',
        end:'top 30%',
        scrub:2
    }
})


gsap.from('#footer-container .animation',{
    y:100,
    duration:0.5,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:'#footer-container',
        scroller:'body',
        start:'top 95%',
        end:'top 75%',
        scrub:2
    }
})