const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textarea: "",
      validPoem: null
    };
    
  }

   updateText(event){
    let poem = event.target.value
    this.setState({
      textarea: poem,
      validPoem: this.isValid(poem)
    })
    
  }

  isValid(poem){
    var lines = poem.split('\n')
    if (lines.length === 3 ) {
      var correctFirstLine = lines[0].split(" ").filter(e => String(e).trim()).length == 5 
      var correctThirdLine = lines[2].split(" ").filter(e => String(e).trim()).length == 5 
      var correctSecondLine = lines[1].split(" ").filter(e => String(e).trim()).length == 3  
      return correctFirstLine && correctSecondLine && correctThirdLine 
    }
    return false
}

  

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.textarea} onChange={this.updateText.bind(this)}/>
        {this.state.validPoem ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> }        
      </div>
    );
  }
}

module.exports = PoemWriter;
