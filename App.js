{
  /* 
<div id="parent">
  <div id="child1">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
    <div id="child2">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div> 

ReactElement(Object) => HTML(Browser understands)
*/
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

//JSX for simplify above code

console.log(parent);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz:"abc" }, //attribute like -> id: "heading", xyz:"abc"
//   "Hello World from React!"
// );
//heading is an object here not h1 tag
// console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //render method convert this object in h1 tag here
root.render(parent);
