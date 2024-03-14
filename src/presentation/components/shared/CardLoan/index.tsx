import React from 'react';
import {CardLoanC} from './CardLoan';
import {TState} from './types';

export const CardLoanV = ({
  backgroundColor,
  iconName,
  title,
  description,
  state,
}: {
  backgroundColor: string;
  iconName: string;
  title: string;
  description: string;
  state: TState;
}) => {
  return (
    <CardLoanC
      backgroundColor={backgroundColor}
      iconName={iconName}
      title={title}
      description={description}
      state={state}
    />
  );
};
