import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/navbar";
import { Banner } from "./components/profilePic";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { About } from "./components/about";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
