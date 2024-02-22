import styled from "@emotion/styled";

const TextoError = styled.div`
  color: #fff;
  background-color: #b30d0d;
  padding: 5px 10px;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
`;

const Error = ({ children }) => {
  return <TextoError>{children}</TextoError>;
};

export default Error;
