import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
)


function App() {

  return <div>
    {routes}
  </div>;
}

export default App;
