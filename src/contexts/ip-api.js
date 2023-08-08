import React from 'react';
import { useState } from 'react';
import IPTrackerContext from './ip-info';

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
      url = `https://geo.ipify.org/api/v1?apiKey=at_kK7qCqlfzRbeZQKVXdhs7e6gIrx5b&ipAddress=${ip}&domain=${ip}`;
    } else {
      url = `https://geo.ipify.org/api/v1?apiKey=at_kK7qCqlfzRbeZQKVXdhs7e6gIrx5b`;
    }
    const fetchData = async () => {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(res.status);
      }

      const resData = await res.json();

      setTrackerData({
        ipAddress: resData.ip,
        city: `${resData.location.region}, ${resData.location.city}`,
        timeZone: `UTC ${resData.location.timezone}`,
        isp: resData.isp,
        location: [resData.location.lat, resData.location.lng],
        error: false,
        isLoading: false,
      });
    };

    try {
      await fetchData();
    } catch (error) {
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
