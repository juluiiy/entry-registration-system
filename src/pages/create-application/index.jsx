import toast from "react-hot-toast";
import { Box, Button, Stack, Typography } from "@mui/material";

import MotivationLetter from "../../containers/motivation-letter";
import NmtAutocomplete from "../../components/nmt-autocmplete";
import SpecialtiesTable from "../../components/specialties-table";

import { useUserStore } from "../../store/user";
import { useCreateApplicationStore } from "../../store/createApplication";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import applicationService from "../../services/application";
import { userService } from "../../services/user";

const CreateApplication = () => {
  const { application } = useCreateApplicationStore();
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.nmtResults.length < 3 || user.applications.length > 4) {
      toast.error(
        user.nmtResults.length < 3
          ? "Будь ласка, заповніть результати НМТ перед створенням заявки."
          : "Максимальна кількість предметів - 5"
      );

      navigate("/");
    }
  }, [navigate, user.nmtResults.length, user.applications.length]);

  const handleSubmit = () => {
    const { specialtyId, nmtResults, motivationLetter } = application;

    if (!specialtyId || nmtResults.length < 3 || !motivationLetter) {
      toast.error("Будь ласка заповніть всі поля!");
      return;
    } else {
      applicationService
        .addApplication(application, user.id)
        .then(() => {
          userService
            .getUserById(user.id)
            .then((updatedUser) => {
              setUser(updatedUser);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          navigate("/");
          toast.success("Заявка успішно створена!");
        });
    }
  };

  return (
    <Stack spacing={5}>
      <Typography variant="h4" textAlign="center">
        Створити заявку
      </Typography>
      <SpecialtiesTable />
      <NmtAutocomplete value={user.nmtResults} />
      <MotivationLetter />
      <Box onClick={handleSubmit}>
        <Button variant="contained">Відправити заявку</Button>
      </Box>
    </Stack>
  );
};

export default CreateApplication;
