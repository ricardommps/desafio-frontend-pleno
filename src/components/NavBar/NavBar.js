import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from 'styles/makeStyles';
import styled from 'styled-components';
import image from 'assets/image.svg';
import Typography from 'components/Typography';

const useStyles = makeStyles(theme => ({
  title: {
    background: '-webkit-linear-gradient(64.17deg, #FF5A56 15.66%, #FF9A42 83.04%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  },
  search: {
    position: 'relative',
    borderRadius: '4px;',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    marginRight: '16px',
    marginLeft: 0,
    width: '290px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '24px',
      width: '514px',
    },
  },
  searchIcon: {
    padding: '0px 16px;',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '8px 8px 8px 0px;',
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    width: '290px',
    [theme.breakpoints.up('md')]: {
      width: '400px;',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

const SearchHeader = styled.div`
  width: 100%;
  height: 300px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  z-index: 0;
  background-position: center;
  background-size: cover;
`;

const Section = styled.section`
  text-align: center;
  width: 100%;
  height: 300px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  z-index: 0;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  background-image: url(${props => props.img});
`;

const NavBar = ({ handleChange, children }) => {
  const classes = useStyles();
  return (
    <>
      <header>
        <SearchHeader data-type="search-header-posts">
          <Section img={image}>
            <div>
              <Typography size={42} className={classes.title}>
                Star Wars movies
              </Typography>
              <div className={classes.search} style={{ margin: 'auto', display: 'block' }}>
                <OutlinedInput
                  id="outlined-adornment-password"
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" edge="end">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </div>
            </div>
          </Section>
        </SearchHeader>
      </header>
      <main style={{ gridArea: 'main' }}>{children}</main>
    </>
  );
};

export default NavBar;
