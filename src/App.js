import NavBar from "./components/NavBar"
import Main from "./components/Main"
// import HomeCard from "./components/HomeCard"
import styled from 'styled-components'


function App() {
  return (
    <AppContainer>
      <NavBar/>
      <Main>
      </Main>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  grid-template-areas:
  'header header header header header header'
  'main main main main main main'
  'main main main main main main';
  position: relative;

`;
