// gsap.to("h1",{
//     x:500,
//     y:400,
// })

const star = document.querySelector(".star");
document.writeln("however we can directly use the css or html attribute or tag to select the element but its better practice if we use javscript variables for it.")
gsap.to(star, {
  x: 500, // it means translateX = 500px
  y: 200,
  duration: 4, 
  delay: 2,
  rotation: 360,
  scale: 1.2,
  stagger:1,
  backgroundColor: "pink",
  borderRadius: "150px 80px 30px",
});
