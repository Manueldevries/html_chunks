import React from 'react';
import RadioDeliveryMode from './RadioDeliveryMode';

export interface IDelays {
  isSelected: boolean;
  label: string;
  index: number;
}

export interface IDeliveryMode {
  name: string;
  isSelected: boolean;
  label: string;
  index: number;
  delays: IDelays[]; // reseigne la structure html des sous btn radio
}

interface IDeliveryState {
  deliveryModes: IDeliveryMode[];
}

export default class Delivery extends React.Component {

  public state: IDeliveryState = {
    deliveryModes: [{
      index: 0,
      label: 'Domicile',
      isSelected: false,
      name: 'domicile',
      delays: [{
        index: 0,
        label: 'Livraison sous 10 jours',
        isSelected: false
      }, {
        index: 1,
        label: 'Livraison sous 72h',
        isSelected: false
      }, {
        index: 2,
        label: 'Livraison sous 24h',
        isSelected: false
      }]
    }, {
      index: 1,
      label: 'Point relais',
      name: 'relais',
      isSelected: false,
      delays: [{
        index: 0,
        label: 'Livraison sous 10 jours',
        isSelected: false
      }, {
        index: 1,
        label: 'Livraison sous 48Sh',
        isSelected: false
      }]
    }]
  }

  public handeDeliveryModeClick = (index: number): void => {
    // reset delays
    this.state.deliveryModes.map(i => {
      return i.delays.map(i => i.isSelected = false);
    });

    const deliveryModes: IDeliveryMode[] = this.state.deliveryModes.map((d: IDeliveryMode) => {
      // const mode: IDeliveryMode = { ...d, isSelected: d.index === index };
      // return mode;
      return { ...d, isSelected: d.index === index };
    });
    this.setState({ deliveryModes });
  }

  public handeDeliveryReset = (index: number, parent: number): void => {
    const deliveryModes = this.state.deliveryModes

    deliveryModes.map(i => {
      // reset delays
      i.delays.map(i => i.isSelected = false);
      deliveryModes[parent].delays[index].isSelected = true;
    });
    // change state delays.radio all deliveryModes state
    deliveryModes[parent].isSelected && this.setState({ deliveryModes });
  }

  public render(): JSX.Element {
    return (
      <div className="delivery">
        <h1>Mode de livraison</h1>

        <div>
          {
            this.state.deliveryModes.map((d: IDeliveryMode) => {
              return <RadioDeliveryMode
                key={d.index}
                deliveryMode={d}
                handleChange={this.handeDeliveryModeClick}
                handleReset={this.handeDeliveryReset}
              />
            })
          }
        </div>
      </div>
    );
  }
}
