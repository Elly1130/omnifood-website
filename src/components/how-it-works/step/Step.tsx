import styled from 'styled-components';

import { getStepData, StepDataType } from '../../../data/Steps';
import StepImage from './StepImage';
import StepText from './StepText';

export type StepDataProps = {
  data: StepDataType;
};

const Step = () => {
  const StepData = getStepData();

  return <>
    {StepData.map(data => {
      if (parseInt(data.id) % 2 === 1) {
        return <>
          <StepText data={data} />
          <StepImage data={data} />
        </>;
      } else {
        return <>
          <StepImage data={data} />
          <StepText data={data} />
        </>;
      }
    })}
  </>;
};

export default Step;