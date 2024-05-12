import { Box, Button, Link, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import ApplicationTable from "../../containers/application-table";
import CreateNmtInfo from "../../containers/create-nmt-info";
import { useUserStore } from "../../store/user";
import { styles } from "./styles";

const Home = () => {
  const { user } = useUserStore();

  const applicationsOrLink = user.applications.length ? (
    <>
      <Typography variant="h5" textAlign="center">
        Список поданих заявок
      </Typography>
      <ApplicationTable rows={user.applications} />
      {user.applications.length < 5 ? (
        <Link href="/create-application" sx={styles.createApplicationButton}>
          <Button sx={styles.createApplicationButton} variant="contained">
            Створити ще 1 заявку
          </Button>
        </Link>
      ) : (
        <Typography variant="h6" color="primary" textAlign="center">
          Ви подали максимальну кількість заявок
        </Typography>
      )}
    </>
  ) : (
    <Box sx={styles.noApplications}>
      <Typography variant="h5">Ви ще не подали жодної заявки</Typography>
      <Link href="/create-application">
        <Button variant="outlined" size="large">
          Зробіть це!
        </Button>
      </Link>
    </Box>
  );

  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.innerBox}>
        <Box sx={styles.iconBox}>
          <PersonIcon sx={styles.icon} />
        </Box>
        <Box sx={styles.typographyBox}>
          <Typography variant="h5">{user.username}</Typography>
          <Box sx={styles.infoBox}>
            <Box sx={styles.infoItem}>
              <Typography color="grey.600">Пошта:</Typography>
              <Typography>{user.email}</Typography>
            </Box>
            <Box sx={styles.infoItem}>
              <Typography color="grey.600">Номер телефону:</Typography>
              <Typography>{user.phoneNumber}</Typography>
            </Box>
          </Box>
          <CreateNmtInfo />
        </Box>
      </Box>
      <Box sx={styles.applicationBox}>{applicationsOrLink}</Box>
    </Box>
  );
};

export default Home;
