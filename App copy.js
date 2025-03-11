import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => RactElement-JS Objet => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

//JSX - is not HTML inside JS, JSX is html-like or XML-like syntax.
// jSX (transpiled before it reaches the JS Engine) - PARCEL - Babel is package which installed by parcel and it is used to transpiled the JSX code.
//In short Babel is transpiled(convert JSX code to JS which will understandable by JS engine/React/Browser) JSX code to JS/React code.
// JSX => Babel transpiles it to React.createElement => RactElement-JS Objet => HTMLElement(render)
// const jsxHeading = <h1 id="heading" >Namaste React using JSX 🚀</h1>
// const jsxHeading = <h1 className="head">Namaste React using JSX 🚀</h1>;

//React Element
/*const heading = <h1 className="head">Namaste React using JSX 🚀</h1>;
const title = (
  <h1 className="head">Namaste React using JSX 🚀(react element)</h1>
);
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);*/
// React Component
/*
Class Based Component - Old
Function Based Component - New:- Is a normal javascript function, which return some JSX code,
OR It is javascript function which returns a React element.
 */
const Title = () => (
  <h1 className="head">Namaste React using JSX 🚀</h1>
); //------------Arrow Function, its good way to write(industry standard, good way to write, cleaner way) like this you can use normal function also like below:
// const Title = function(){
//   return(
//   <h1 className="head">Namaste React using JSX 🚀</h1>
// )};

// const HeadingComponent = () => {
//   return <h1 className="heading">Namaste React Functional Component</h1>
// };

//Component Composition: one component inside in another component
const HeadingComponent = () => (
  <div id="container">
    <Title />  
    <Title></Title>
    {Title()}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
//for one line of function component we can above code like this HeadingComponent2
const HeadingComponent2 = () => (
  <h1 className="heading">Namaste React Functional Component</h1>
);

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
// root.render(heading);
// root.render(jsxHeading);

// JSX (JavaScript XML) is not HTML inside JavaScript, JSX is a syntax extension for JavaScript. JSX is a convenient way to write HTML in JavaScript.

// Episode 01 & 02
// import React from "react";
// import ReactDOM from "react-dom/client";
// {
//   /*
// <div id="parent">
//   <div id="child1">
//     <h1>I'm h1 tag</h1>
//     <h2>I'm h2 tag</h2>
//   </div>
//     <div id="child2">
//     <h1>I'm h1 tag</h1>
//     <h2>I'm h2 tag</h2>
//   </div>
// </div>

// ReactElement(Object) => HTML(Browser understands)
// */
// }

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "This is Namaste React 🚀"),
//     React.createElement("h2", {}, "I'm h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag"),
//   ]),
// ]);

// //JSX for simplify above code

// console.log(parent);
// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading", xyz:"abc" }, //attribute like -> id: "heading", xyz:"abc"
// //   "Hello World from React!"
// // );
// //heading is an object here not h1 tag
// // console.log(heading); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading); //render method convert this object in h1 tag here
// root.render(parent);
