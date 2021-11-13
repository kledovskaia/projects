import { useContext } from "react";
import { DatingCards } from "../../components/DatingCards/DatingCards";
import { AuthContext } from "../../context/Auth";

export const Main = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {isAuthenticated ?? (
        <>
          {isAuthenticated && <DatingCards />}
          {!isAuthenticated && <div>Sign In to interact</div>}
        </>
      )}
    </>
  );
};
