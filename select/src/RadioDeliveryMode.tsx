import React from 'react';
import { IDeliveryMode } from './Delivery'

interface IRadioDeliveryModeProps {
  deliveryMode: IDeliveryMode,
  handleClick: (index: number) => void;
}

const RadioDeliveryMode: React.FC<IRadioDeliveryModeProps> = props => {
  return (
    <div>
      <label>{props.deliveryMode.label}</label>
      <input
        type="radio"
        checked={props.deliveryMode.isSelected}
        onChange={() => props.handleClick(props.deliveryMode.index)} />
    </div>
  );
}

export default RadioDeliveryMode;
