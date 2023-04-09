import { BackendApiUser, User } from "@/models";

export const RickAndMortyAdapter = (user: BackendApiUser): User => {
  return {
    id: user.id,
    name: user.name,
    status: user.status,
    species: user.species,
  };
};
