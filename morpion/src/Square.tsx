import React from 'react'

interface ISquareProps {
  value: number
}

interface ISquareState {
  value: string | null
}

class Square extends React.Component<ISquareProps, ISquareState> {
  constructor(props: ISquareProps) {
    super(props)
    this.state = {
      value: null
    }
  }

  render() {
    return (
      <button className="square" onClick={(): void =>
        this.setState({ value: 'X' })
      }>
        {this.state.value}
      </button>
    );
  }
}
export default Square;