import { User, UserEmptyState } from "@/models";
import { createUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";
import { fetchRickAndMorty, rickAndMortyUrl } from "../services";
import { useState, useEffect } from 'react';

export const CreateHomeButton = () => {
  const dispatch = useDispatch();
  const [morty, setMorty] = useState<User>(UserEmptyState);

  const getMorty = async () => {
    const result = await fetchRickAndMorty(`${rickAndMortyUrl}/character/2`);
    setMorty(result);    
  }

  useEffect(() => {
    getMorty();
  }, []);

  const dispatchAction = () => { 
      dispatch(createUser(morty)); 
  }; 

  return (
    <button onClick={dispatchAction}>
      Dispatch Action Set and Create user  API Response
    </button>
  );
};
