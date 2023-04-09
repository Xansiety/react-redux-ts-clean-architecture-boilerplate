import { useAsync, useFetchAndLoad } from "@/hooks";
import { getCoolMorty } from "@/services";
import { useState } from "react";
import { RickAndMortyAdapter } from "@/adapters";
import { BackendApiUser, User } from "@/models";
import { BannerExperience } from "@/components";

export default function MortyPage() {
  // call custom hook
  const { loading, callEndpoint } = useFetchAndLoad();
  const [morty, setMorty] = useState<User>({} as User);
  const getApiData = async () => await callEndpoint(getCoolMorty());

  const adaptMorty = (data: BackendApiUser) => {
    setMorty(RickAndMortyAdapter(data));
  };

  useAsync(getApiData, adaptMorty, () => {});

  return (
    <div>
      {loading ? (
        "LOADING"
      ) : (
        <div>
          <BannerExperience />
          <p>User info with adapter </p>
          {JSON.stringify(morty, null, 2)}
        </div>
      )}
    </div>
  );
}
