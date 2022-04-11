import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import styled from 'styled-components';
import { Routes, Route} from "react-router-dom";




const MainWrapper = styled.main`
width: 100%;
height: 100%;
`

function Main() {
  return (
    
    <MainWrapper>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
    </MainWrapper>
    
  );
}

export default Main;
