import React, { createContext, useState,useContext  } from 'react';

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);

 
  const addTimelineEntry = (entry) => {
    setTimelineData((prev) => [entry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timelineData, addTimelineEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTimeline = () => useContext(TimelineContext);