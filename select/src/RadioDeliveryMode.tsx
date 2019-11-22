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
          {props.deliveryMode.delays.map((i, x) => {
            console.log(`parentChecked? ${props.deliveryMode.isSelected}`);
            return (
              <li key={i.index}>
                <input
                  id={`${props.deliveryMode.name}Delays_${i.index}`}
                  checked={i.isSelected}
                  onChange={() => props.handleReset(i.index, props.deliveryMode.index)}
                  type="radio" name="delivery-mode-sub" />
                <label htmlFor={`${props.deliveryMode.name}Delays_${i.index}`}>{i.label}</label>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default RadioDeliveryMode;
