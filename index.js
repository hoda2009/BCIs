var hands=document.querySelectorAll(".hand");
var buttonContainer=document.querySelector(".buttonContainer");
var startBtn=document.getElementById("startEEG")
var eegVisual=document.getElementById("eegVisual")
var brainImg=document.getElementById("brainimg")
var chosenHand=null /*novalue*/
for(let i=0;i< hands.length;i++){
    hands[i].addEventListener("click",choose)
    function choose(){
        chosenHand=this.dataset.hand;  /*since i use data-hand*/
        alert("😇Start to imagine moving your "+chosenHand+" hand  🙌✨")
        for(let j=0;j<hands.length;j++){
            hands[j].classList.remove("active");
        }
        this.classList.add("active")
        buttonContainer.classList.remove("hidden");
         buttonContainer.scrollIntoView({
            behavior:"smooth",
            block:"start"
         })

    }
    startBtn.addEventListener("click",button)
    function button(){
         if(chosenHand=="left"){
            brainImg.src="./assets/newRightPart.png";

         }
         else {
              brainImg.src="./assets/newleft.png";}

            
            eegVisual.classList.remove("hidden")
            eegVisual.scrollIntoView({
                 behavior:"smooth",
            block:"start"

            })
        

    }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

 const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach(el => observer.observe(el));




const loader=document.getElementById("preloader")
window.addEventListener("load",hidePreLoader);
function hidePreLoader(){
    loader.style.display="none";
    
}