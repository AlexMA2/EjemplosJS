var boca = document.getElementById("boca");
var cara = document.getElementById("cara");


cara.addEventListener('mouseover',function(){
    boca.style.height = 60 + 'px';
    boca.style.borderRadius = 0 + 'px';
    
});

cara.addEventListener('mouseout',function(){
    boca.style.height = 150 + 'px';
    boca.style.borderRadius = 0 + 'px' + ' ' + 0 +'px' + ' ' + 200  + 'px' + ' ' + 200 + 'px' + ' ';
});



document.getElementById('cuerpo').addEventListener('mousemove',function(ev){
    var ojos = document.querySelectorAll(".ojo");        
    
    ojos.forEach( ojo =>{
        
        let x = ojo.getBoundingClientRect().left + ojo.clientWidth/2;
        let y = ojo.getBoundingClientRect().top + ojo.clientHeight/2;
        let radianes = Math.atan2(ev.pageX - x, ev.pageY - y);
        let rotacion = (radianes * 180/Math.PI * -1) + 0;
       
        ojo.style.transform = "rotate(" + rotacion + "deg)";
    });

    
});

    