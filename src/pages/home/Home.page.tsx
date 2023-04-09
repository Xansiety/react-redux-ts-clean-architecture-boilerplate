import { LayoutStyledComponent } from "@/styled-components/layout.styled";
import { CreateHomeButton, ModifyHomeButton, ResetHomeButton } from "./components";
import { HomeTitle } from "./styled-components"; 
import { DataStyled } from "@/styled-components";
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';

export const HomePage = () => {
  // getter for user from store, cant destructure it cons { user } = useSelector((state: AppStore) => state.user);
  const userStore = useSelector((state: AppStore) => state.user);
  
  return (
    <LayoutStyledComponent>
      <HomeTitle>Home Page</HomeTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "4rem",
          marginBottom: "2rem",
        }}
      >
        <CreateHomeButton />
        <ModifyHomeButton />
        <ResetHomeButton />
      </div>
      <DataStyled>
        User from store: <code>{JSON.stringify(userStore, null, 2)} </code>
      </DataStyled>
    </LayoutStyledComponent>
  );
};
