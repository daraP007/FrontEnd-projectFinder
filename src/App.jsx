
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import ClassPrep from './ClassPrep/ClassPrep';
import LandingPage from './LandingPage/LandingPage';
import LeetcodePrep from './LeetcodePrep/LeetcodePrep';
import CareerPrep from './CareerPrep/CareerPrep';
import Community from './Community/Community';
import LoginForm from './LoginForm/LoginForm';
import SignUpForm from './LoginForm/SignUp';

function App() {
  return (
    <>
      <Router>
        <div>
        <Navigation/>
        <Routes>
          <Route exact path ='/' element ={<LandingPage/>}/>
          <Route path = '/class-prep' element = {<ClassPrep/>}/>
          <Route path = '/career-prep' element = {<CareerPrep/>}/>
          <Route path = '/leetcode-prep' element = {<LeetcodePrep/>}/>
          <Route path = '/community' element = {<Community/>}/>
          <Route path = '/signup' element = {<SignUpForm/>}/>
          <Route path = '/login' element = {<LoginForm/>}/>
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
