import React from 'react';

class CycleCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      value: 0,
    };
  }

  onClick = () => {
    const { cycle = 1 } = this.props;
    const { value } = this.state;

    this.setState({
      value: (value + 1) % cycle,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <button
        data-testid="cycle-counter"
        onClick={this.onClick}
        style={{ fontSize: '1rem', width: 120, height: 30, }}
      >{value}</button>
    );
  }
}

export default CycleCounter;
