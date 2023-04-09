import axios from "axios";
import { BASE_URL } from "@/config";
import { BackendApiUser } from "@/models";
import { RickAndMortyAdapter } from "@/adapters";
import { loadAbort } from "@/utilities";
export const rickAndMortyUrl = `${BASE_URL}`;

export const fetchRickAndMorty = async (url: string) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data: BackendApiUser) => RickAndMortyAdapter(data));
};

// if you execute this call, when component is unmounted, the request continues, and you get an error because the component is unmounted and the state is not set in empty component
export const getMorty = () => {
  return axios.get<BackendApiUser>(
    "https://rickandmortyapi.com/api/character/2"
  );
};

// if you execute this call, when component is unmounted, the request continues, and you get an error because the component is unmounted and the state is not set in empty component
export const getRick = () => {
  return axios.get<BackendApiUser>(
    "https://rickandmortyapi.com/api/character/1"
  );
};

export const getCoolMorty = () => {
  const controller = loadAbort();
  return {
    call: axios.get<BackendApiUser>(
      "https://rickandmortyapi.com/api/character/2",
      {
        // send a signal to the request to abort it
        signal: controller.signal,
      }
    ),
    controller,
  };
};

export const getCoolRick = () => {
  const controller = loadAbort();
  return {
    call: axios.get<BackendApiUser>(
      "https://rickandmortyapi.com/api/character/1",
      {
        // send a signal to the request to abort it
        signal: controller.signal,
      }
    ),
    controller,
  };
};
