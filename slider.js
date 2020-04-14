let sliderImages = document.querySelectorAll('.slide'),
    leftArrow = document.querySelector('#left-arrow'),
    rightArrow = document.querySelector('#right-arrow'),
    currentPostion = 0;

// reset the slider

function reset(){
    for(let i = 0; i< sliderImages.length; i++){
        sliderImages[i].style.display = 'none'
    }
}

// start the slider

function startSlider(){
    reset();
    sliderImages[0].style.display = 'block'
}


// left arrow function

function slideLeft() {
    reset();
    sliderImages[currentPostion - 1].style.display = 'block';
    currentPostion --;
}

leftArrow.addEventListener('click', function() {
    if(currentPostion === 0){
        currentPostion = sliderImages.length
    }
    slideLeft()
})

// right arrow function

function slideRight() {
    reset();
    sliderImages[currentPostion + 1].style.display = 'block';
    currentPostion ++;
}

rightArrow.addEventListener('click', function() {
    if(currentPostion === sliderImages.length - 1){
        currentPostion = -1
    }
    slideRight()
})



startSlider()

