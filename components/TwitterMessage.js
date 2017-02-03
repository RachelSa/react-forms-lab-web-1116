const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.maxChars = this.props.maxChars
    this.state = {
      value: "",
      charCount:0
    };
  }

  handleChange(event){
    this.setState({value: event.target.value})
    this.setState({charCount: event.target.value.length})
    //console.log(this.maxChars - this.state.value.length)
    //console.log(this.state.value.length)
  }

  counter(){
    return this.maxChars - this.state.value.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <div>Characters remaining: {this.maxChars - this.state.charCount}</div>
      </div>
    );
  }
}

module.exports = TwitterMessage;
