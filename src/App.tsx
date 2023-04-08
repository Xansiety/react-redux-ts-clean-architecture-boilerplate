import { useSelector } from "react-redux";
import "./App.css";
import { HomePage } from "./pages";
import { AppStore } from "./redux/store";
import { DataStyled, Heading } from "./styled-components";

function App() {
  // getter for user from store, cant destructure it cons { user } = useSelector((state: AppStore) => state.user);
  const userStore = useSelector((state: AppStore) => state.user);
  return (
    <>
      <Heading>Clean Architecture with React and TypeScript</Heading>

      <DataStyled>
        User from store: <code>{JSON.stringify(userStore, null, 2)} </code>
      </DataStyled>

      <HomePage />
    </>
  );
}

export default App;
