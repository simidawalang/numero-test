import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Auth/SignUp";
import Register from "./pages/Auth/Register";
import Success from "./pages/Auth/Success";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/auth/signup" element={<SignUp />} />
          <Route exact path="/auth/register" element={<Register />} />
          <Route exact path="/auth/register/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
