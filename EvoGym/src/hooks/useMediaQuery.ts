import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Si las pantallas coinciden se setea el estado en true
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // El listener ira diciendo si los estados de las pantallas coinciden
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);

    // Se eliminar el event listener antes de desmontar el comp
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
