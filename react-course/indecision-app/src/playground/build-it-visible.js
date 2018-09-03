// VisibilityToggle - render, constructor, handleToggle -> bind
// visibilty - false

class VisibilityToggle extends React.Component{
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibilty: false
    }
  }

  handleToggleVisibility(){
    console.log(this.state.visibilty);

    this.setState((prevState) => {
      return{
        visibilty : !prevState.visibilty 
      };
    });
  }

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.visibilty ? 'Hide details' : 'Show details'}</button>
        <p>{this.state.visibilty && 'Here are some details for you'}</p>
      </div>
    )
  };
}


console.log('app is running');
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let showInfo = false;

// const showDetailsButton = () => {
//   if(showInfo)
//     showInfo = false;
//   else
//     showInfo = true;

//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showDetailsButton}>{showInfo ? 'Hide details' : 'Show details'}</button>
//       <p>{showInfo && 'Some info for you!'}</p>
//     </div>
//   )

    
// };

// render();

