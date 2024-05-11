import { Box, Button, Typography } from "@mui/material";
import MotivationLetter from "../../containers/motivation-letter";
import NmtAutocomplete from "../../components/nmt-autocmplete";
import SpecialtiesTable from "../../components/specialties-table";
import { useUserStore } from "../../store/user";
import { useCreateApplicationStore } from "../../store/createApplication";
import toast from "react-hot-toast";

const CreateApplication = () => {
  const { application } = useCreateApplicationStore();
  const { user } = useUserStore();
  console.log(user.nmtResults, "asdasd");

  const handleSubmit = () => {
    const { specialty, nmtResults, motivationLetter } = application;

    if (!specialty || nmtResults.length < 3 || !motivationLetter) {
      toast.error("Please complete all fields before submitting.");
      return;
    } else {
      user.applications.push({ ...application, id: "1" });
      console.log(user.applications);
      toast.success("Application submitted successfully.");
    }
  };

  return (
    <Box sx={{ display: "flex ", flexDirection: "column", gap: 5 }}>
      <Typography variant="h4" textAlign="center">
        Створити заявку
      </Typography>
      <SpecialtiesTable />
      <NmtAutocomplete value={user.nmtResults} />
      <MotivationLetter />
      <Box onClick={handleSubmit}>
        <Button variant="contained">Відправити заявку</Button>
      </Box>
    </Box>
  );
};

export default CreateApplication;
