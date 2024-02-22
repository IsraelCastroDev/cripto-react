import styled from "@emotion/styled";

const Parrafo = styled.p`
  color: #e0e0e0;
  font-size: 15px;
  font-family: "Lato", sans-serif;
`;
const Span = styled.span`
  color: #ffffff;
  font-size: 18px;
  font-family: "Lato", sans-serif;
  text-decoration: underline;
`;

const Contenedor = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 6px;
  margin-top: 20px;
`;

const Img = styled.img`
  width: 180px;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  // console.log(IMAGEURL);x

  return (
    <Contenedor>
      <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
      <div>
        <Parrafo>
          El precio es de: <Span>{PRICE}</Span>
        </Parrafo>
        <Parrafo>
          Precio más alto del día: <Span>{HIGHDAY}</Span>
        </Parrafo>
        <Parrafo>
          Precio más bajo del día: <Span>{LOWDAY}</Span>
        </Parrafo>
        <Parrafo>
          Variación en las últimas 24 horas: <Span>{CHANGEPCT24HOUR}</Span>
        </Parrafo>
        <Parrafo>
          última actualización: <Span>{LASTUPDATE}</Span>
        </Parrafo>
      </div>
    </Contenedor>
  );
};

export default Resultado;
