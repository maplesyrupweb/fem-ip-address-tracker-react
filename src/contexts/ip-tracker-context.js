import { createContext } from 'react';

const IPTrackerContext = createContext({
  ipAddress: '',
  city: '',
  timeZone: '',
  isp: '',
  location: [0, 0],
  error: false,
  isLoading: true,
  searchIP: () => {},
});

export default IPTrackerContext;
