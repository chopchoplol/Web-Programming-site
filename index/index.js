var time = document.getElementById("currentTime");
var weekday = new Array(7);

function nowtime(){
    var current = new Date();
    var month = current.getMonth() + 1;

    weekday[0] = "일요일";
    weekday[1] = "월요일";
    weekday[2] = "화요일";
    weekday[3] = "수요일";
    weekday[4] = "목요일";
    weekday[5] = "금요일";
    weekday[6] = "토요일";

    time.innerHTML = current.getFullYear() + "년 " + month + "월 " + current.getDate() + "일 " + weekday[current.getDay()] +" "
    + current.getHours() + "시 " + current.getMinutes() + "분 " + current.getSeconds() + "초";
}

nowtime();
setInterval("nowtime()", 1000);



document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('#slideshow .slide');
    var currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.classList.remove('inactive');
            slide.classList.remove('to-right');
            if (i === index) {
                slide.classList.add('active');
            } else if (i === (index + slides.length - 1) % slides.length) {
                slide.classList.add('inactive');
            } else {
                slide.classList.add('to-right');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
    showSlide(currentSlide);
});


var menuContent = document.getElementsByClassName("menu-content")[0];
var menubtn = document.getElementsByClassName("menu-button")[0];

function toggleMenu(){
    if(menuContent.classList.contains("active")){
        menuContent.classList.remove("active");
    }else{
        menuContent.classList.add("active");
    }
};

menubtn.addEventListener("click", toggleMenu);
