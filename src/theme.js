import { createTheme } from "@material-ui/core/styles";
import teal from '@material-ui/core/colors/teal';
import purple from '@material-ui/core/colors/purple';

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: purple,
  },
});

export default theme;
