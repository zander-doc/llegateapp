import React, { createContext, useContext, useState, ReactNode } from "react";

interface DataSaverContextType {
  isDataSaverEnabled: boolean;
  toggleDataSaver: () => void;
}

const DataSaverContext = createContext<DataSaverContextType | undefined>(undefined);

export const DataSaverProvider = ({ children }: { children: ReactNode }) => {
  const [isDataSaverEnabled, setIsDataSaverEnabled] = useState(false);
  const toggleDataSaver = () => setIsDataSaverEnabled((prev) => !prev);
  return (
    <DataSaverContext.Provider value={{ isDataSaverEnabled, toggleDataSaver }}>
      {children}
    </DataSaverContext.Provider>
  );
};

export const useDataSaver = () => {
  const ctx = useContext(DataSaverContext);
  if (!ctx) throw new Error("useDataSaver must be used within DataSaverProvider");
  return ctx;
};
