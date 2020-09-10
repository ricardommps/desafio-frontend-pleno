import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from 'components/Typography';
import SliderCard from 'components/Slider';
import MediaCard from 'components/Card';
import { settingsCard } from 'utils/sliderSettings';
import { getFilms } from './moviesActions';

const Movies = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.movies);
  const { movies } = data;

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  return (
    <div>
      <Typography color="themePrimary" size={26}>
        Movies
      </Typography>
      {movies?.results.length > 3 ? (
        <SliderCard settings={settingsCard}>
          {movies?.results.map(item => (
            <MediaCard movie={item} />
          ))}
        </SliderCard>
      ) : (
        <>
          {movies?.results.map(item => (
            <MediaCard movie={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default memo(Movies);
