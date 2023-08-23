//set up .env file to store API key
//set up _REDIRECTS file
//create COMPONENT to hold our initial Axios call in a useEffect
//store API DATA in STATE
//LOOP over data and display movie poster

//use LINK to make posters change the URL onClick
//use ROUTES to LISTEN for URL change and DISPLAY appropriate COMPONENT

import Catalogue from "./components/Catalogue";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <h1>Real Netflix</h1>
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/movie/:movieID" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
