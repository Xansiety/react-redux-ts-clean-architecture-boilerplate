import { BASE_URL } from "@/config";
import { RickAndMortyAdapter } from "../adapter";
import { BackendApiUser } from "@/models";
export const rickAndMortyUrl = `${BASE_URL}`;

export const fetchRickAndMorty = async (url: string) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data: BackendApiUser) => RickAndMortyAdapter(data));
};
