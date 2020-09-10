import React from 'react';
import { FormattedDate } from 'react-intl';
import withStyles from 'styles/withStyles';
import makeStyles from 'styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from 'components/Typography';
import moviesImg from 'assets/movies.svg';
import chairIicon from 'assets/chair-director-icon.svg';
import calendarIcon from 'assets/calendar-icon.svg';
import styled from 'styled-components';

const CardFooter = styled.div`
  text-align: initial;
  padding: 15px;
  line-height: 14px;
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 311,
    height: '401px',
  },
  media: {
    height: 140,
    borderBottom: '6px solid',
    borderImageSource: 'linear-gradient(270deg, #EB5757 0.91%, #F2994A 98.98%)',
    borderImageSlice: 1,
  },
  textFooter: {
    paddingLeft: '5px',
  },
  cardAction: {
    paddingTop: '35px',
  },
});

const StyledCardContent = withStyles({
  root: {
    textAlign: 'justify',
    height: 165,
    overflow: 'hidden',
  },
})(CardContent);

const MediaCard = ({ movie }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={moviesImg} title="Contemplative Reptile" />
        <StyledCardContent>
          <Typography color="themePrimary" size={26}>
            {movie?.title}
          </Typography>
          <Tooltip title={movie.opening_crawl} aria-label={movie.opening_crawl}>
            <Typography color="themeDark" size={12} style={{ lineHeight: 'inherit' }}>
              {movie.opening_crawl}
            </Typography>
          </Tooltip>
        </StyledCardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <CardFooter>
          <div style={{ display: 'flex', paddingBottom: '5px' }}>
            <img src={chairIicon} alt="chairIicon" />
            <Typography color="themeDark" size={12} weight="bold" className={classes.textFooter}>
              {movie.director}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <img src={calendarIcon} alt="calendarIcon" />
            <Typography color="themeDark" size={12} weight="bold" className={classes.textFooter}>
              <FormattedDate
                key="release_date"
                day="2-digit"
                month="2-digit"
                year="numeric"
                value={movie.release_date}
              />
            </Typography>
          </div>
        </CardFooter>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
