import React, {useState} from 'react';
import {InfoUserC} from './InfoUser';
import {useWindowDimensions} from 'react-native';

export const InfoUserV = () => {
  const [totalMoney] = useState(1000);
  const [moneyAvailable] = useState(200000);
  const {height, width} = useWindowDimensions();
  const calculateValue = (Percentage: number, total: number) => {
    return (Percentage / 100) * total;
  };
  return (
    <InfoUserC
      data={{moneyAvailable, totalMoney, height, width}}
      calculateValue={calculateValue}
    />
  );
};
