import { withStyles as withStylesWithoutDefault } from '@material-ui/styles';
import defaultTheme from './defaultTheme';

const withStyles = (stylesOrCreator, options) =>
  withStylesWithoutDefault(stylesOrCreator, {
    defaultTheme,
    ...options,
  });

export default withStyles;
