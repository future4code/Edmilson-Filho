import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor } from './colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: '#fff'
        }
    }
})

export default theme;