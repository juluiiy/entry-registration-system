import { Box, Typography } from "@mui/material";
import DataTable from "../../containers/application-table";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <Box sx={{ display: "flex", gap: 4, px: 3 }}>
        <Box sx={{ maxWidth: "400px", maxHeight: "400px" }}>
          <img
            src="https://albertasafetyfirst.ca/wp-content/uploads/bb-plugin/cache/Fotolia_106071621_Subscription_Yearly_XXL_PLUS-square.jpg"
            alt="user avatar"
          />
        </Box>
        <Box>
          <Typography variant="h5">Гецянин Євгеній Григорійович</Typography>
          <Box sx={{ display: "flex", gap: 3, color: "grey.600" }}>
            <Typography variant="subtitle2">
              eugene.hetsyanyn@gmail.com
            </Typography>
            <Typography variant="subtitle2">+380969339369</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <DataTable />
      </Box>
    </Box>
  );
};

export default Home;
