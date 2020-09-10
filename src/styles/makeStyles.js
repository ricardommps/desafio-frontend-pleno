import { makeStyles as makeStylesWithoutDefault } from '@material-ui/styles';
import defaultTheme from './defaultTheme';

const makeStyles = (stylesOrCreator, options = {}) =>
  makeStylesWithoutDefault(stylesOrCreator, {
    defaultTheme,
    ...options,
  });

export default makeStyles;
