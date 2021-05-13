//상단 메뉴
const menu = document.getElementById("menuSlide");
function slideDown() {
    menu.style.left = "-200px";
}

function slideUp() {
    menu.style.left = "0";
}

function handleMouseMove(e) {
    let clientX = event.clientX;
    if (clientX >= 0 && clientX <=25) {
        slideUp();
    }   else if (clientX > 300) {
        slideDown();
    }
}

function init() {
    document.addEventListener("mousemove", handleMouseMove);
}
init();

//좋아요! 싫어요 ㅠ
let count1 = 7;
let count2 = 1;
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const textHolder = document.getElementById("count1");
const textHolder2 = document.getElementById("count2");
textHolder.innerHTML = count1;
textHolder2.innerHTML = count2;
button1.addEventListener("click", function() {
    textHolder.innerHTML = ++count1;
})
button2.addEventListener("click", function() {
    textHolder2.innerHTML = ++count2;
}) 

//공유


//구독중
// function change() {
//    const subs = document.getElementById('subscriberBtn');
//        subs.innerText ='구독중'

const subs = document.getElementById("subscriberBtn")
const num = document.getElementById("subscribers")

subs.addEventListener("click", function() {
    if(subs.innerText === '구독') {
        subs.innerText = '구독중';
    } else subs.innerText ='구독';
});

