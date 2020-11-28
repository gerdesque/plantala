import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import FundamentalBrigadeSchlank from './Fundamental_Brigade_Schlank.ttf';

const fundamentalBrigadeSchlank = {
  fontFamily: 'FundamentalBrigadeSchlank',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('FundamentalBrigadeSchlank'),
    url(${FundamentalBrigadeSchlank}) format('truetype')
  `,
};

export let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#D6E7E4',
      main: '#9EC6BF',
    },
    secondary: {
      main: '#992572',
      light: '#CD58A1'
    },
  },
  typography: {
    fontFamily: 'FundamentalBrigadeSchlank, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [fundamentalBrigadeSchlank],
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
