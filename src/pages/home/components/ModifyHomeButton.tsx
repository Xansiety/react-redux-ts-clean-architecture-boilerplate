import { modifyUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";

export const ModifyHomeButton = () => {
  const dispatch = useDispatch();

  const dispatchAction = () => { 
      // dispatch(modifyUser({ name: "Xansiety", id: 1, email: "test@test.com" } as User)); 
      dispatch(modifyUser({ name: "Xansiety - Only name updated"}));
  };

  // Execute dispatchAction only once on component mount
  //   useEffect(() => {
  //     dispatchAction();
  //   }, []);
  return (
    <button onClick={dispatchAction}>
      Dispatch Action Modify user - Only Name updated
    </button>
  );
};
