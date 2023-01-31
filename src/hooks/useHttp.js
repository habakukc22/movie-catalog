import { useState, useEffect } from "react";
const myKey = "0f2b38bc79199925ea745449cbd43368";
let defaultURL = "https://api.themoviedb.org/3";

const useHttp = (sliceURL) => {
  const [data, setData] = useState(null);

  let url = defaultURL + sliceURL + `&api_key=${myKey}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, [url]);

  return data;
};

export default useHttp;
