import { Box, Typography } from "@mui/material";
import MotivationLetter from "../../containers/motivation-letter";
import NmtAutocomplete from "../../components/nmt-autocmplete";
import SpecialitiesTable from "../../components/specialities-table";

const CreateApplication = () => {
  return (
    <Box sx={{ display: "flex ", flexDirection: "column", gap: 5 }}>
      <Typography variant="h4" textAlign="center">
        Створити заявку
      </Typography>
      <SpecialitiesTable />
      <NmtAutocomplete />
      <MotivationLetter />
    </Box>
  );
};

export default CreateApplication;
