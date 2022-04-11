import Header from './components/Header/Header';
import Main from "./components/Main/Main";
import styled from 'styled-components';




const AppWrapper = styled.div`
width: 100vw;
height: 100vh;
`

function App() {
  return (
    <AppWrapper>
      <Header></Header>
      <Main></Main>

    </AppWrapper>
  );
}

export default App;
