import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from 'components/Typography';
import SliderCard from 'components/Slider';
import Paper from 'components/Paper';
import { settingsCard } from 'utils/sliderSettings';
import { getPeoples } from './charactersActions';

const Character = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.character);
  const { characters } = data;

  useEffect(() => {
    dispatch(getPeoples());
  }, [dispatch]);
  return (
    <div>
      <Typography color="themePrimary" size={26}>
        Characters
      </Typography>
      {characters?.results.length > 3 ? (
        <SliderCard settings={settingsCard}>
          {characters?.results.map(item => (
            <Paper people={item} />
          ))}
        </SliderCard>
      ) : (
        <>
          {characters?.results.map(item => (
            <Paper people={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default memo(Character);
