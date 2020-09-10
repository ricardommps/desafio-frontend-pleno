import React, { memo } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'styles/withStyles';
import makeStyles from 'styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import colors from 'styles/colors';
import removeProps from 'utils/removeProps';

const StyledTypography = withStyles(theme => ({
  root: {
    ...theme.typography.fontRegular,
    maxWidth: '100%',
    lineHeight: '1.4',
  },
}))(Typography);

export const TypographyComponent = React.forwardRef(({ className, ...props }, ref) => {
  const classes = useStyles(props);
  const listRemove = ['color', 'lineHeight'];

  return (
    <StyledTypography
      ref={ref}
      className={`${classes.root} ${className}`}
      {...removeProps(props, listRemove)}
    />
  );
});

const useStyles = makeStyles(theme => ({
  root: props => {
    const typography = `font${props.weight.charAt(0).toUpperCase()}${props.weight.slice(1)}`;

    return {
      fontSize: props.size,
      color: theme.colors[props.color],
      lineHeight: props.lineHeight,
      ...theme.typography[typography],
    };
  },
}));

TypographyComponent.propTypes = {
  /** Tamanho da fonte */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Espessura do texto */
  weight: PropTypes.oneOf(['light', 'semilight', 'regular', 'semibold', 'bold']),
  /** Cor do texto */
  color: PropTypes.oneOf(Object.keys(colors)),
  /** Altura da linha de texto */
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Alinhamento do texto */
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  /** Informa se o texto não será quebrado, mas será truncado com reticências. */
  noWrap: PropTypes.bool,
  /** Aplica os estilos de tipografia do tema. */
  variant: PropTypes.string,
  /** Informa o componente usado para o nó raiz. */
  component: PropTypes.any,
};

TypographyComponent.defaultProps = {
  size: 12,
  weight: 'regular',
  noWrap: false,
  align: 'inherit',
};

export default memo(TypographyComponent);
