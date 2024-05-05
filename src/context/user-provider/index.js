import { createContext, useCallback, useContext, useState } from "react";

const ProfileContext = createContext();

const ProfileProvider = ({ children, initialValues }) => {
  const [generalData, setGeneralData] = useState({
    data: initialValues,
    errors: undefined,
  });

  const profileData = {
    generalData: generalData,
  };

  const handleProfileData = useCallback((data, errors) => {
    setGeneralData((prev) => ({
      data: { ...prev.data, ...data },
      errors,
    }));
  }, []);

  return (
    <ProfileContext.Provider value={{ profileData, handleProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfileContext = () => useContext(ProfileContext);

export { ProfileProvider, useProfileContext };
