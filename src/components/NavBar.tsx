import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "4rem",
        marginBottom: "2rem",
        fontSize: "3rem",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          border: "1px solid white",
          display: "flex",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          border: "1px solid white",
          display: "flex",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
        to="/RickPage"
      >
        Rick Page
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          border: "1px solid white",
          display: "flex",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
        to="/MortyPage"
      >
        Morty Page
      </Link>
    </div>
  );
};
