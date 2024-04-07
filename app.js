const heading = React.createElement(
  "h1",
  { id: 'heading', context: 'learning react'},[
    React.createElement('div', {id: 'child1'}, [
  React.createElement(
    "h1",
    { id: 'heading1', context: 'learning react'},
    "h1 tag"
  ),
  React.createElement(
    "h2",
    { id: 'heading2', context: 'learning react'},
    "h2 tag"
  ),
  ]), 
  React.createElement('div', {id: 'child2'}, [
    React.createElement(
      "h1",
      { id: 'heading1', context: 'learning react'},
      "h1 tag"
    ),
    React.createElement(
      "h2",
      { id: 'heading2', context: 'learning react'},
      "h2 tag"
    ),
    ])
]  
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading, root);

root.render(heading);