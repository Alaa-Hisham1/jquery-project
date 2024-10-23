$('.home .layer .caption .open').click(function () {
    $('.nav').animate({ width: '20%' }, 700, function () {
        $('.nav li a').css({ display: 'block' })
    })
    $('.home .layer').animate({ width: '80%' }, 700);

})
$(' .nav .icon').click(function () {
    $(window).scrollTop(0)
    $(' .nav li a').css({ display: 'none' })
    $(' .nav').animate({ width: '0' }, 700)
    $('.home .layer').animate({ width: '100%' }, 700);

})
// droping section start
var dropingSections = $('.singer .sing ');
var dropingText = $('.singer .sing .txt');
for (let i = 0; i < dropingSections.length; i++) {
    $(dropingSections).eq(i).click(function (e) {
        $(e.target).next().slideToggle(700);

    });
}
// dropping section end
// count down start
var myBirthDay = new Date("Novamber 17, 2024 00:00:00");
function countDown() {
    let today = new Date();
    let msLeft = myBirthDay - today;
    let daysLeft = msLeft / (1000 * 60 * 60 * 24);
    let hoursLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    let minutesLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
    let secondsLeft = (minutesLeft - Math.floor(minutesLeft)) * 60;
    $('#days').html(`${Math.floor(daysLeft)} D`);
    $('#hours').html(`${Math.floor(hoursLeft)} h`);
    $('#minutes').html(`${Math.floor(minutesLeft)} m`);
    $('#secs').html(`${Math.floor(secondsLeft)} s`);
}
countDown();
setInterval(countDown, 1000)
// END COUNT DOWN
// STRAT 100 CHARACTER ALLOWED
let msg = $('.join .inputs textarea');
let restChar=100;
$(msg).keypress(function (e) {
    restChar-=1;
    countChar();
})

$(msg).keydown(function (e) {
    if(e.key=='Backspace' && restChar<100){
        restChar+=1;
    }
    countChar();
})
function countChar(){
    if(restChar>=1){
        $('#ReaminingChar').html(`${restChar}`)
    }
    else{
        $('#ReaminingChar').html('your available character finished ')
    }
}
// count down end
// scroll behavior
// $('.nav a').click(function(e){
//     let clickedLink =$(e.target).attr('href');
//     let sectionOffset=$(clickedLink).offset().top;
//     $('html , body').animate({scrollTop:sectionOffset},2000)
// })
$('.nav a ').click(function(e){
    console.log(e.target);
    let clickedLink=$(e.target).attr('href');
    console.log(clickedLink);
    console.log($(clickedLink).offset());
    
    let sectionOffset =$(clickedLink).offset().top;
    $('html , body').animate({scrollTop : sectionOffset},1000);
})