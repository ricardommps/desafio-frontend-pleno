import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export const WrapSlider = styled.div`
  position: relative;
  text-align: center;
  margin-top: 5rem;
`;

const SliderCard = ({ children, settings }) => {
  return (
    <WrapSlider>
      <Slider {...settings}>{children}</Slider>
    </WrapSlider>
  );
};

export default SliderCard;
