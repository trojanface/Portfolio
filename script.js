start();

function setProgress(selectedElement, percent) {
    const radius = document.querySelector(selectedElement).r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    document.querySelector(selectedElement).style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - percent / 100 * circumference;
    document.querySelector(selectedElement).style.strokeDashoffset = offset;
}

function randRotate(selectedElement, selectedElementShadow) {
    let angleMatrix = window.getComputedStyle(document.querySelector(selectedElement)).getPropertyValue("transform");
    var values = angleMatrix.split('(')[1],
        values = values.split(')')[0],
        values = values.split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];
    var currentAngle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    let newAngle = currentAngle + Math.floor(Math.random() < 0.5 ? (Math.random() * -30) : (Math.random() * 30));
    document.querySelector(selectedElement).style.transform = `rotate( + ${newAngle} + deg)`;
    if (selectedElementShadow != null) {
        document.querySelector(selectedElementShadow).style.transform = `rotate( + ${newAngle} + deg)`;
    }
}
function start() {
    setInterval(update, 1000);
    update();
}

function update() {
    setProgress("#wedge1", 30);
    randRotate("#wedge1");
    setProgress("#wedge2", 12);
    randRotate("#wedge2");
    setProgress("#wedge3", 5);
    randRotate("#wedge3");
    setProgress("#pBar1", 70);
    randRotate("#pBar1");
    setProgress("#pBar2", 30);
    randRotate("#pBar2");
    setProgress("#pBar3", 50);
    randRotate("#pBar3");
    randRotate("#pBar4");
    randRotate("#pBar6");

    // randRotate("#hourCircle", "#hourCircleShadow");
    // randRotate("#secondsCircle", "#secondsCircleShadow");
    // setProgress("#secondsCircle", moment().minute() / 2);
    // setProgress("#hourCircle", moment().hour());
    // setProgress("#hourCircleShadow", 23);
    // setProgress("#randSpinner1", 10);
    // setProgress("#randSpinner2", 2);
    // setProgress("#randSpinner3", 5);
    // setProgress("#circle1", 80);
    // setProgress("#circle2", 60);
    // setProgress("#circle3", 70);
    // randRotate("#circle4");
    // randRotate("#randSpinner1", "#circle1");
    // randRotate("#randSpinner2");
    // randRotate("#circle3");
    // randRotate("#randSpinner3", "#circle2");
}

//Taken from https://codepen.io/annalarson/pen/GesqK
window.onload = function () {
    $(window).scroll(function () {
        $('.hideme').each(function (i) {
            var top_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > top_of_object) {
                $(this).fadeTo("slow" , 1)
            }
        });
    });
};