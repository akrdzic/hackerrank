import React from 'react';

class Translator extends React.Component {
  constructor() {
    super();
    this.state = {
      translated: '',
    };
  }

  onInputChange = e => {
    const key = e.target.value;
    const { translations } = this.props;
    this.setState({
      translated: translations.get(key) || '',
    });
  };

  render() {
    const { translated } = this.state;

    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input
              type="text"
              onChange={this.onInputChange}
              className="text-input"
              data-testid="text-input" />
          </div>
          <div className="input-container">
            <span>output:</span>
            <input
              type="text"
              value={translated}
              className="text-output"
              data-testid="text-output"
              readOnly />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
