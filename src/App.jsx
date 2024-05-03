import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Read from "./pages/Read";
import Write from "./pages/Write";
import Home from "./pages/Home"
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Read" element={<Read/>}/>
          <Route path="/Write" element={<Write/>}/>
      </Routes>
    </Router>
  );
}

export default App;
