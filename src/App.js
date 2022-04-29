import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
//import Navbar from "./components/layout/Navbar/Navbar";
import SignUp from "./pages/Auth/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/auth/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
