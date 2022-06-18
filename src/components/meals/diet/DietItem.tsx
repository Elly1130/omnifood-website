import { IoCheckmarkOutline } from "react-icons/io5";
import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  .icon {
    width: 3rem;
    height: 3rem;
    color: #e67e22;
  }
`;

type DietItemProps = {
  diet: string,
};

const DietItem: React.FC<DietItemProps> = ({ diet }) => {
  return (
    <ListItem>
      <IoCheckmarkOutline className='icon' />
      <span>{diet}</span>
    </ListItem>
  );
};

export default DietItem;