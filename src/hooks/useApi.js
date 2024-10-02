import { useEffect, useState } from "react";

function useApi(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);
  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setLoadError(null)
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if(!ignore) {
            setData(json);
            setLoading(false);
        }
      
      })
      .catch((err) => {
        ignore(true);
        setLoadError(err);
        setLoading(false);
      });
  }, [url]);

  return {data, loadError, loading};
}

export default useApi;


