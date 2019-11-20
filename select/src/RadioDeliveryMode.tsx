import React from 'react';
import { IDeliveryMode } from './Delivery'

interface IRadioDeliveryModeProps {
  deliveryMode: IDeliveryMode,
  handleChange: (index: number) => void;
  // handleClickLog: (index: number) => void;
}

const RadioDeliveryMode: React.FC<IRadioDeliveryModeProps> = props => {
  const id = "deliveryMode" + props.deliveryMode.index;

  return (
    <div>
      <label htmlFor={id}>{props.deliveryMode.label}</label>
      <input
        id={id}
        type="radio"
        checked={props.deliveryMode.isSelected}
        onChange={() => props.handleChange(props.deliveryMode.index)} />
    </div>
  );
}

export default RadioDeliveryMode;
