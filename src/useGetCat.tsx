import { useEffect, useState } from "react";

const useGetCat = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getCat = async () => {
    setIsLoading(true);

    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();

    if (response.ok) {
      setUrl(data[0].url);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getCat();
  }, []);

  return {
    url,
    isLoading,
    getCat,
  };
};

export default useGetCat;
