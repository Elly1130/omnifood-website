import styled from 'styled-components';
import { device, Grid, Grid2Cols } from '../GlobalStyle';

import Button from '../ui/Button';

const Form = styled.form`
  display: grid;
  ${Grid2Cols}
  column-gap: 3.2rem;
  row-gap: 2.4rem;

  label {
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }

  input, select {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.8rem;
    font-family: inherit;
    color: inherit;
    border: none;
    background-color: #fdf2e9;
    border-radius: 9px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    ::placeholder {
      color: #aaa;
    }
  }

  button {
    border: none;
    background-color: #45260a;
    color: #fdf2e9;
    align-self: end;
    padding: 1.2rem;

    &:hover, &:active {
      background-color: #fff;
      color: #555;
    }

    @media (${device.tablet}) {
      margin-top: 1.2rem;
    }
  }

  *:focus {
    outline: none;
    box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);
  }

  @media (${device.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const CTAForm = () => {
  return (
    <Form action='#'>
      <div>
        <label htmlFor='full-name'>Full Name</label>
        <input id='full-name' type="text" placeholder='John Smith' required />
      </div>
      <div>
        <label htmlFor='email'>Email Address</label>
        <input id='email' type="email" placeholder='me@example.com' required />
      </div>
      <div>
        <label htmlFor='select-where'>Where did you here from us?</label>
        <select id='select-where' required>
          <option value=''>Please choose one option:</option>
          <option value='friends'>Friends and Family</option>
          <option value='youtube'>Youtube Video</option>
          <option value='podcast'>Podcast</option>
          <option value='ad'>Facebook Ad</option>
          <option value='others'>Others</option>
        </select>
      </div>
      <Button>Sign up now</Button>
    </Form>
  );
};

export default CTAForm;