import useClima from "../Hooks/useClima";
import {BsFillCloudMoonFill} from 'react-icons/bs'
import ui from '../../Helpers/Fecha'

const Resultado = () => {
  const { resultado } = useClima();
  const { main } = resultado;

  const Kelvin = 273.15;
  console.log(resultado);
  
  return (
    <div>
      <div className="resultado">
        {resultado?.name && (
          <>
            <p className="temperaturaAct">
             {(main.temp - Kelvin).toFixed(0)}{"°"}
           </p>
           <p className="nombre rest">
             {
              resultado.name
             }
             
           </p>
             <p className="nombre"> {ui.Fecha()}  </p>
             <p className="nombre"> {ui.Hora()}   </p>
          </>
        )}
      </div>
    </div>
  );
};
export default Resultado;
