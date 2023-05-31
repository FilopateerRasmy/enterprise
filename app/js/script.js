const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    let curSlide = 0;
    const maxSlide = slides.length;
  
  
  
    const goToSlide = function (slide) {
      slides.forEach(
    
        (s, i) => {
            if(slide === 0){
                s.style.transform = `translateX(${1 * (i - slide) }%)`

            }else{
              
              s.style.transform = `translateX(-${100 }%)`;
            }
        
        }
      );
    };
  
    // Next slide
    const nextSlide = function () {
 

      if (curSlide ===  1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
      goToSlide(curSlide);
    
    };
  
    const prevSlide = function () {
      console.log('prev',curSlide)
      if (curSlide === 0) {
        curSlide = 1;
      } else {
        curSlide--;
      }

      goToSlide(curSlide);
    
    };
  
    const init = function () {
      goToSlide(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  };
  slider();