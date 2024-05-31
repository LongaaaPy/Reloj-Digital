function calcularTiempo() {
    let tiempo = new Date();

    let day = tiempo.getDate(); 
    let month = tiempo.getMonth() + 1; 
    let year = tiempo.getFullYear();
    let hour = tiempo.getHours();
    let minute = tiempo.getMinutes();
    let second = tiempo.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    day = day < 10 ? "0" + day : day; 
    month = month < 10 ? "0" + month : month; 

    let pantallaReloj = hour + ":" + minute + ":" + second;
    let pantallaFecha = day + "/" + month + "/" + year;


    let Reloj = document.querySelector(".Reloj");
    let Fecha = document.querySelector(".Fecha");


    Reloj.innerHTML = pantallaReloj;
    Reloj, Fecha.innerHTML = pantallaFecha;
}

setInterval(calcularTiempo, 1000);
calcularTiempo();

