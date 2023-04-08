import { resetUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";

export const ResetHomeButton = () => {
  const dispatch = useDispatch();
  const dispatchAction = () => { 
      dispatch(resetUser()); 
  }; 
  return (
    <button onClick={dispatchAction}>
      Dispatch Action Reset user
    </button>
  );
};
