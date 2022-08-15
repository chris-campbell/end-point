import { useState, useEffect, useLayoutEffect, useRef } from "react";

const useCoordinates = () => {
  const [userCoordinates, setUserCoordinates] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    userLocation().then(() => {
      setIsLoading(false);
    });
  }, []);

  const userLocation = async () => {
    try {
      const coords = await getLocationPromise;
      setUserCoordinates(coords);
    } catch (error) {
      console.log(error);
    }
  };

  return { userCoordinates, isLoading };
};

export default useCoordinates;

let getLocationPromise = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      resolve({ latitude: lat, longitude: lng });
    });
  } else {
    resolve("Your browser doesnt support geolocation api");
  }
});
