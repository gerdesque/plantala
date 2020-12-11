import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import Proletarsk from './assets/fonts/Proletarsk.ttf';

const proletarsk = {
  fontFamily: 'Proletarsk',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Proletarsk'),
    url(${Proletarsk}) format('truetype')
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
    fontFamily: 'Proletarsk, Arial',
    button: {
      textTransform: 'none'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [proletarsk],
      },
    },
    MuiSlider: {
      root: {
        color: '#52af77',
        height: 8,
      },
      thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
          boxShadow: 'inherit',
        },
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 4px)',
      },
      track: {
        height: 8,
        borderRadius: 4,
      },
      rail: {
        height: 8,
        borderRadius: 4,
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
