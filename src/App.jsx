
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import ClassPrep from './ClassPrep/ClassPrep';
import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
    <>
      <Router>
        <div>
        <Navigation/>
        <Routes>
          <Route exact path ='/' element ={<LandingPage/>}/>
          <Route path = '/class-prep' element = {<ClassPrep/>}/>
        </Routes>
        </div>
      </Router>

    </>
  )
}

export default App
