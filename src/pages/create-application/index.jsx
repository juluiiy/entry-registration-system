import { Box, Typography } from "@mui/material";
import MotivationLetter from "../../containers/motivation-letter";
import { useState } from "react";
import NmtAutocomplete from "../../components/nmt-autocmplete";

const CreateApplication = () => {
  const [application, setApplication] = useState({
    nmtResults: [],
    error: "",
    motivationLetter: "",
  });

  const handleNmtChange = (event, newValue) => {
    if (newValue.length <= 3) {
      setApplication((prevState) => ({
        ...prevState,
        nmtResults: newValue,
        error: "",
      }));
    } else {
      setApplication((prevState) => ({
        ...prevState,
        error: "Не можна вибрати більше 3 предметів",
      }));
    }
  };

  const handleMotivationLetterChange = (value) => {
    setApplication((prevState) => ({
      ...prevState,
      motivationLetter: value,
    }));
  };

  return (
    <Box sx={{ display: "flex ", flexDirection: "column", gap: 2 }}>
      <Typography variant="h4">Створити заявку</Typography>
      <NmtAutocomplete
        application={application}
        handleNmtChange={handleNmtChange}
      />
      <MotivationLetter
        setValue={handleMotivationLetterChange}
        value={application.motivationLetter}
      />
    </Box>
  );
};

export default CreateApplication;
