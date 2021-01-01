var text = document.getElementById("texto");
var sombra = '';

for(var i=0;i<30;i++){
    sombra += (sombra ? ',' : '') + -i*1 + 'px ' + i*1 + 'px  0 #d9d9d9';
}
text.style.textShadow = sombra;