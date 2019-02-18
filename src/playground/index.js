console.log("App.js is running");

// let template = (
//   <div>
//     <h1>Indecision App</h1>
//     <p>This is some info</p>
//     <ol>
//       <li>item one</li>
//       <li>item two</li>
//     </ol>
//   </div>
// );
const app = {
  title: "Some Title",
  subtitle: "some subtitle",
  options: ["One", "Two"]
};
let template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>This is some info</p>}
    {app.options &&
      (app.options.length > 0 ? (
        <p>Here are your options</p>
      ) : (
        <p>No options</p>
      ))}
  </div>
);

const multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map(
      number =>
        this.multiplyBy +
        " multiply by " +
        number +
        " = " +
        this.multiplyBy * number
    );
  }
};

console.log(multiplier.multiply());
const getFirstName = fullName => fullName.split(" ")[0];
console.log(getFirstName("sanil sharma"));
// var template = React.createElement("h1", { id: "some id" }, "some text");
const appRoot = document.getElementById("root");
ReactDOM.render(template, appRoot);

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
//   console.log("addOne", count);
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
//   console.log("minusOne", count);
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne} className="button">
//         +1
//       </button>
//       <button onClick={reset}>reset</button>
//       <button onClick={minusOne}>-1</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
