// const obj = {
//   name: "vikram",
//   getName() {
//     return this.name;
//   }
// };

// const getName = obj.getName.bind(obj);

// console.log(getName());

//Stateless functional component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteSingular = this.handleDeleteSingular.bind(this);
  }

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

  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }));
  }

  handleDeleteSingular(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add option !!!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option is already exist !!!";
    }
    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    const { options } = this.state;
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer.";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOption={options.length > 0} handlePick={this.handlePick} />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteSingular={this.handleDeleteSingular}
          hasOption={options.length > 0}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        {/* <User name={"Andrew"} age={25} /> */}
      </div>
    );
  }
}

// IndecisionApp.defaultProps = {
//   options: []
// };

// class Header extends React.Component {
//   render() {
//     const { title, subtitle } = this.props;
//     return (
//       <div>
//         <h1>{title}</h1>
//         <h2>{subtitle}</h2>
//       </div>
//     );
//   }
// }

const Header = props => {
  const { title, subtitle } = props;
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App"
};

// class Action extends React.Component {
//   render() {
//     const { hasOption, handlePick } = this.props;
//     return (
//       <div>
//         <button disabled={!hasOption} onClick={handlePick}>
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

const Action = props => {
  const { hasOption, handlePick } = props;
  return (
    <div>
      <button disabled={!hasOption} onClick={handlePick}>
        What should I do?
      </button>
    </div>
  );
};

// class Options extends React.Component {
//   render() {
//     const { options, handleDeleteOptions, hasOption } = this.props;
//     return (
//       <div>
//         <button disabled={!hasOption} onClick={handleDeleteOptions}>
//           Remove All
//         </button>
//         <ol>
//           {options.map(option => (
//             <Option key={option} option={option} />
//           ))}
//         </ol>
//       </div>
//     );
//   }
// }

const Options = props => {
  const {
    options,
    handleDeleteOptions,
    hasOption,
    handleDeleteSingular
  } = props;
  return (
    <div>
      <button disabled={!hasOption} onClick={handleDeleteOptions}>
        Remove All
      </button>
      {options.length === 0 && <p>Please add and an option to get started</p>}
      <ol>
        {options.map(option => (
          <Option
            handleDeleteSingular={handleDeleteSingular}
            key={option}
            option={option}
          />
        ))}
      </ol>
    </div>
  );
};

// class Option extends React.Component {
//   render() {
//     const { option } = this.props;
//     return (
//       <div>
//         <li>{option}</li>
//       </div>
//     );
//   }
// }

const Option = props => {
  const { option, handleDeleteSingular } = props;
  return (
    <div>
      <li>
        {option}
        <button onClick={e => handleDeleteSingular(option)}>remove</button>
      </li>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({
      error: error
    }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = props => {
//   const { name, age } = props;
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
