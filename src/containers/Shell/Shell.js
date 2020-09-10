import React, { memo } from 'react';
import NavBar from 'components/NavBar';
const Shell = ({ handleFilter, children }) => {
  return (
    <>
      <NavBar handleFilter={handleFilter} />
      <main style={{ gridArea: 'main' }}>{children}</main>
    </>
  );
};

export default memo(Shell);
