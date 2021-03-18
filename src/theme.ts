import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
  palette: {
  }
});

theme = responsiveFontSizes(theme);

export default theme;
