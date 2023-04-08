import { User } from "@/models";
import { createUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";

export const CreateHomeButton = () => {
  const dispatch = useDispatch();

  const dispatchAction = () => {
    // setTimeout(() => {
      dispatch(createUser({ name: "John", id: 1, email: "test@test.com" } as User));
    // }, 2000);
  };

  // Execute dispatchAction only once on component mount
  //   useEffect(() => {
  //     dispatchAction();
  //   }, []);
  return (
    <button onClick={dispatchAction}>
      Dispatch Action Create user 
    </button>
  );
};
