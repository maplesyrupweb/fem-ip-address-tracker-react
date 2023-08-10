import React from 'react';
import { useState } from 'react';
import IPTrackerContext from './ip-tracker-context';

const IPAPIContextProvider = (props) => {
  const [trackerData, setTrackerData] = useState({
    ipAddress: '176.100.43.156',
    city: 'Vancouver, British Columbia',
    timeZone: 'UTC -07:00',
    isp: 'PacketHub S.A.',
    location: [34.04915, -118.09462],
    error: false,
    isLoading: true,
  });

  const searchIP = async (ip) => {
    setTrackerData((prevState) => {
      return { ...prevState, error: false, isLoading: true };
    });

    let url;

    if (ip) {

      // 185.219.141.238
      //176.100.43.105
      url = `https://ipapi.co/${ip}/json`;
    } else {
      
      url = `https://ipapi.co/json/`;
      console.log(url);
      

    }
    const fetchData = async () => {
      const res = await fetch(url);

      if (!res.ok) {
        console.log("!res.ok");
        throw new Error(res.status);
      }

      const resData = await res.json();
      console.log("set tracking data");
      console.log(resData.ip);
      console.log(resData.city);
      console.log(resData.region);
      console.log(resData.utc_offset);
      console.log(resData.org);
      console.log(resData.latitude);
      console.log(resData.longitude);
      
      setTrackerData({
        ipAddress: resData.ip,
        city: `${resData.city}, ${resData.region}`,
        timeZone: `UTC ${resData.timezone}`,
        isp: resData.org,
        location: [resData.latitude, resData.longitude],
        error: false,
        isLoading: false,
      });
    };

    try {
      await fetchData();
    } catch (error) {
      console.log("error");
      setTrackerData((prevState) => {
        return { ...prevState, error: true };
      });
      return;
    }
  };

  return (
    <IPTrackerContext.Provider
      value={{
        ipAddress: trackerData.ipAddress,
        city: trackerData.city,
        timeZone: trackerData.timeZone,
        isp: trackerData.isp,
        location: trackerData.location,
        error: trackerData.error,
        isLoading: trackerData.isLoading,
        searchIP: searchIP,
      }}
    >
      {props.children}
    </IPTrackerContext.Provider>
  );
};

export default IPAPIContextProvider;
