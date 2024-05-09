import { Box, Typography } from "@mui/material";
import DataTable from "../../containers/application-table";
import PersonIcon from "@mui/icons-material/Person";
import { styles } from "./styles";
import CreateNmtInfo from "../../containers/create-nmt-info";
import { useUserStore } from "../../store/user";

const Home = () => {
  const { user } = useUserStore();

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
      <Box sx={styles.applicationBox}>
        <Typography variant="h5"> Список поданих заявок</Typography>
        <DataTable />
      </Box>
    </Box>
  );
};

export default Home;
