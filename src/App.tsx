import "./App.css";
import { HomePage } from "./pages";
import { Heading } from "./styled-components";
import { NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy loading -> Only load the component when it is needed reducing the initial load time of the app Better experience for the user and performance
// To use lazy loading, you need to wrap the component in a Suspense component and export default the component
const RickPage = lazy(() => import("./pages/rick/Rick.page"));
const MortyPage = lazy(() => import("./pages/morty/Morty.page"));

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Heading>Clean Architecture with React and TypeScript</Heading>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/RickPage" element={<RickPage />} />
          <Route path="/MortyPage" element={<MortyPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
