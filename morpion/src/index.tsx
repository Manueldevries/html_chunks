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
    // const winner = calculateWinner(this.state.squares);
    // calculateWinner(this.state.squares);
    // const status = `Prochain joueur : ${this.state.xIsNext ? 'X' : 'O'}.`;
    let status;
    const winner = calculateWinner(this.state.squares);
    console.log(winner);
    if (winner !== undefined && winner) {
      status = winner + ' a gagné';
    } else {
      status = 'Prochain joueur : ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        {/* <div className="win">{winner}</div> */}
        <div className="board">
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
function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // for (let i = 0; i < lines.length; i++) {
  //   const [a, b, c] = lines[i];
  //   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //     // alert('gagnant?')
  //     console.log('ret', squares[a], 'a,b,c:', a, b, c);
  //     // ici on sort de la fn
  //     return squares[a];
  //   }
  // }

  const win = lines.map((line) => {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // console.log('ret', squares[a], 'a,b,c:', a, b, c);
      return squares[a];
    }
    return null;
  })

  return win + 'yolo';
}