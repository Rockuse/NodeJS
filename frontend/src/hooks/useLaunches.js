import { useCallback, useEffect, useState } from "react";
// import axios from 'axios';
import {
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
  httpsuccessLaunch,
} from './requests';

function useLaunches(onSuccessSound, onAbortSound, onFailureSound) {
  const [launches, saveLaunches] = useState([]);
  const [isPendingLaunch, setPendingLaunch] = useState(false);

  const getLaunches = useCallback(async () => {
    const fetchedLaunches = await httpGetLaunches();
    saveLaunches(fetchedLaunches);
  }, []);

  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  const submitLaunch = useCallback(async (e) => {
    e.preventDefault();
    setPendingLaunch(true);
    const data = new FormData(e.target);
    const launchDate = new Date(data.get("launch-day"));
    const mission = data.get("mission-name");
    const rocket = data.get("rocket-name");
    const target = data.get("planets-selector");
    const customers = data.get("customer-name");
    const response = await httpSubmitLaunch({
      launchDate,
      mission,
      rocket,
      target,
      customers,
    });

    // TODO: Set success based on response.
    // const await axios.post()
    const success = response.ok;
    if (success) {
      getLaunches();
      setTimeout(() => {
        setPendingLaunch(false);
        onSuccessSound();
      }, 800);
    } else {
      setTimeout(() => {
        setPendingLaunch(false);
      }, 800);
      onFailureSound();
    }
  }, [getLaunches, onSuccessSound, onFailureSound]);

  const abortLaunch = useCallback(async (id) => {
    const response = await httpAbortLaunch(id);
    console.log(response)
    // TODO: Set success based on response.
    const success = response.ok;
    if (success) {
      await getLaunches();
      onAbortSound();
    } else {
      onFailureSound();
    }
  }, [getLaunches, onAbortSound, onFailureSound]);

  const successLaunch = useCallback(async (id) => {
    const response = await httpsuccessLaunch(id);
    console.log(response)
    // TODO: Set success based on response.
    const success = response.ok;
    if (success) {
      await getLaunches();
      onAbortSound();
    } else {
      onFailureSound();
    }
  }, [getLaunches, onAbortSound, onFailureSound]);

  return {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
    successLaunch,
  };
}

export default useLaunches;