import useClima from "../Hooks/useClima";
import {BsFillCloudMoonFill} from 'react-icons/bs'

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
               <BsFillCloudMoonFill className="tiempo"/>
            <p className="temperaturaAct">
             {(main.temp - Kelvin).toFixed(0)}{"°"}
           </p>
           <p className="nombre rest">
             {
              resultado.name
             }
             
           </p>
           <p className="nombre" >23/07/2022  02:18</p>
          </>
        )}
      </div>
    </div>
  );
};
export default Resultado;
