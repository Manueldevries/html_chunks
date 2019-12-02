import React from 'react'

interface ISquareProps {
  value: any
  onClick: () => void;
}

interface ISquareState {
  value: string | null
}

class Square extends React.Component<ISquareProps, ISquareState> {


  render() {
    return (
      <button className="square" onClick={(): void =>
        this.props.onClick()
      }>
        {this.props.value}
      </button>
    );
  }
}
export default Square;