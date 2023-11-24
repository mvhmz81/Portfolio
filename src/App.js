import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/navbar";
import { Banner } from "./components/profilePic";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Skills } from "./components/skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
