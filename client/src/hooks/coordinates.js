import { useState, useEffect, useLayoutEffect, useRef } from "react";
import useErrors from "./useErrors";

const useCoordinates = () => {
  const [userCoordinates, setUserCoordinates] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { setError } = useErrors();

  useEffect(() => {
    setIsLoading(true);
    userLocation().then(() => {
      setIsLoading(false);
    });
  }, []);

  const userLocation = async () => {
    try {
      const coords = await getLocationPromise;

      console.log(coords);
      setUserCoordinates(coords);
    } catch (error) {
      setError(error);
    }
  };

  return { userCoordinates, isLoading };
};

export default useCoordinates;

let getLocationPromise = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    console.log({ navigator });
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      resolve({ latitude: lat, longitude: lng });
    });
  } else {
    resolve("Your browser doesnt support geolocation api");
  }
});
