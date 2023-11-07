import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/navbar";
import { ProfilePic } from "./components/profilePic";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProfilePic />
    </div>
  );
}
export default App;
