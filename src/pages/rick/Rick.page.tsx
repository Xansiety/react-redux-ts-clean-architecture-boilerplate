import { BannerExperience } from "@/components";
import { useAsync, useFetchAndLoad } from "@/hooks";
import { getCoolRick } from "@/services";
import { useState } from "react";

export default function RickPage() {
  // call custom hook
  const { loading, callEndpoint } = useFetchAndLoad();
  const [morty, setMorty] = useState(null);
  const getApiData = async () => await callEndpoint(getCoolRick());

  const adaptRick = (data: any) => {
    setMorty(data);
  };

  useAsync(getApiData, adaptRick, () => {});

  return (
    <div>
      {loading ? (
        "LOADING"
      ) : (
        <div>
          <BannerExperience />
          <p>User info without adapter </p>
          {JSON.stringify(morty, null, 2)}
        </div>
      )}
    </div>
  );
}
