import "./App.css";
import { HomePage, MortyPage, RickPage } from "./pages";
import { Heading } from "./styled-components";
import { NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Heading>Clean Architecture with React and TypeScript</Heading>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/RickPage" element={<RickPage />} />
          <Route path="/MortyPage" element={<MortyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
