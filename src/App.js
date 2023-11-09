import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/navbar";
import { Banner } from "./components/profilePic";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}
export default App;
