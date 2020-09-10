import colors from './colors';
import typography from './constants/typography';
import transitions from '@material-ui/core/styles/transitions';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

export default {
  colors,
  typography,
  transitions,
  validatorProps: (props, themeFont, key, defaultValue) =>
    (themeFont[props.size || 'default'] && themeFont[props.size || 'default'][key]) || defaultValue,
  breakpoints: createBreakpoints({}),
};
