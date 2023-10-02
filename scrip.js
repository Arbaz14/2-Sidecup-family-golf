gsap.to("#nav", {
    duration: 1,
    marginTop: 0,
    backgroundColor: "black",
    height: 80,
    position: 'fixed',
    scrollTrigger: {
        trigger: "#nav",
        start: "top -10%",
        end: "bottom -10%",
        scrub: 5,
        //  //  
    }
})

gsap.from("#nav img, #nav ul li  ", {
    duration: 1,
    opacity: 0,
    y: -60,
    stagger: 0.1,
})

gsap.to('#main', {
    duration: 1,
    backgroundColor: '#000',
    opacity: 1,
    scrollTrigger: {
        trigger: "#page1",
        start: "top 0%",
        end: 'bottom 0%',
        scrub: 5,
        //  
    }
})

gsap.from("#page1 h1 ,#page1 h2 ,#page1 p ", {
    duration: 1, opacity: 0, stagger: .1, scale: 0,
})
gsap.from('#lefti', {


    duration: 1,
    opacity: 0,
    x: -500,
    stagger: 0.4,
    scrollTrigger: {
        trigger: '#page2',
        // start: 'top 0%',
        end: 'bottom 110%',
        scrub: 5,
        
    }
})
gsap.from('.card1', {


    duration: 1,
    opacity: 0,
    x: -500,
    stagger: 0.4,
    scrollTrigger: {
        trigger: '#page3',
        // start: 'top 0%',
        // end: 'bottom 50%',
        end: 'bottom 110%',

        scrub: 5,
        //  
    }
})
gsap.from('#righti', {
    duration: 1,
    opacity: 0,
    x: 500,
    stagger: 0.4,


    scrollTrigger: {
        trigger: '#page2',
        // start: 'top 0%',
        // end: 'bottom 50%',
        end: 'bottom 110%',

        scrub: 5,
        //  
    }
})
gsap.from('.card3', {
    duration: 1,
    opacity: 0,
    x: 500,


    stagger: 0.4,
    scrollTrigger: {
        trigger: '#page3',
        // start: 'top 0%',
        // end: 'bottom 50%',
        end: 'bottom 110%',

        scrub: 5,
        //  
    }
})
gsap.from('#about-us', {
    duration: 1,
    opacity: 0,
    scale: 0,
    stagger: 0,
    scrollTrigger: {
        trigger: '#page2',
        // start: 'top 0%',
        // end: 'bottom 50%',
        end: 'bottom 110%',

        scrub: 5,
        //  
    }
})
gsap.from('.card2', {
    duration: 1,
    opacity: 0,
    scale: 0,
    stagger: 0,
    scrollTrigger: {
        trigger: '#page3',
        // start: 'top 0%',
        // end: 'bottom 20%',
        end: 'bottom 110%',

        scrub: 5,
        //  
    }
})


//corsor
var doc = document.querySelector('#cursor')
document.body.addEventListener('mousemove', function (e) {
    doc.style.transition = '0.0100000s'

    doc.style.left = e.x + "px"
    doc.style.top = e.y + "px"
    // console.log(e.x, e.y)
})

document.querySelectorAll("#nav>ul>li>a").forEach((h1) => {
    h1.addEventListener('mouseenter', () => {
        doc.style.backgroundColor = "transparent"
        doc.style.border = "1px solid white"
        doc.style.scale = "2"
    })
    h1.addEventListener('mouseleave', () => {
        doc.style.backgroundColor = "rgba(145, 255, 0)"
        doc.style.scale = "1"
        doc.style.border = "none"

    })
})
