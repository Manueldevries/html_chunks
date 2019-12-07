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
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = winner + ' a gagné';
    } else {
      console.log(winner);
      status = 'Prochain joueur : ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        {/* <div className="win">{winner}</div> */}
        {console.log(calculateWinner(this.state.squares))}
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

// function calculateWinner(squares: (string | null)[]) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   lines.map((line) => {
//     const [a, b, c] = line;
//     // let gagnant: (string | null) = squares[a]
//     // console.log(`a: ${a}, b: ${b}, c:${c}.`);
//     // console.log(`squares[a]: ${squares[a]}, squares[b]: ${squares[b]}, squares[c]:${squares[c]}.`);
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       // console.log(`le joueur: ${gagnant !== null && gagnant.toUpperCase()} à gagné 🏆`);
//       return squares[a] !== null && squares[a];
//     }
//     return null; // TS array-callback-return
//   })
//   return null;
// }
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

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // console.log(`for->squares[a]${squares[a]} && squares[a]${squares[a]} === squares[b]${squares[b]} && squares[a]${squares[a]} === squares[c]${squares[c]}`);
    // console.log(lines[i]);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // alert('gagnant?')
      console.log(squares[a], i);
      return squares[a];
    }
  }

  // lines.map((line, idx) => {
  //   const [a, b, c] = line;
  //   // console.log(`map->squares[a]${squares[a]} && squares[a]${squares[a]} === squares[b]${squares[b]} && squares[a]${squares[a]} === squares[c]${squares[c]}`);
  //   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //     // alert('gagnant?')
  //     return squares[a];
  //   }
  //   console.log(squares[a], idx);
  //   return squares[a];
  // })

  return null;
}