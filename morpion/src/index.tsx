import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Square from './Square';

interface IBoardState {
  squares: (string | null)[];
  xIsNext: boolean
}

class Board extends React.Component<{}, IBoardState> {
  constructor(props: IBoardState) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  handleClick(i: number) {
    const squarcp = [...this.state.squares]
    squarcp[i] = (this.state.xIsNext && 'x') || 'o'
    //
    this.setState({ squares: squarcp, xIsNext: !this.state.xIsNext })

  }

  renderSquare(i: number) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => { this.handleClick(i) }}
    />;
  }

  render() {
    const status = `Prochain joueur : ${this.state.xIsNext ? 'X' : 'O'}`;
    const winner = calculateWinner(this.state.squares);
    console.log(winner);
    calculateWinner(this.state.squares);

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

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    // X, X, X
    // 0, O, O
    // 0, O, O
    [3, 4, 5],
    // 0, O, O
    // X, X, X
    // 0, O, O
    [6, 7, 8],
    // 0, O, O
    // 0, O, O
    // X, X, X
    [0, 3, 6],
    // X, O, O
    // X, O, O
    // X, O, O
    [1, 4, 7],
    // O, X, O
    // O, X, O
    // O, X, O
    [2, 5, 8],
    // O, O, X
    // O, O, X
    // O, O, X
    [0, 4, 8],
    // O, O, X
    // O, X, O
    // X, O, O
    [2, 4, 6],
    // O, O, X
    // O, X, O
    // X, O, O
  ];

  lines.map((line) => {
    const [a, b, c] = line;
    let gagnant: (string | null) = squares[a]
    // console.log(`a: ${a}, b: ${b}, c:${c}.`);
    // console.log(`squares[a]: ${squares[a]}, squares[b]: ${squares[b]}, squares[c]:${squares[c]}.`);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // console.log(`le joueur: ${squares[a]} à gagné 🏆`);
      console.log(`le joueur: ${gagnant !== null && gagnant.toUpperCase()} à gagné 🏆`);
      return squares[a];
    }
    return null; // TS array-callback-return
  })
  // console.log(`____________nowin____________`);
  return null;
}