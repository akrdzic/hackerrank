import React from 'react';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      value: '',
    };
  }

  onValueChange = e => {
    this.setState({
      value: e.target.value,
    });
  }

  appendValue = () => {
    const { value, words } = this.state;
    this.setState({
      words: [...words, value],
      value: '',
    });
  };

  undoValue = () => {
    const { words } = this.state;
    this.setState({
      words: words.slice(0, -1),
    });
  };

  render() {
    const { words, value } = this.state;
    return (
      <React.Fragment>
        <div className="controls">
          <input
            className="word-input"
            type="text"
            value={value}
            onChange={this.onValueChange}
            data-testid="word-input" />
          <button
            onClick={this.appendValue}
            disabled={!value}
            data-testid="append-button"
          >Append</button>
          <button
            onClick={this.undoValue}
            disabled={!words.length}
            data-testid="undo-button"
          >Undo</button>
        </div>
        <div className="text-field" data-testid="text-field">{ words.join(' ') }</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
