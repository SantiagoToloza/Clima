import { useState } from "react";
import useClima from "../Hooks/useClima";
import { FiSearch } from "react-icons/fi";

const Formulario = () => {
  const { busqueda, datosBusqueda, realizarBusqueda, resultado } = useClima();
  const { ciudad } = busqueda;
  const { main } = resultado;

  const Kelvin = 273.15;

  const [alerta, setAlerta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      console.log("esta vacio hermano");
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    realizarBusqueda();
  };

  return (
    <>
      {alerta && <p>{alerta} </p>}
      <form onSubmit={handleSubmit}>
        <div className="global">
          <div className="campo">
            <label htmlFor="ciudad">Ingrese la ciudad</label>
            <div>
              <input
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={datosBusqueda}
              />
              <FiSearch className="lupa" onclick="submit" />
            </div>
            <div className="moreInfP">

              <div className="masResultado">
                {resultado.main?.temp_max && (
                  <>
                    <p>
                      Temperatura Maxima: {(main.temp_max - Kelvin).toFixed(0)}{" "}
                    </p>
                    <p>
                      Temperatura Minima: {(main.temp_min - Kelvin).toFixed(0)}{" "}
                    </p>
                    <p>
                      Sensacion Termica: {(main.feels_like - Kelvin).toFixed(0)}{" "}
                    </p>
                    <p>Humedad: {main.humidity} % </p>
                  </>
                )}
              </div>

              {/* <p>Mas informacion</p>
               */}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Formulario;
