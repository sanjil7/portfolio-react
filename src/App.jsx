//import logo from './logo.svg';
import "./Components/Navbar.css";
import "./Components/Banner.css";
import "./Components/Skills.css";
import "./Components/Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomNavbar } from './Components/CustomNavbar';
import { Banner } from "./Components/Banner";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
// import reportWebVitals from './Components/reportWebVitals';


function App() {
  return (   
 <div className="App">
<CustomNavbar/>
<Banner />
<Skills />
<Projects />
</div>
    
    
  );
}

export default App;
// reportWebVitals();