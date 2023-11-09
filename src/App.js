import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/navbar";
import { Banner } from "./components/profilePic";
import { Projects } from "./components/projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
    </div>
  );
}
export default App;
