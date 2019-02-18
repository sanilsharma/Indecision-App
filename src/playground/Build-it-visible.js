class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState(prevState => {
      return { visibility: !prevState.visibility };
    });
  }

  render() {
    const { visibility } = this.state;
    return (
      <div>
        <h1>Visiblity Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {visibility ? "Hide details" : "Show details"}
        </button>
        {visibility && <p>the text to be hidden and shown</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("root"));

// const appRoot = document.getElementById("root");

// let visiblity = false;
// const toggleVisiblity = () => {
//   visiblity = !visiblity;
//   render();
// };
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visiblity Toggle</h1>
//       <button onClick={toggleVisiblity}>
//         {visiblity ? "Hide Details" : "Show Details"}
//       </button>
//       {visiblity && <p>here are the details you can now see!</p>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();
