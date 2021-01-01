$(document).ready(function () {
    var rgb1 = [0, 0, 255]; // Blue
    var rgb2 = [255, 255, 255];  // White
    var bg;
    
    var i = 0;
    var a;
    setInterval(colorear, 50);
    function colorear() {

        rgb1[0] = i;
        rgb1[1] = i;
        rgb1[2] = 255 - i;
        rgb2[0] = 255 - i;
        rgb2[1] = 255 - i;
        rgb2[2] = 255 - i;
        bg = "linear-gradient(to left , rgb(" + rgb1[0] + "," + rgb1[1] + "," + rgb1[2] + ")," + "rgb(" + rgb2[0] + "," + rgb2[1] + "," + rgb2[2] + ")";
        
        $("#colores").css("background", bg);
        
        if (i == 0) {
            a = 1;
        }
        if (i == 255) {
            a = -1;
        }
        i+=a
    }
    

});