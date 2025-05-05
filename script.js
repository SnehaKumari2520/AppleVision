  function loco(){
    gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);


  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
  }
  loco()

    gsap.to("#page>video",{
        scrollTrigger:{
            trigger:`#page>video`,
            start:`2% top`,
            end:`bottom top`,
            scroller:`#main`
        },
        onStart:()=>{
            document.querySelector("#page>video").play()
        }
    })


    gsap.to("#page",{
        scrollTrigger:{
            trigger:`#page`,
            start:`top top`,
            end:`bottom top`,
            scroller:`#main`,
            pin:true
        }
    })


    gsap.to("#page-bottom",{
        scrollTrigger:{
            trigger:`#page-bottom`,
            start:`5% top`,
            end:`bottom top`,
            scroller:`#main`,
            scrub:.5,
        },
        opacity:0
    })
    var t1 =gsap.timeline({
      scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        markers:true,
        pin:true,
      }
    })

    t1.to( "#page>h1",{
      top:`-50%`
    })