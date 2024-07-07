var tl = gsap.timeline() 
.from("#loader img",{
    y:150,
    opacity:0,
    duration:1
})
.to("#loader",{
    top:"-85vh",
    duration:1,
},"a")
.to("#main",{
    top:"0%",
    duration:1
},"a")


var h = document.querySelectorAll("#page2 h1")
h.forEach(function (h1) {
    gsap.from(h1,{
        y:"100%",  
        scrollTrigger: {
            trigger: h1,
            scroller: "body",
            start: "top 98%",
            end: "top 89%",
            scrub: 3,
            // markers:true
        }
    })
})

var vid = document.querySelectorAll(".page video")
vid.forEach(function (v) {
    gsap.from(v,{
    transform: "scale(.7)",
        opacity:0,  
        scrollTrigger: {
            trigger: v,
            scroller: "body",
            start: "top 90%",
            end: "top 80%",
            scrub: 3,
        }
    })
})

var cur = document.querySelector("#cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y
    })
})
var imgs = document.querySelectorAll("#page1 .elem")
imgs.forEach(function(ig){
    ig.addEventListener("mousemove",function(){
        cur.style.backgroundColor = "#F2F1E4"
        cur.style.padding = "20px 40px"
        cur.textContent = "Click"
    })
})
var imgs = document.querySelectorAll("#page1 .elem")
imgs.forEach(function(ig){
    ig.addEventListener("mouseleave",function(){
        cur.style.backgroundColor = "#184DC4"
        cur.style.padding = "0"
        cur.textContent = ""
    })
})