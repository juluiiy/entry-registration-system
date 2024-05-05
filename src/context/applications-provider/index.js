import { createContext, useCallback, useContext, useState } from "react";

const ApplicationsContext = createContext();

const ApplicationsProvider = ({ children, initialValues }) => {
  const [applicationsData, setApplicationsData] = useState({
    data: initialValues,
    errors: undefined,
  });

  const applications = {
    applicationsData: applicationsData,
  };

  const handleApplicationsData = useCallback((data, errors) => {
    setApplicationsData((prev) => ({
      data: { ...prev.data, ...data },
      errors,
    }));
  }, []);

  return (
    <ApplicationsContext.Provider
      value={{ applications, handleApplicationsData }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
};

const useApplicationsContext = () => useContext(ApplicationsContext);

export { ApplicationsProvider, useApplicationsContext };
