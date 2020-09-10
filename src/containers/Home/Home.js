import React, { useState, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import Movies from 'containers/Movies';
import Character from 'containers/Characters';
import NavBar from 'components/NavBar';
import { setSearchTerm } from './homeActions';

const Home = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    dispatch(setSearchTerm(filter));
  }, [filter, dispatch]);

  return (
    <NavBar handleChange={handleChangeFilter}>
      <Movies filter={filter} />
      <Character filter={filter} />
    </NavBar>
  );
};

export default memo(Home);
