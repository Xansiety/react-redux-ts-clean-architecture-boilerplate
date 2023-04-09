import { useAsync, useFetchAndLoad } from "@/hooks";
import { getCoolMorty } from '@/services';
import { useState } from "react";

export default function MortyPage() {
  // call custom hook
  const { loading, callEndpoint } = useFetchAndLoad();
  const [morty, setMorty] = useState(null);
  const getApiData = async () => await callEndpoint(getCoolMorty());

  const adaptMorty = (data: any) => {
    setMorty(data);
  };

  useAsync(getApiData, adaptMorty, () => {});

  return <div>{loading ? "LOADING" : JSON.stringify(morty, null, 2)}</div>;
}
