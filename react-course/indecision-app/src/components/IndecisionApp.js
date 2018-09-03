import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleClearSelectedOption = () => {
    console.log('Close Modal');
    this.setState(() => ({ selectedOption: undefined}));
  }
  
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick = () => {
    let rand = Math.floor(Math.random() * this.state.options.length);
    this.setState( () => ({
      selectedOption: this.state.options[rand]
    }));
  }

  handleAddOption = (option) => {
    if(!option){
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
 
  }

  componentDidMount(){
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options){
        this.setState(() => ({options}));
      }
    }
    catch(e){
      // Do nothing
    } 
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('Saving data')
    }
  }

  componentWillUnmount(){
    console.log('component Will Unmount')
  }

  
  render(){
    const subtitle = 'Simplify your life!';
    
    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
          />
      </div>
    )
  }
};

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;