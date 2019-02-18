import React, { Component } from "react";
import Header from "../Header/Header";
import Action from "../Action/Action";
import Options from "../Options/Options";
import AddOption from "../AddOption/AddOption";
import OptionModal from "../OptionModal/OptionModal";
class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({
          options
        }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  };

  handleDeleteSingular = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add option !!!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option is already exist !!!";
    }
    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  render() {
    const { options } = this.state;
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer.";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action hasOption={options.length > 0} handlePick={this.handlePick} />
          <div className="widget">
            <Options
              options={options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteSingular={this.handleDeleteSingular}
              hasOption={options.length > 0}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          handleClearSelectedOption={this.handleClearSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
