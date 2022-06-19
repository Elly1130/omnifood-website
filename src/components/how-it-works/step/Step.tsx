import { Fragment } from 'react';

import { getStepData, StepDataType } from '../../../data/Steps';
import StepImage from './StepImage';
import StepText from './StepText';

export type StepDataProps = {
  data: StepDataType;
};

const Step = () => {
  const StepData = getStepData();

  return (
    <>
      {StepData.map(data => {
        if (parseInt(data.id) % 2 === 1) {
          return (
            <Fragment key={data.id}>
              <StepText key={data.id} data={data} />
              <StepImage key={data.id} data={data} />
            </Fragment>
          );
        } else {
          return (
            <Fragment key={data.id}>
              <StepImage key={data.id} data={data} />
              <StepText key={data.id} data={data} />
            </Fragment>
          );
        }
      })}
    </>
  );
};

export default Step;