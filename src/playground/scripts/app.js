"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const obj = {
//   name: "vikram",
//   getName() {
//     return this.name;
//   }
// };

// const getName = obj.getName.bind(obj);

// console.log(getName());

//Stateless functional component

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: []
    };
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteSingular = _this.handleDeleteSingular.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);
        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {}
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("unmount");
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleDeleteSingular",
    value: function handleDeleteSingular(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add option !!!";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option is already exist !!!";
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.state.options;

      var title = "Indecision App";
      var subtitle = "Put your life in the hands of a computer.";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, { hasOption: options.length > 0, handlePick: this.handlePick }),
        React.createElement(Options, {
          options: options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteSingular: this.handleDeleteSingular,
          hasOption: options.length > 0
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

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

var Header = function Header(props) {
  var title = props.title,
      subtitle = props.subtitle;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      title
    ),
    subtitle && React.createElement(
      "h2",
      null,
      subtitle
    )
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

var Action = function Action(props) {
  var hasOption = props.hasOption,
      handlePick = props.handlePick;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !hasOption, onClick: handlePick },
      "What should I do?"
    )
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

var Options = function Options(props) {
  var options = props.options,
      handleDeleteOptions = props.handleDeleteOptions,
      hasOption = props.hasOption,
      handleDeleteSingular = props.handleDeleteSingular;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !hasOption, onClick: handleDeleteOptions },
      "Remove All"
    ),
    options.length === 0 && React.createElement(
      "p",
      null,
      "Please add and an option to get started"
    ),
    React.createElement(
      "ol",
      null,
      options.map(function (option) {
        return React.createElement(Option, {
          handleDeleteSingular: handleDeleteSingular,
          key: option,
          option: option
        });
      })
    )
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

var Option = function Option(props) {
  var option = props.option,
      handleDeleteSingular = props.handleDeleteSingular;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "li",
      null,
      option,
      React.createElement(
        "button",
        { onClick: function onClick(e) {
            return handleDeleteSingular(option);
          } },
        "remove"
      )
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });

      if (!error) {
        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;

      return React.createElement(
        "div",
        null,
        error && React.createElement(
          "p",
          { style: { color: "red" } },
          error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// const User = props => {
//   const { name, age } = props;
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// };

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("root"));
