import { useEffect, useState } from "react";
import Error from "./Error";
import styled from "@emotion/styled";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.7s ease;

  &:hover {
    background-color: #7a7dfe;
  }
`;

const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas(
    "Elige tu criptomoneda",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      // console.log(resultado);
      const arrayCriptos = resultado.Data.map((cripto) => {
        // console.log(cripto);
        const objetoCriptos = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };

        return objetoCriptos;
      });

      setCriptos(arrayCriptos);
    };

    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptomoneda].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    setMonedas({
      moneda,
      criptomoneda,
    });
  };

  return (
    <>
      {error && <Error>¡Todos los campos son obligatorios!</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />

        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;
