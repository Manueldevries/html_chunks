import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Square from './Square';

interface IBoardProps {

}
interface IBoardState {
  squares: null[] | string[];
}

class Board extends React.Component<IBoardProps, IBoardState> {
  constructor(props: any) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    }
  }
  handleClick(i: any) {
    // const squares = this.state.squares.slice()
    // squares[i] = 'x'
    // this.setState({ squares: squares })

    const squares = this.state.squares
    squares.map((it: any) => console.log(it))
    // return squares
    // return {...squares}
  }
  renderSquare(i: number) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => { this.handleClick(i) }}
    />;
  }

  componentDidMount() {
    console.log(this.state.squares);
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

/**
 * React doc morpion exo → understand immutability and why it matters
 * https://fr.reactjs.org/tutorial/tutorial.html#completing-the-game
*/