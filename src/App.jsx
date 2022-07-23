import Formulario from "./Components/Formulario";
import Resultado from "./Components/Resultado";
import { ClimaProvider } from "./Context/ClimaProvider";
import useClima from "./Hooks/useClima";
import Header from "./Components/Header";


const App = () => {

 
  return (
    <ClimaProvider>
      <Header/>
      <Formulario/>
      <Resultado/>
    </ClimaProvider>
  );
};
export default App;
