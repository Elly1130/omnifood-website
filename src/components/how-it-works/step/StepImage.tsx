import Image from 'next/image';
import styled, { css } from 'styled-components';

import { StepDataProps } from './Step';

const BeforeAfter = css`
  content: "";
  display: block;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ::before{
    ${BeforeAfter}
    width: 60%;
    padding-bottom: 60%;
    background-color: #fdf2e9;
    z-index: -2;
  }

  ::after{
    ${BeforeAfter}
    width: 45%;
    padding-bottom: 50%;
    background-color: #fae5d3;
    z-index: -1;
  }

  img{
    width: 35%;
  }
`;

const StepImage: React.FC<StepDataProps> = ({ data }) => {
  return <ImageWrapper>
    <img src={data.img} alt={data.alt} />
  </ImageWrapper>;
};

export default StepImage;