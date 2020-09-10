import React from 'react';
import styled from 'styled-components';

export const Arrow = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding-right: 4px;
  padding-top: 17px;
  width: 51px;
  height: 51px;
  border-radius: 70px;
  cursor: pointer;
  display: block;
  position: absolute;
  top: calc(33%);
  width: 3.5rem;
  height: 3.5rem;
  z-index: 2;
  &.-prev {
    left: -1.2rem;
    &::before {
      content: '';
    }
  }

  &.-next {
    right: -1.2rem;
    &::before {
      content: '';
    }
  }
`;

const ArrowButton = ({ className, onClick, icon }) => (
  <Arrow className={className} onClick={onClick}>
    <img src={icon} alt="Arrow" />
  </Arrow>
);

export default ArrowButton;
