import { Box, Typography } from "@mui/material";
import DataTable from "../../containers/application-table";
import PersonIcon from "@mui/icons-material/Person";
import { styles } from "./styles";
import CreateNmtInfo from "../../containers/create-nmt-info";

const Home = () => {
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.innerBox}>
        <Box sx={styles.iconBox}>
          <PersonIcon sx={styles.icon} />
        </Box>
        <Box sx={styles.typographyBox}>
          <Typography variant="h5">Гецянин Євгеній Григорійович</Typography>
          <Box sx={styles.infoBox}>
            <Box sx={styles.infoItem}>
              <Typography color="grey.600">Пошта:</Typography>
              <Typography>eugene.hetsyanyn@gmail.com</Typography>
            </Box>
            <Box sx={styles.infoItem}>
              <Typography color="grey.600">Номер телефону:</Typography>
              <Typography>+380 67 123 45 67</Typography>
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
