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

    const deliveryModes: IDeliveryMode[] = this.state.deliveryModes.map((d: IDeliveryMode) => {

      // console.log(`index: ${index}, d.index: ${d.index}`);
      // console.log('avant:', d);
      const mode: IDeliveryMode = {
        ...d,
        isSelected: d.index === index
      };

      // console.log('après:', mode);

      return mode;
      // return { ...d, isSelected: d.index === index };
    });

    this.setState({ deliveryModes });
  }

  public handeDeliveryReset = (index: number, parent: number): void => {
    console.log(`parent: ${this.state.deliveryModes[parent].name}, isSelected:${this.state.deliveryModes[parent].isSelected}`);

    const delays = this.state.deliveryModes[parent].delays.map(i => {
      console.log(`index ${index} === ${i.index}, isSel ${index === i.index}, i.isSel ${i.isSelected}, ${i.label}`);
      // console.log({ ...i, isSelected: i.index === index });
      const delays: IDelays = {
        ...i,
        isSelected: i.index === index
      };
      console.log({ delays });
      return delays
      console.info({ i });
    })
    // https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react
    // this.setState({ {...deliveryModes, delays: delays} });
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
