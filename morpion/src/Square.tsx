import React from 'react'

interface ISquareProps {
  // value: number;
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<ISquareProps> = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;

// class Square extends React.Component<ISquareProps> {
//   render() {
//     return (
//       <button className="square" onClick={() =>
//         this.props.onClick()
//       }>
//         {this.props.value}
//       </button>
//     );
//   }
// }
// export default Square;
