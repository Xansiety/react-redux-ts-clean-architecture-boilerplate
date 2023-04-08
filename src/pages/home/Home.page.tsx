import { LayoutStyledComponent } from "@/styled-components/layout.styled";
import { CreateHomeButton, ModifyHomeButton, ResetHomeButton } from "./components";
import { HomeTitle } from "./styled-components";

export const HomePage = () => {
  return (
    <LayoutStyledComponent>
      <HomeTitle>Home Page</HomeTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "4rem",
        }}
      >
        <CreateHomeButton />
        <ModifyHomeButton />
        <ResetHomeButton />
      </div>
    </LayoutStyledComponent>
  );
};
