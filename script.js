start();
//Sets the background circles to a percentage of their entire completion.
function setProgress(selectedElement, percent) {
    const radius = document.querySelector(selectedElement).r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    document.querySelector(selectedElement).style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - percent / 100 * circumference;
    document.querySelector(selectedElement).style.strokeDashoffset = offset;
}
//Will rotate the background circles to a random angle.
function randRotate(selectedElement) {
    //Gets the transform of selected Element.
    let angleMatrix = window.getComputedStyle(document.querySelector(selectedElement)).getPropertyValue("transform");
    //Splits the transform into individual values.
    var values = angleMatrix.split('(')[1],
        values = values.split(')')[0],
        values = values.split(',');
        //assigns the split values to variables
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];
    //Calculates the current angle of the element.
    var currentAngle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    //Calculates the new angle with random addition/subtraction
    let newAngle = currentAngle + Math.floor(Math.random() < 0.5 ? (Math.random() * -30) : (Math.random() * 30));
    //Applies the rotation to the selected element 
    document.querySelector(selectedElement).style.transform = "rotate(  "+newAngle+"deg)";
}
//starts a regular timer that runs the background animations.
function start() {
    setInterval(update, 1000);
    update();


}
//applies the random positions periodically to the background wedges.
function update() {
    randRotate("#wedge1");
    randRotate("#wedge2");
    randRotate("#wedge3");
    randRotate("#pBar1");
    randRotate("#pBar2");
    randRotate("#pBar3");
    randRotate("#pBar4");
    randRotate("#pBar6");
    setProgress("#wedge1", 30);
    setProgress("#wedge2", 12);
    setProgress("#wedge3", 5);
    setProgress("#pBar1", 70);
    setProgress("#pBar2", 30);
    setProgress("#pBar3", 50);
}

//Taken from https://codepen.io/annalarson/pen/GesqK
//Initially fades content in depending on whether it's in the users view port.
// window.onload = function () {
//     $(window).scroll(function () {
//         $('.hideme').each(function (i) {
//             var top_of_object = $(this).position().top;
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             if (bottom_of_window > top_of_object) {
//                 $(this).fadeTo("slow", 1)
//             }
//         });
//     });
// };