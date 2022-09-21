
import './App.scss';
import {Routes, Route,Links } from 'react-router-dom'
import Navbar from "./components/navbar/navbar";
import Main from "./pages/main/main";
import OurMission from "./pages/our_mission/ourMission";
import Places from "./pages/places/places";
import Team from "./pages/team/team";
import ErrorPage from "./pages/error/error";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/mission' element={<OurMission/>}/>
            <Route path='/places' element={<Places/>}/>
            <Route path='/team' element={<Team/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </div>
  )
}

export default App;
