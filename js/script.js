const navDialog = document.getElementById('nav-dialog');
function handleMenu(){
  navDialog.classList.toggle('hidden');
}

const totalTranslateLTR = -48*4;
const totalTranslateRTL = 36*4;

function setupIntersectionOBserver(element, isLTR, speed){

  const intersectionCallback = (entries)=>{
    const isIntersecting = entries[0].isIntersecting;
      if(isIntersecting){
        document.addEventListener('scroll', scrollHandler)
      }else{
          document.removeEventListener('scroll', scrollHandler)
      }
  }
  const intersectionObserver = new IntersectionObserver(intersectionCallback)

  intersectionObserver.observe(element);

  function scrollHandler(){
    const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
    
    if(isLTR){
      totalTranslate = translateX + totalTranslateLTR;
    }else{
      totalTranslate = -translateX + totalTranslateRTL;
    }
    
    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');


setupIntersectionOBserver(line1, true, 0.15);
setupIntersectionOBserver(line2, false, 0.15);
setupIntersectionOBserver(line3, true, 0.15);
setupIntersectionOBserver(line4, true, 0.8);

 
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const ddArrowIcon = question.querySelectorAll('i')[0];
      answer.classList.toggle("hidden");
      ddArrowIcon.classList.toggle("-rotate-180");
      answer.classList.toggle("max-h-0");
answer.classList.toggle("max-h-40");

    });
  }); 


 