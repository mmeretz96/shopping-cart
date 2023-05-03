import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">Hi</div>
    </div>
  );
}

export default App;
