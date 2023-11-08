import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/navbar";
import { Banner } from "./components/profilePic";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}
export default App;
