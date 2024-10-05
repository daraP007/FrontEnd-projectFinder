import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FindGroup from "./Pages/LookingForGroup";
import ProjectPostDetails from "./Components/ProjectPostDetails";
import CreateProjectPost from "./Components/CreateProjectPost";
import Navigation from "./Components/Navigation";
import LandingPage from "./Pages/LandingPage";
import Community from "./Pages/Community";
import LoginForm from "./Pages/LoginForm";
import SignUpForm from "./Pages/SignUp";


function App() {
  
  return (
    <>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<LandingPage/>} /> 
            <Route path="/LFG" element={<FindGroup/>} />
            <Route path="/createPost" element={<CreateProjectPost/>}/>
            <Route path="/postDetails/:id" element = {<ProjectPostDetails/>}/>
            <Route path="/community" element={<Community />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
