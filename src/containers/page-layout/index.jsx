import { Container } from "@mui/material";
import { styles } from "./styles";
const PageLayout = ({ children, maxWidth }) => {
  return (
    <Container maxWidth={maxWidth} sx={styles}>
      {children}
    </Container>
  );
};

export default PageLayout;
