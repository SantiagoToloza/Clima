import img from "../../img/Background.jpg";
import Resultado from "./Resultado";


const Header = () => {
  return (
    <div className="header">
        <div className="imagenfondo">
          <img src={img} alt="imagen de fondo" className="imgbg" />
        </div>
      <div className="buscar">
      
      </div>
    </div>
  );
};
export default Header;
