

var GroceryList = (props) => (
<ul>
  <GroceryListItem item={props[0]}/>
  <GroceryListItem item={props[1]}/>
</ul>
);

var GroceryListItem = (props) => (
  <li> {props.item} </li>
);

ReactDOM.render(<GroceryList {['apples', 'oranges']}/>, document.getElementById('app'));


