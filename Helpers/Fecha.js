var fecha = new Date();
var options = { year: "numeric", month: "numeric", day: "numeric" };

const Fecha = () => {
  return fecha.toLocaleDateString("es-ES", options);
};

const Hora = () => {
  const myDate = new Date();
  let hours = myDate.getHours();
  let minutes = myDate.getMinutes();
  let seconds = myDate.getSeconds();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }
  const fechaFormateada =() => {
    return hours + ":" + minutes + ":" + seconds
  }

  

  return  fechaFormateada() ;
};

export default { Fecha, Hora };
