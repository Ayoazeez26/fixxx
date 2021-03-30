let smMenuBtn = document.querySelector('.sm-menu-btn')
let smScreenNav = document.querySelector('.sm-screen-menu')

smMenuBtn.addEventListener('click', e => {
  console.log('hello');
  let hamBtn = document.querySelector('.ham-up');
  let hamBtndown = document.querySelector('.ham-down');
  if(hamBtn.classList.contains('bg-pr-pri')) {
    hamBtn.classList.remove('bg-pr-pri');
    hamBtndown.classList.remove('bg-pr-pri');
    hamBtn.classList.add('bg-white');
    hamBtndown.classList.add('bg-white');
  }

  smScreenNav.classList.toggle('hidden')
})


const titleContainer = document.querySelector('.transParent');
titleContainer.addEventListener('mousemove', function(event) {
  mousePosMove(event);
})

titleContainer.addEventListener('resize', function(event) {
  mousePosMove(event);
})

function mousePosMove(e) {

  const clone = document.querySelector('.cloneHeader');
  clone.style.clipPath = `circle(50% at ${e.offsetX + 50}px ${e.offsetY + 50}px)`;
  
}

titleContainer.addEventListener('mouseleave', function(event) {
  setTimeout(function() {
    const clone = document.querySelector('.cloneHeader');
    clone.style.clipPath = `polygon(0 0, 30% 0, 50% 100%, 0 100%)`;
  }, 700);
}, false);

gsap.registerPlugin(ScrollTrigger);


let rotate = gsap
.timeline({
  scrollTrigger : {
    trigger: ".body-section",
    start: "30px 20px",
    end: () => "+=" + document.querySelector('.body-section').offsetHeight,
    scrub: true,
  },
})
.to(".planet-parent", {
  rotation: 360*3,
  duration: 20,
  ease: "none",
})