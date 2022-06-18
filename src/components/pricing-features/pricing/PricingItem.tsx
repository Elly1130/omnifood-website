import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";
import { ListItem } from '../../meals/diet/DietItem';

type PricingItemProps = {
  specification: string,
};

const PricingItem: React.FC<PricingItemProps> = ({ specification }) => {
  return (
    <ListItem>
      {specification === '' ? <IoCloseOutline className='icon' /> : <IoCheckmarkOutline className='icon' />}
      <span>{specification}</span>
    </ListItem>
  );
};

export default PricingItem;