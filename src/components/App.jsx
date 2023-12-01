import Navbar from "./Navbar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";
import TopColleges from "./TopColleges";
import PredictRank from "./PredictRank";
import AboutUs from "./AboutUs";

function App() {

  return (
    <Router>
        <Navbar />
      <div>
        <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/top-colleges" element ={<TopColleges/>} />
        <Route path="/predict-rank" element ={<PredictRank/>} />
        <Route path="/about-us" element ={<AboutUs/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;