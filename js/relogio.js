
setInterval(()=>{
    let hora = document.getElementById('hora');
    let minuto = document.getElementById('minuto');
    let segundo = document.getElementById('segundo');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hora_dot = document.querySelector('.hora_dot');
    let min_dot = document.querySelector('.min_dot');
    let seg_dot = document.querySelector('.seg_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >=12 ? "PM" : "AM";

    // convertendo 24h para 12h
    if(h > 24){
        h = h - 24;
    }

    //adicionando 0 a esquesda
    h = (h < 10) ? "0" + h: h;
    m = (m < 10) ? "0" + m: m;
    s = (s < 10) ? "0" + s: s;

    hora.innerHTML = h + "<br><span>Horas</span>";
    minuto.innerHTML = m + "<br><span>Minutos</span>";;
    segundo.innerHTML = s + "<br><span>Segundos</span>";;
    ampm.innerHTML = am;

    // 12 horas clock
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    // 60 minutos 
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    // 60 segundos
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    hora_dot.style.transform = `rotate(${h * 30}deg)`;
    // 360 / 12 = 30
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    seg_dot.style.transform = `rotate(${s * 6}deg)`;
    // 360 / 60 = 6

})