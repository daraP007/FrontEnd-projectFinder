import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import LandingPage from "./LandingPage/LandingPage";
import Community from "./Community/Community";
import LoginForm from "./Forms/LoginForm";
import SignUpForm from "./Forms/SignUp";
import CreateGroup from "./Forms/CreateGroupForm";
import FindGroup from "./LookingForGroupPage/LookingForGroup";
import PostDetails from "./LookingForGroupPage/PostDetails";
function App() {
  
  return (
    <>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<LandingPage/>} /> 
            <Route path="/LFG" element={<FindGroup/>} />
            <Route path="/createPost" element={<CreateGroup/>}/>
            <Route path="/postDetails/:id" element = {<PostDetails/>}/>
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
