import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Wrapper>
    <Box>Hello world!</Box>
  </Wrapper>
  );
}

export default App;
