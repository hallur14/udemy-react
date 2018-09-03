class Counter extends React.Component {
  constructor (props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    };
  }

  componentDidMount(){
    const stringCount = localStorage.getItem('count');
    const c =  parseInt(stringCount, 10);

    if(!isNaN(c)){
      this.setState(() => ({count: c}))
    }
      
   
    console.log('Loading Data')

  }

  componentDidUpdate(){
    localStorage.setItem('count', this.state.count);
    console.log('Saving Data')
  }

  handleAddOne(){
    this.setState((prevState) => {
      return {
        count : prevState.count + 1
      }
    });
  }

  handleMinusOne(){
    this.setState((prevState) => {
      return {
        count : prevState.count - 1
      }
    });
  }

  handleReset(){
    this.setState(() => {
      return {
        count : 0
      }
    });
  }

  render(){
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
    count: 0
}


ReactDOM.render(<Counter />, document.getElementById('app'));

