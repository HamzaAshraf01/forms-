// this code is copied form codepen to combine scroll trigger and locomotiv (puted in fuction)
function init(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init ()
// sherry part 

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.4,
});
Shery.makeMagnet(".magnet-icon");


// sherry part end


var tl = gsap.timeline() ;

tl.from("#headings h1" , {

  y: 300 ,
  stagger: 0.1 ,
  ease: "power4" ,
  duration: 1 

})


tl.to("#page2 h3", {
  scrollTrigger: {
    trigger: "#page2 h3" ,
    scroller: "#main" ,
    start: "top 50%" ,
    end : "bottom 80%" ,
    scrub: 2 ,
  } ,
  Opacity: 1 ,
  duration: 1 ,
})

tl.from("#move-headings .left-h" , {
  x: 700 ,
  scrollTrigger:{
    trigger: "#move-headings .left-h" ,
    scroller: "#main" ,
    scrub: true ,

  }



})
tl.from("#move-headings .right-h" , {
  x: -700 ,
  scrollTrigger:{
    trigger: "#move-headings .left-h" ,
    scroller: "#main" ,
    scrub: true ,
    // markers: true ,
 
  }



})

tl.to("#move-headings .video-p3" , {
  scale: 1.5 ,
  scrollTrigger:{
    trigger: "#move-headings .video-p3" ,
    scroller: "#main" ,
    scrub: true  ,
    start: "top 20%" ,
    pin: "#move-headings" ,
    end: "bottom 30%" ,
    
  }


})

// page 4 horizontal scroll using scrollTrigger

let sections = gsap.utils.toArray("#page4-1 .project");
let container = document.querySelector("#canvas-1")




gsap.to( sections , {
  xPercent: -100 * (sections.length -1) ,
  duration: 1 ,
  ease: "none" ,
  scrollTrigger:{
    trigger: ".project" ,
    scroller: "#main" ,
    scrub: 4,
    // snap: true ,
    pin: "#page4-1",
    animation: tl ,
    markers: true ,
    end: "+=100%"



  }




}) ;

// blog section page 5 

let tl2 = gsap.timeline() ;


tl2.to("#p5-headings h1" , {
  y: 0 ,
  scale: 0.9 ,
  ease: "power1" ,
  duration: 1 ,
  scrollTrigger:{

    trigger: "#p5-headings" ,
    scroller: "#main" ,
    // start: "center center" ,
    end: "+=100%" ,
    pin: true ,
    scrub: true

  }




})

tl2.to( "#image-1" , {
  y: 1000 ,
  duration: 2 ,
  scrollTrigger: {
    trigger:"#images-div" ,
    scroller: "#main" ,
    scrub: true ,
    start: "top top" ,
    end: () => `-=${document.querySelector("#image-1").offsetheight}` ,

  }
  
})

tl2.to ("#image-1" , {
  scale: 0.6 ,
  duration: 1 ,
  ease: "none" ,
  scrollTrigger:{
    trigger:"#images-div" ,
    scroller: "#main" ,
    scrub: true ,
    start: "top center" ,
    

  }


});

// page 6 start

tl2.to("#circle" , {

  scale: 5 ,
  duration: 6 ,
  ease: "none" ,
  scrollTrigger: {
    trigger:"#circle-over" ,
    scroller: "#main" ,
    start: "top top" ,
    end: "+=100%" ,
    scrub: true ,
    pin: true



  }





})

tl2.to("#p7-heading h1" , {
  scale : 1.7 ,
  duration: 3 ,
  scrollTrigger: {
    trigger: "#p7-heading h1" ,
    scroller: "#main" ,
    scrub: true ,
    start: "top center" ,
    snap: true ,




  }



})