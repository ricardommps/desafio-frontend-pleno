import React from 'react';
import iconLeft from 'assets/left-icon.svg';
import iconRight from 'assets/right-icon.svg';
import ArrowButton from 'components/ArrowButton';

export const settingsCard = {
  className: 'slider variable-width',
  infinite: true,
  centerMode: true,
  centerPadding: '0px',
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <ArrowButton icon={iconRight} className="-prev" />,
  prevArrow: <ArrowButton icon={iconLeft} className="-next" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const settingsPaper = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <ArrowButton icon={iconRight} className="-prev" />,
  prevArrow: <ArrowButton icon={iconLeft} className="-next" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
