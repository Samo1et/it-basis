import { red,purple } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { RedeemSharp } from '@material-ui/icons';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: red[500],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    }
  },
});

export default theme;
