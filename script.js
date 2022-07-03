 const $tiempo = document.querySelector('.tiempo');
 $fecha = document.querySelector('.fecha');

 function digitalClock() {
    let f = new Date(),
    dia= f.getDate(),
    mes = f.getMonth() +1,
    año= f.getFullYear(),
    diaSemana = f.getDay();

    dia= ('0' +dia).slice(-2);
    mes= ('0' + mes).slice(-2) 

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;
   
   let semana = ['Lunes', 'Martes', 'Miércoles' ,'Jueves', 'Viernes', 'Sábado', 'Domingo'];
   let showSemana= (semana[diaSemana]);
    $fecha.innerHTML = `${dia}-${mes}-${año}`
 }

 setInterval(() => {
        digitalClock()
 },1000);