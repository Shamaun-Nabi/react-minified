import "./App.css";
import Anime from "./components/Anime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    // Remove this area and start your code
    <div className="container">
      <Anime />
      <Anime />
      <Anime />
      <Anime />
      <Anime />
      <Anime />
      <h3 className="text-center text-green-400 bg-gray-200 p-4 shadow-md">
        Booyah !! React minified(tailwind css and Bootstrap Included)
        <p className="font-thin text-md text-pink-700">
           Shamaun Nabi
        </p>
        <p><FontAwesomeIcon icon={faCoffee} spin/> FontAwesomeIcon Added</p>
      </h3>

      <Anime />
      <Anime />
      <Anime />
      <Anime />
      <Anime />
      <Anime />
    </div>
    // Remove this area and start your code
  );
}

export default App;
