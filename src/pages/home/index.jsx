import { Box, Button, Typography } from "@mui/material";
import ApplicationTable from "../../containers/application-table";
import PersonIcon from "@mui/icons-material/Person";
import { styles } from "./styles";
import CreateNmtInfo from "../../containers/create-nmt-info";
import { useUserStore } from "../../store/user";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useUserStore();

  const applicationsOrLink = user.applications.length ? (
    <>
      <Typography variant="h5"> Список поданих заявок</Typography>
      <ApplicationTable rows={user.applications} />
    </>
  ) : (
    <Box sx={styles.noApplications}>
      <Typography variant="h5">Ви ще не подали жодної заявки</Typography>
      <Link to="create-application">
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
