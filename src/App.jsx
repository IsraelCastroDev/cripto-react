import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import ImagenCripto from "../public/img/imagen-criptos.png";
import { useEffect, useState } from "react";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const Img = styled.img`
  max-width: 400px;
  display: block;
  width: 80%;
  margin: 100px auto 0 auto;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: white;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});

  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const { moneda, criptomoneda } = monedas;

      const cotizarCripto = async () => {

        setCargando(true)
        setResultado({})

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        console.log(url);
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[criptomoneda][moneda]);

        setCargando(false)
      };

      cotizarCripto();
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Img src={ImagenCripto} alt="imagenes criptos" />
      <div>
        <Heading>Cotiza criptomendas al instante!</Heading>
        <Formulario setMonedas={setMonedas} />

        {resultado.PRICE && <Resultado resultado={resultado} />}
        {cargando && <Spinner />}
      </div>
    </Contenedor>
  );
}

export default App;
