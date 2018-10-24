import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Calculator() {
  return (
    <div className="container">
      <div className="calc-body">
        <CalcBoard />
      </div>
    </div>
  );
}


class CalcBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  renderCalcScreen(value) {
    return (
      <div className="calc-screen">
          <div className="operation">
            {value}
          </div>
      </div>
    )
  }

  handleClick(val) {
    if(val === "="){
      let result = '';
      try{
        result = eval(this.state.value);
      }
      catch (e) {
        alert('invalid expression');
      };
      this.setState({
        value: result,
      });
    }
    else if(val === "C"){
      this.setState({
        value: '',
      });
    }
    else {
      this.setState({
        value: this.state.value + val,
      });
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={i}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderCalcScreen(this.state.value)}
        <div className="calc-button-row">
          {this.renderSquare('1')}
          {this.renderSquare('2')}
          {this.renderSquare('3')}
          {this.renderSquare('+')}
        </div>
        <div className="calc-button-row">
          {this.renderSquare('4')}
          {this.renderSquare('5')}
          {this.renderSquare('6')}
          {this.renderSquare('-')}
        </div>
        <div className="calc-button-row">
          {this.renderSquare('7')}
          {this.renderSquare('8')}
          {this.renderSquare('9')}
          {this.renderSquare('*')}
        </div>
        <div className="calc-button-row">
          {this.renderSquare('C')}
          {this.renderSquare('0')}
          {this.renderSquare('=')}
          {this.renderSquare('/')}
        </div>
      </div>
    );
  }
}


function Square(props) {
  return (
    <button className="button" onClick={props.onClick}>    
      {props.value}
    </button>
  );
}


// ========================================

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

