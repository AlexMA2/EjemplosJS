const grados = 6;
const hr = document.getElementById("hora");
const mn = document.getElementById("min");
const sg = document.getElementById("seg");

setInterval(() => {
    var dia = new Date();

    var hh = dia.getHours() * 30;
    var mm = dia.getMinutes() * grados;
    var ss = dia.getSeconds() * grados;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sg.style.transform = `rotateZ(${(ss)}deg)`;    
    
});
