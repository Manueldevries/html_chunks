import React from 'react';
import { IDeliveryMode } from './Delivery'

interface IRadioDeliveryModeProps {
  deliveryMode: IDeliveryMode,
  handleChange: (index: number) => void;
  handleReset: (name: number, parent: number) => void;
  // handleClickLog: (index: number) => void;
}

const RadioDeliveryMode: React.FC<IRadioDeliveryModeProps> = props => {
  const id = "deliveryMode" + props.deliveryMode.index;

  return (
    <div>
      <input
        id={id}
        type="radio"
        checked={props.deliveryMode.isSelected}
        onChange={() => props.handleChange(props.deliveryMode.index)} />
      <label htmlFor={id}>{props.deliveryMode.label}</label>
      <div className="delivery__list">
        <ul>
          {props.deliveryMode.delays.map((delays) => {
            // i
            return (
              <li key={delays.index}>
                <input
                  id={`${props.deliveryMode.name}Delays_${delays.index}`}
                  checked={delays.isSelected}
                  onChange={() => props.handleReset(delays.index, props.deliveryMode.index)}
                  type="radio"
                  name="delivery-mode-sub" />
                <label htmlFor={`${props.deliveryMode.name}Delays_${delays.index}`}>
                  {delays.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default RadioDeliveryMode;
